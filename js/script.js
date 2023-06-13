$(function () {
  todayDate();
  start();
  // loadCart();
  $("#navbar-toggle").click(opennav);
  window.onscroll = function () {
    scrollFunction();
  };
  $(".navbar-brand").click(function () {
    $(window).scrollTop(0);
  });
  $(".nav-link").click(function () {
    $(window).scrollTop(0);
  });
  $("#send").click(validate);
  loadMedicines();
  console.log($(".addToCart"));
  $(".addToCart").on("click", addToCart);
});


var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter-value").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    a = 1;
  }
});

// $(document).on("click", 'a[href^="#"]', function (event) {
//   event.preventDefault();
//   $("html, body").animate(
//     {
//       scrollTop: $($.attr(this, "href")).offset().top - 40,
//     },
//     500
//   );
// });

function opennav() {
  var nav = $("#navbarSupportedContent");
  nav.style.height = "0";
}

function todayDate() {
  var d = new Date();
  var n = d.getFullYear() + "  ";
  return (document.getElementById("date").innerHTML = n);
}



function validate() {
  var c = 0;
  if ($("#name-input").val().length === 0) {
    $("#name-err").html("Name is required!");
  } else {
    $("#name-err").html("");
    c++;
  }
  if ($("#email-input").val().length === 0) {
    $("#email-err").html("Email is required!");
  } else {
    $("#email-err").html("");
    c++;
  }
  if ($("#msg-input").val().length === 0) {
    $("#msg-err").html("Please enter some Message!");
  } else {
    $("#msg-err").html("");
    c++;
  }
  if (c >= 3) {
    var email = $("#email-input").val();
    var name = $("#name-input").val();
  } else {
    $("#submitted").html("");
  }
}

function scrollFunction() {
  if (
    document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 80 ||
    $(window).width() < 992
  ) {
    $("#navbar").css("padding", "1% 5%");
    $("#navbar").css("background", "#1C2331");
    $(".nav-link span, #navbarDropdown, .navbar-brand").css("color", "#fff");
    // $(".nav-link span, #navbarDropdown").css("color", "#ffdb58");
    $("#navbar-btn button").removeClass("my-btn");
    $("#navbar-btn button").addClass("my-btn2");
  } else {
    $("#navbar").css("background-color", "transparent");
    $(".nav-link span, #navbarDropdown, .navbar-brand").css("color", "#125468");
    $("#navbar-btn button").addClass("my-btn");
    $("#navbar-btn button").removeClass("my-btn2");
    $("#navbar").css("padding", "2% 5%");
  }
}

function loadMedicines() {
  $.ajax({
    url: "http://localhost:4000/api/medicines",
    method: "GET",
    error: function (err) {
      console.log(err);
    },
    success: function (res) {
      $("#medicines").empty();
      for (var i = 0; i < res.length; i++) {
        $("#medicines").append(
          '<div class="card-container container col-sm-6 col-lg-3"><div class="card"><img src="../images/medicine.jpg" class="card-imp-top"><div class="card-body"><h5 class="card-title">' +
            res[i].name +
            '</h5><h6 class="card-subtile">Rs. ' +
            res[i].price +
            '</h6><h6 class"card-subtilte">' +
            res[i].quantity +
            ' left</h6><button class="btn btn-primary addToCart" onclick="addToCart()">Add to cart</button></div></div></div>'
        );
      }
    },
  });
}

function logout() {
    localStorage.setItem("user", "");
    localStorage.setItem("role", "");
}

function start() {
  if (localStorage.getItem("user").length <= 0) {
    $("#loginOrSignup").show();
    $("#logout").hide();
    $("#admin-link").hide();
  } else {
    $("#loginOrSignup").hide();
    $("#logout").show();
    $("#logout").on("click", logout);
    if (localStorage.getItem("role") === "admin") {
      $("#admin-link").show();
    }
    else {
      $("#admin-link").hide();
    }
  }
}

// function addToCart() {
//   let cart = ["hello", "hi"];
//   setCookie("cart", cart, 30);
//   console.log(getCookie("cart"));
// }

// function loadCart() {
//   $("#cartItems").empty();
//   var cart = getCookie("cart");
//   for (var i=0;i<cart.length;i++) {
//     $("#cartItems").append("<p>" + cart[i] + "</p>");
//   }
// }

// function getCookie(cName) {
//   const name = cName + "=";
//   const cDecoded = decodeURIComponent(document.cookie); //to be careful
//   const cArr = cDecoded.split('; ');
//   let res;
//   cArr.forEach(val => {
//       if (val.indexOf(name) === 0) res = val.substring(name.length);
//   })
//   return res;
// }

// function setCookie(cName, cValue, expDays) {
//   let date = new Date();
//   date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
//   const expires = "expires=" + date.toUTCString();
//   document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
// }