import FormInput from "../js/form-input.js";

const formInputs = [
  // First name
  new FormInput("form-first-name", function () {
    const value = this.element.value;
    const minLength = 1;
    
    if (value.length < minLength) {
      this.element.setCustomValidity(`Must have at least ${minLength} character(s)`);
    }
    else this.element.setCustomValidity("");

    this.element.reportValidity();
  }),
  // Last name
  new FormInput("form-last-name", function () {
    const value = this.element.value;
    const minLength = 1;
    if (value.length < minLength) {
      this.element.setCustomValidity(`Must have at least ${minLength} character(s)`);
    }
    else this.element.setCustomValidity("");

    this.element.reportValidity();
  }),
  // Email
  new FormInput("form-email", function () {
    const value = this.element.value;
    const regexp = /\S+@\S+\.\S+/;
    if (!regexp.test(value)) {
      this.element.setCustomValidity("Must be a valid email address.");
    }
    else this.element.setCustomValidity("");

    this.element.reportValidity();
  }),
  // Phone
  new FormInput("form-phone", function () {
    const value = this.element.value;
    const regexp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!regexp.test(value)) {
      this.element.setCustomValidity("Must be a valid phone number.");
    }
    else this.element.setCustomValidity("");

    this.element.reportValidity();
  }),
  // Password
  new FormInput("form-password", function () {
    const value = this.element.value;
    const regexp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!regexp.test(value)) {
      this.element.setCustomValidity("Must be contain at least 8 characters, a special character, one upper-case letter, one lower-case letter and a number.");
    }
    else this.element.setCustomValidity("");

    this.element.reportValidity();
  }),
  // Password-confirm
  new FormInput("form-password-confirm", function () {
    const value = this.element.value;
    const passwordInput = formInputs.find((e) => e.id === "form-password");

    if (value !== passwordInput.element.value) {
      this.element.setCustomValidity("Should match the password.");
    }
    else this.element.setCustomValidity("");

    this.element.reportValidity();
  }),
];

const formBtn = document.getElementById("form-button");
formBtn.addEventListener("click", (e) => {
  let formValid = true;

  formInputs.forEach((i) => {
    i.isValid();

    if (!i.element.checkValidity()) {
      formValid = false;
    }
  });

  if (formValid) {
    alert("Successful sign-up !");
  }
});

