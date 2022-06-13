// static token;

$(function () {
  $("#login").on("click", login);
});

function login() {
  var email = $("#login-email").val();
  var password = $("#login-pass").val();
  console.log(email + " " + password);
  $.ajax({
    url: "http://localhost:4000/api/users/login",
    method: "POST",
    data: {
      email,
      password,
    },
    error: function (err) {
      console.log(err.message);
    },
    success: function (res) {
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem("user", res);
      }
      window.location = "../index.html";
    },
  });
}
