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

const setError = (element, message) => {
  const inputControl = element.ParentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.ParentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidCardNumber = https://file+.vscode-resource.vscode-cdn.net/Users/ariadnavanegas/Desktop/dev/tp-main/project3/design/mobile-design.jpg?version%3D1684429793192(cardNumber) => {
  const re = /^[0-9]+$/;
  return re.test(cardNumber);
};

const validateInputs = () => {
  const cardNumberValue = inputNumber.value.trim();
  const cardNameValue = inputName.value.trim();
  const cardDateValue = inputDate.value.trim();
  const cardCvcValue = inputCvc.value.trim();

  if (cardNumberValue === "") {
    setError(inputNumber, "Can't be blank");
  } else if (!isValidCardNumber(cardNumberValue)) {
    setError(inputNumber, "Wrong format, numbers only");
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
};
