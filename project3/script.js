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
  if (inputNumber.value === "") {
    cardNumber.innerHTML = "0000 0000 0000 0000";
  } else if (inputNumber.value.slice(0, 2) === "37") {
    cardNumber.innerHTML = inputNumber.value.replace(
      /^(\d{4})(\d{6})(\d{5})$/,
      "$1 $2 $3"
    );
  } else {
    cardNumber.innerHTML = inputNumber.value.replace(/(\d{4})(?=\d)/g, "$1 ");
  }
  cardName.innerHTML =
    inputName.value === "" ? "JANE APPLESEED" : inputName.value.toUpperCase();
  cardDate.innerHTML =
    inputMonth.value === "" || inputYear.value === ""
      ? "00/00"
      : inputMonth.value + "/" + inputYear.value;
  cardCvc.innerHTML = inputCvc.value === "" ? "000" : inputCvc.value;

  // if (inputNumber.value[0] === "4") {
  //   cardImage.src = "./images/visa.png";
  //   cardImage.alt = "Visa Card";
  // } else if (inputNumber.value.slice(0, 2) === "37") {
  //   cardImage.src = "./images/amex.png";
  //   cardImage.alt = "Amex Card";
  // } else {
  //   cardImage.src = "./images/card-logo.svg";
  //   cardImage.alt = "Card";
  // }
}

// Four Digit CC number format
// function formatCreditCardNumber(input) {
//   // Remove any non-digit characters
//   let cardNumber = input.value.replace(/\D/g, "");

//   // Split the card number into groups of 4 digits
//   let formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ");
//   let formattedCardAmex= cardNumber.replace(
//     /^(\d{4})(\d{6})(\d{5})$/,
//     "$1 $2 $3"
//   );

//   // Update the input value with the formatted card number
//   input.value = formattedCardNumber;
// }

function formatCreditCardNumber(input) {
  // Remove any non-digit characters
  let cardNumber = inputNumber.value.replace(/\D/g, "");

  // Split the card number into groups of 4 digits
  let formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ");
  let formattedCardAmex = cardNumber.replace(
    /^(\d{4})(\d{6})(\d{5})$/,
    "$1 $2 $3"
  );

  if (inputNumber.value.slice(0, 2) === "37") {
    inputNumber.value = formattedCardAmex;
  } else {
    inputNumber.value = formattedCardNumber;
  }
}

const isValidCardNumber = (cardNumber) => {
  const re = /^[0-9]+$/;
  return re.test(cardNumber);
};
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

const validateInputs = () => {
  const cardNumberValue = inputNumber.value.trim();
  const cardNameValue = inputName.value.trim();
  const cardMonthValue = inputMonth.value.trim();
  const cardYearValue = inputYear.value.trim();
  const cardCvcValue = inputCvc.value.trim();

  // Credit card number length validation
  const minCardNumberLength = 15;
  const maxCardNumberLength = 19;

  function formatCreditCardNumber(input) {
    // Remove any non-digit characters
    let cardNumber = input.value.replace(/\D/g, "");

    // Split the card number into groups of 4 digits
    let formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ");
    let formattedCardAmex = cardNumber.replace(
      /^(\d{4})(\d{6})(\d{5})$/,
      "$1 $2 $3"
    );

    // Update the input value with the formatted card number
    input.value = formattedCardNumber;
  }

  const isValidVisaCard = (cardNumberValue) => {
    if (cardNumberValue[0] === "4" && cardNumberValue.length === 19) {
      return true;
    } else {
      return false;
    }
  };

  const isValidAmexCard = (cardNumber) => {
    if (
      cardNumberValue.slice(0, 2) === "37" &&
      cardNumberValue.length === 18 &&
      cardCvcValue.length === 4
    ) {
      return true;
    } else {
      return false;
    }
  };
  console.log(cardNumberValue);
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
  }
  if (cardNumberValue[0] === "4" && cardNumberValue.length === 19) {
    cardImage.src = "./images/visa.png";
    cardImage.alt = "Visa Card";
  }
  if (
    cardNumberValue.slice(0, 2) === "37" &&
    cardNumberValue.length === 18 &&
    cardCvcValue.length === 4
  ) {
    cardImage.src = "./images/amex.png";
    cardImage.alt = "Amex Card";
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
