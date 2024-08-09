const signUpForm = document.forms["sign-up-form"];
const firstNameInput = signUpForm["first-name"];
const lastNameInput = signUpForm["last-name"];
const ageInput = signUpForm["age"];
const firstNameValue = document.body.querySelector("#first-name-value");
const alertFnMsg = document.querySelector("#alert-fn");
const alertLnMsg = document.querySelector("#alert-ln");
const alertAgeMsg = document.querySelector("#alert-age");
const fullNameValue = document.querySelector("#fullname-value");
const ageValue = document.querySelector("#age-value");
const fetchSection = document.querySelector(".fetch-section");
const btnNewData = document.querySelector("#btn-reset");
const helloMsg = document.querySelector("#hello-msg");

function formValidation() {
  if (firstNameInput.value === "") {
    alertFnMsg.classList.remove("text-success");
    alertFnMsg.classList.add("text-danger");
    alertFnMsg.innerHTML = "Error";
  } else {
    alertFnMsg.classList.remove("text-danger");
    alertFnMsg.classList.add("text-success");
    alertFnMsg.innerHTML = "Success";
  }
  if (lastNameInput.value === "") {
    alertLnMsg.classList.remove("text-success");
    alertLnMsg.classList.add("text-danger");
    alertLnMsg.innerHTML = "Error";
  } else {
    alertLnMsg.classList.remove("text-danger");
    alertLnMsg.classList.add("text-success");
    alertLnMsg.innerHTML = "Success";
  }
  if (ageInput.value < 18) {
    alertAgeMsg.classList.remove("text-success");
    alertAgeMsg.classList.add("text-danger");
    alertAgeMsg.innerHTML = "Error";
  } else {
    alertAgeMsg.classList.remove("text-danger");
    alertAgeMsg.classList.add("text-success");
    alertAgeMsg.innerHTML = "Success";
  }
}

function fetchIdentity() {
  if (
    alertFnMsg.innerHTML === "Success" &&
    alertLnMsg.innerHTML === "Success" &&
    alertAgeMsg.innerHTML === "Success"
  ) {
    signUpForm.classList.add("d-none");
    fetchSection.classList.remove("d-none");
    fullNameValue.innerHTML = firstNameInput.value + " " + lastNameInput.value;
    helloMsg.innerHTML = `Hi ${firstNameInput.value}, data anda telah kami terima`;
    ageValue.innerHTML = ageInput.value;
  } else {
    fetchSection.classList.add("d-none");
    fullNameValue.innerHTML = "undefined";
    ageValue.innerHTML = "undefined";
  }
}

function resetForm() {
  btnNewData.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Ingin memasukan data baru?");
    location.reload();
  });
}

signUpForm.onsubmit = (event) => {
  event.preventDefault();
  formValidation();
  fetchIdentity();
  resetForm();
};

function validateInput(input) {
  const pattern = /^[A-Za-z\s]*$/;
  if (!pattern.test(input.value)) {
    input.value = input.value.replace(/[^A-Za-z\s]/g, "");
  }
}
