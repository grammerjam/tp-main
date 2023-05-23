const form = document.querySelector("form");
const cardNumber = document.querySelector(".card-number");
const cardName = document.querySelector(".card-name");
const cardDate = document.querySelector(".card-date");
const cardCvc = document.querySelector(".card-cvc");

const inputName = document.querySelector(".input-name");
const inputNumber = document.querySelector(".input-number");
const inputMonth = document.querySelector(".input-month");
const inputYear = document.querySelector(".input-year");
const inputCvc = document.querySelector(".input-cvc");

const confirmBtn = document.querySelector(".confirm-btn");
const continueBtn = document.querySelector(".continue-btn");

inputName.addEventListener("input", updateCard);
inputNumber.addEventListener("input", updateCard);
inputMonth.addEventListener("input", updateCard);
inputYear.addEventListener("input", updateCard);
inputCvc.addEventListener("input", updateCard);

const cardImage = document.querySelector(".card-image");

function updateCard() {
  cardNumber.innerHTML =
    inputNumber.value === ""
      ? "0000 0000 0000 0000"
      : inputNumber.value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
  cardName.innerHTML =
    inputName.value === "" ? "JANE APPLESEED" : inputName.value.toUpperCase();
  cardDate.innerHTML =
    inputMonth.value === "" || inputYear.value === ""
      ? "00/00"
      : inputMonth.value + "/" + inputYear.value;
  cardCvc.innerHTML = inputCvc.value === "" ? "000" : inputCvc.value;

  if (isValidVisaCard(cardNumberValue)) {
    cardImage.src = "visa.png";
    cardImage.alt = "Visa Card";
  } else if (isValidAmexCard(cardNumberValue)) {
    cardImage.src = "amex.png";
    cardImage.alt = "Amex Card";
  } else {
    cardImage.src = "";
    cardImage.alt = "Card";
  }
}

// Four Digit CC number format
function formatCreditCardNumber(input) {
  // Remove any non-digit characters
  let cardNumber = input.value.replace(/\D/g, "");

  // Split the card number into groups of 4 digits
  let formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ");

  // Update the input value with the formatted card number
  input.value = formattedCardNumber;
}
// form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidCardNumber = (cardNumber) => {
  const re = /^[0-9]+$/;
  return re.test(cardNumber);
};

const isValidVisaCard = (cardNumber) => {
  const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
  return visaPattern.test(cardNumber);
};

const isValidAmexCard = (cardNumber) => {
  const amexPattern = /^3[47][0-9]{13}$/;
  return amexPattern.test(cardNumber);
};

const validateInputs = () => {
  const cardNumberValue = inputNumber.value.trim();
  const cardNameValue = inputName.value.trim();
  const cardMonthValue = inputMonth.value.trim();
  const cardYearValue = inputYear.value.trim();
  const cardCvcValue = inputCvc.value.trim();

  // Credit card number length validation
  const minCardNumberLength = 19;
  const maxCardNumberLength = 19;

  if (cardNumberValue === "") {
    setError(inputNumber, "Can't be blank");
  } else if (
    cardNumberValue.length < minCardNumberLength ||
    cardNumberValue.length > maxCardNumberLength
  ) {
    setError(inputNumber, "Invalid credit card number length");
  } else if (
    !isValidVisaCard(cardNumberValue) &&
    !isValidAmexCard(cardNumberValue)
  ) {
    setError(inputNumber, "Invalid card number pattern");
  } else {
    setSuccess(inputNumber);
  }

  if (cardNameValue === "") {
    setError(inputName, "Can't be blank");
  } else {
    setSuccess(inputName);
  }

  if (cardMonthValue === "") {
    setError(inputMonth, "Can't be blank");
  } else {
    setSuccess(inputMonth);
  }

  if (cardYearValue === "") {
    setError(inputYear, "Can't be blank");
  } else {
    setSuccess(inputYear);
  }

  if (cardCvcValue === "") {
    setError(inputCvc, "Can't be blank");
  } else {
    setSuccess(inputCvc);
  }

  // Check if all inputs are valid
  const errorDisplays = [
    inputNumber.parentElement.querySelector(".error"),
    inputName.parentElement.querySelector(".error"),
    inputMonth.parentElement.querySelector(".error"),
    inputYear.parentElement.querySelector(".error"),
    inputCvc.parentElement.querySelector(".error"),
  ];
  const isValid = errorDisplays.every(
    (errorDisplay) => errorDisplay.innerText === ""
  );

  return isValid;
};
// Thank you screen
const submitButton = document.getElementById("submitButton");
const hiddenElement = document.getElementById("hiddenElement");
const myForm = document.getElementById("myForm");

submitButton.addEventListener("click", function () {
  const isFormValid = validateInputs();

  if (isFormValid) {
    hiddenElement.classList.remove("hidden");
    myForm.style.display = "none";
  }
});

// Confirm Button

const confirmButton = document.getElementById("confirmButton");
// const hiddenElement = document.getElementById("hiddenElement");
// const myForm = document.getElementById("myForm");

confirmButton.addEventListener("click", function () {
  hiddenElement.classList.add("hidden");
  myForm.style.display = "block";
});
