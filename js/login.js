$(function() {
    $("#login").click(login);
})

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
        alert(err.message);
      },
      success: function (res) {
        localStorage.setItem("user", res.token);
        localStorage.setItem("role", res.role);
        window.location = "../index.html";
      },
    });
}