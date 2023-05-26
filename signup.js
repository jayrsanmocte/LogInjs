let userName = document.querySelector("#userName");
let password = document.querySelector("#password");
let Lastname = document.querySelector("#Lastname")
let Middlename = document.querySelector("#Middlename")
let Email = document.querySelector("#Email")
let Address = document.querySelector("#Address")
let Barangay = document.querySelector("#Barangay")
let City = document.querySelector("#City")
let Province = document.querySelector("#Province")
let Zip = document.querySelector("#Zip")
let form = document.querySelector("#loginForm");
let validated = {
  userName: false,
  password: false,
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validated.userName === true && validated.password === true && validated.Lastname === true && validated.Middlename === true  && validated.Email === true && validated.Address === true && validated.Barangay === true && validated.City === true && validated.Province === true && validated.Zip === true) {
    form.submit();
  }
});

userName.onkeyup = (e) => {
  if (e.target.value.length <3) {
    userName.style.border = "1px solid red";
    userName.nextElementSibling.classList.remove("d-none");
    userName.nextElementSibling.innerHTML =
    "Please field in all required field";
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
Lastname.onkeyup = (e) => {
    if (e.target.value.length < 3) {
      Lastname.style.border = "1px solid red";
      Lastname.nextElementSibling.classList.remove("d-none");
      Lastname.nextElementSibling.innerHTML =
      "Please field in all required field";
      validated.Lastname = false;
    } else {
      Lastname.style.border = "1px solid rgb(234, 231, 231)";
      Lastname.nextElementSibling.classList.add("d-none");
      Lastname.nextElementSibling.innerHTML = "";
      validated.Lastname = true;
    }
  
    checkValidation();
  };

Middlename.onkeyup = (e) => {
    if (e.target.value.length < 3) {
      Middlename.style.border = "1px solid red";
      Middlename.nextElementSibling.classList.remove("d-none");
      Middlename.nextElementSibling.innerHTML =
      "Please field in all required field";
      validated.Middlename = false;
    } else {
      Middlename.style.border = "1px solid rgb(234, 231, 231)";
      Middlename.nextElementSibling.classList.add("d-none");
      Middlename.nextElementSibling.innerHTML = "";
      validated.Middlename = true;
    }
  
    checkValidation();
  };


  Email.onkeyup = (e) => {
    if (e.target.value.length < 3) {
      Email.style.border = "1px solid red";
      Email.nextElementSibling.classList.remove("d-none");
      Email.nextElementSibling.innerHTML =
      "Please field in all required field";
      validated.Email = false;
    } else {
      Email.style.border = "1px solid rgb(234, 231, 231)";
      Email.nextElementSibling.classList.add("d-none");
      Email.nextElementSibling.innerHTML = "";
      validated.Email = true;
    }
  
    checkValidation();
  };

  Address.onkeyup = (e) => {
    if (e.target.value.length < 3) {
      Address.style.border = "1px solid red";
      Address.nextElementSibling.classList.remove("d-none");
      Address.nextElementSibling.innerHTML =
      "Please field in all required field";
      validated.Address = false;
    } else {
      Address.style.border = "1px solid rgb(234, 231, 231)";
      Address.nextElementSibling.classList.add("d-none");
      Address.nextElementSibling.innerHTML = "";
      validated.Address = true;
    }
  
    checkValidation();
  };
  Barangay.onkeyup = (e) => {
    if (e.target.value.length < 3) {
      Barangay.style.border = "1px solid red";
      Barangay.nextElementSibling.classList.remove("d-none");
      Barangay.nextElementSibling.innerHTML =
      "Please field in all required field";
      validated.Barangay = false;
    } else {
      Barangay.style.border = "1px solid rgb(234, 231, 231)";
      Barangay.nextElementSibling.classList.add("d-none");
      Barangay.nextElementSibling.innerHTML = "";
      validated.Barangay = true;
    }
  
    checkValidation();
  };
  City.onkeyup = (e) => {
    if (e.target.value.length < 3) {
      City.style.border = "1px solid red";
      City.nextElementSibling.classList.remove("d-none");
      City.nextElementSibling.innerHTML =
      "Please field in all required field";
      validated.City = false;
    } else {
      City.style.border = "1px solid rgb(234, 231, 231)";
      City.nextElementSibling.classList.add("d-none");
      City.nextElementSibling.innerHTML = "";
      validated.City = true;
    }
  
    checkValidation();
  };
  Province.onkeyup = (e) => {
    if (e.target.value.length < 3) {
      Province.style.border = "1px solid red";
      Province.nextElementSibling.classList.remove("d-none");
      Province.nextElementSibling.innerHTML =
      "Please field in all required field";
      validated.Province = false;
    } else {
      Province.style.border = "1px solid rgb(234, 231, 231)";
      Province.nextElementSibling.classList.add("d-none");
      Province.nextElementSibling.innerHTML = "";
      validated.Province = true;
    }
  
    checkValidation();
  };
  Zip.onkeyup = (e) => {
    if (e.target.value.length < 3) {
      Zip.style.border = "1px solid red";
      Zip.nextElementSibling.classList.remove("d-none");
      Zip.nextElementSibling.innerHTML =
      "Please field in all required field";
      validated.Zip = false;
    } else {
      Zip.style.border = "1px solid rgb(234, 231, 231)";
      Zip.nextElementSibling.classList.add("d-none");
      Zip.nextElementSibling.innerHTML = "";
      validated.Zip = true;
    }
  
    checkValidation();
  };

function checkValidation() {
  console.log(validated);
  if (validated.userName === true && validated.password === true && validated.Lastname === true && validated.Middlename === true  && validated.Email === true && validated.Address === true && validated.Barangay === true && validated.City === true && validated.Province === true && validated.Zip === true) {
    document.querySelector("#btnSubmit").removeAttribute("disabled");
  } else {
    // document.querySelector("#btnSubmit").removeAttribute("disabled");
    document.querySelector("#btnSubmit").setAttribute("disabled", true);
  }
}
