let userName = document.querySelector("#userName");
let password = document.querySelector("#password");
let form = document.querySelector("#loginForm");
let validated = {
  userName: false,
  password: false,
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validated.userName === true && validated.password === true) {
    form.submit();
  }
});

userName.onkeyup = (e) => {
  if (e.target.value.length < 6) {
    userName.style.border = "1px solid red";
    userName.nextElementSibling.classList.remove("d-none");
    userName.nextElementSibling.innerHTML =
      "Username must be at least 6 characters.";
    validated.userName = false;
  } else {
    userName.style.border = "1px solid rgb(234, 231, 231)";
    userName.nextElementSibling.classList.add("d-none");
    userName.nextElementSibling.innerHTML = "";
    validated.userName = true;
  }

  checkValidation();
};

password.onkeyup = (e) => {
  if (e.target.value.length < 8) {
    password.style.border = "1px solid red";
    password.nextElementSibling.classList.remove("d-none");
    password.nextElementSibling.innerHTML =
      "Password must be at least 8 characters.";
    validated.password = false;
  } else {
    password.style.border = "1px solid rgb(234, 231, 231)";
    password.nextElementSibling.classList.add("d-none");
    password.nextElementSibling.innerHTML = "";
    validated.password = true;
  }

  checkValidation();
};

function checkValidation() {
  console.log(validated);
  if (validated.userName === true && validated.password === true) {
    document.querySelector("#btnSubmit").removeAttribute("disabled");
  } else {
    // document.querySelector("#btnSubmit").removeAttribute("disabled");
    document.querySelector("#btnSubmit").setAttribute("disabled", true);
  }
}
