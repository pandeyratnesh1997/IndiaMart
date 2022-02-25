function signUp(e) {
  e.preventDefault();
  let myForm = document.getElementById("signUpForm");
  let name = myForm.name.value;
  let email = myForm.email.value;
  let number = myForm.number.value;
  let password = myForm.pass.value;

  // console.log(name, email, password)

  if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify([]));
  }

  // 0. prepare user data

  let user = {
    // in this i didnt give value name because key and value name is same
    name,
    email,
    number,
    password,
  };


  // 1. get arr from localstorage first

  let arr = JSON.parse(localStorage.getItem("users"));

//   console.log("arr: ", arr)

  // 2. push new data to arr

  arr.push(user); // added new user

  console.log(arr)

  localStorage.setItem("users", JSON.stringify(arr));
}


