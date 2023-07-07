export default function Validation() {
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

    const isValidVisaCard = (cardNumberValue) => {
      if (cardNumberValue[0] === "4" && cardNumberValue.length === 19) {
        return true;
      } else {
        return false;
      }
    };

    const isValidAmexCard = (cardNumberValue) => {
      if (
        cardNumberValue[0] === "3" &&
        cardNumberValue[1] === "7" &&
        cardNumberValue.length === 17
      ) {
        return true;
      } else {
        return false;
      }
    };

    if (cardNumberValue === "") {
      setError(inputNumber, "Can't be blank");
    } else if (
      cardNumberValue.length < minCardNumberLength ||
      cardNumberValue.length > maxCardNumberLength
    ) {
      setError(inputNumber, "Invalid credit card number length");
    } else if (cardNumberValue[0] === "4" && cardNumberValue.length === 19) {
      cardImage.src = "./images/visa.png";
      cardImage.alt = "Visa Card";
    } else if (
      cardNumberValue.slice(0, 2) === "37" &&
      cardNumberValue.length === 15
    ) {
      cardImage.src = "./images/amex.png";
      cardImage.alt = "Amex Card";
    } else if (cardNumberValue[0] === "4" && cardNumberValue.length === 19) {
      cardImage.src = "./images/visa.png";
      cardImage.alt = "Visa Card";
    } else if (
      cardNumberValue.slice(0, 2) === "37" &&
      cardNumberValue.length === 15
    ) {
      cardImage.src = "./images/amex.png";
      cardImage.alt = "Amex Card";
    } else {
      setSuccess(inputNumber);
    }

    if (cardNameValue === "") {
      setError(inputName, "Can't be blank");
    } else if (!cardNameValue.includes(" ")) {
      setError(inputName, "Invalid name format");
    } else {
      setSuccess(inputName);
    }

    if (cardMonthValue === "") {
      setError(inputMonth, "Can't be blank");
    } else if (cardMonthValue > 12) {
      setError(inputMonth, "Invalid month");
    } else {
      setSuccess(inputMonth);
    }

    const currentYear = new Date().getFullYear();
    const currentYearLastTwoDigits = currentYear % 100;

    if (cardYearValue === "") {
      setError(inputYear, "Can't be blank");
    } else if (parseInt(cardYearValue) < currentYearLastTwoDigits) {
      setError(inputYear, "Invalid year");
    } else {
      setSuccess(inputYear);
    }

    if (cardCvcValue === "") {
      setError(inputCvc, "Can't be blank");
    } else if (isValidVisaCard(cardNumberValue) && cardCvcValue.length === 3) {
      setSuccess(inputCvc);
    } else if (isValidAmexCard(cardNumberValue) && cardCvcValue.length === 4) {
      setSuccess(inputCvc);
    } else if (
      (isValidVisaCard(cardNumberValue) && cardCvcValue.length !== 3) ||
      (isValidAmexCard(cardNumberValue) && cardCvcValue.length !== 4)
    ) {
      setError(inputCvc, "Invalid Length");
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
}
