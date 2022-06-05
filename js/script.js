var a = 0;
$(window).scroll(function () {
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter-value").each(function () {
            var $this = $(this),
            countTo = $this.attr("data-count");
            $({
                countNum: $this.text(),
            }).animate({
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
            });
        });
        a = 1;
    }
});

$(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();
    $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top - 40,
        },
        500
    );
});

function opennav() {
    var nav = document.getElementById("navbarSupportedContent");
    nav.style.height = "0";
}

function todayDate(){
    var d = new Date();
    var n = d.getFullYear() + "  ";
    return document.getElementById("date").innerHTML = n;
}

$(function() {
    todayDate();
    $('#navbar-toggle').click(opennav);
    window.onscroll = function() {scrollFunction()};
    $(".navbar-brand").click(function() {
        $(window).scrollTop(0);
    });
    $(".nav-link").click(function() {
        $(window).scrollTop(0);
    });
    $('#send').click(function() {
        var c = 0;
        if ($('#name-input').val().length === 0) {
            $('#name-err').html("Name is required!");
        }
        else {
            $('#name-err').html('');
            c++;
        }
        if ($('#email-input').val().length === 0) {
            $('#email-err').html("Email is required!");
        }
        else {
            $('#email-err').html('');
            c++
        }
        if ($('#msg-input').val().length === 0) {
            $('#msg-err').html("Please enter some Message!");
        }
        else {
            $('#msg-err').html('');
            c++
        }
        if (c>=3) {
            var email = $("#email-input").val();
            var name = $("#name-input").val();
        }
        else {
            $('#submitted').html('');
        }
    });
})

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 || $(window).width() < 992) {
        $("#navbar").css("padding", "1% 5%");
        $("#navbar").css("background", "#1C2331");
        $(".nav-link span, #navbarDropdown, .navbar-brand").css("color", "#fff");
        // $(".nav-link span, #navbarDropdown").css("color", "#ffdb58");
        $("#navbar-btn button").removeClass("my-btn");
        $("#navbar-btn button").addClass("my-btn2");
    } else {
        $('#navbar').css('background-color','transparent');
        $(".nav-link span, #navbarDropdown, .navbar-brand").css("color", "#125468");
        $("#navbar-btn button").addClass("my-btn");
        $("#navbar-btn button").removeClass("my-btn2");
        $("#navbar").css("padding", "2% 5%");
    }
}

