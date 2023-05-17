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
}

// form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setErrot = (element, message) => {
  const inputControl = element.ParentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const validateInputs = () => {
  const cardNumberValue = cardNumber.value.trim();
  const cardNameValue = cardName.value.trim();
  const cardDateValue = cardDate.value.trim();
  const cardCvcValue = cardCvc.value.trim();

  if (cardNumberValue === "") {
    setError(cardNumber, "Numbers required");
  } else {
    setSuccess(cardNumber);
  }

  if (cardNameValue === "") {
    setError(cardName, "Name on card required");
  } else {
    setSuccess(cardName);
  }

  if (cardDateValue === "") {
    setError(cardDate, "Date is required");
  } else {
    setSuccess(cardDate);
  }

  if (cardCvcValue === "") {
    setError(cardCvc, "Cvc is required");
  } else {
    setSuccess(cardCvc);
  }
};
