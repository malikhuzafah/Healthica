function signup() {
  console.log("signup");
  var name = $("#name-input").val();
  var email = $("#email-input").val();
  var pass = $("#name-input").val();
  var conPass = $("#conPass-input").val();
  if (name.length <= 0) {
    $("#name.err").html("Name is required");
  } else if (email.length <= 0) {
    $("#email.err").html("Email is required");
  } else if (pass.length <= 0) {
    $("#pass.err").html("Password is required");
  } else if (conPass.length <= 0) {
    $("#conPass.err").html("Confirm Password is required");
  } else if (!(conPass === pass)) {
    $("#conPass.err").html("Password and Confirm Password must match");
  } else {
    $.ajax({
      url: "http://localhost:4000/api/users/register",
      method: "POST",
      data: {
        name: name,
        email: email,
        password: pass,
      },
      error: function (err) {
        alert("somethin went wrong try again");
        console.log(error);
      },
      success: function (res) {
        console.log(res);
        window.location = "../login.html";
      },
    });
  }
}

$(function () {
  $("#signup").on("click", signup);
});
