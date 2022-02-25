function signIn(e) {
  e.preventDefault();

  let myForm = document.getElementById("signInForm");

  let email = myForm.email.value;
  let password = myForm.pass.value;

  let allUsers = JSON.parse(localStorage.getItem("users"));

  console.log(allUsers);

  allUsers.forEach(function (user) {
    if (email == user.email && password == user.password) {
      window.location.href = "./abhi/index.html";
    } else {
      alert("please enter valid details");
    }
  });
}
