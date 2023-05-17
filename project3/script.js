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
  cardNumber.innerHTML = inputNumber.value === "" ? "0000 0000 0000 0000" : inputNumber.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
  cardName.innerHTML = inputName.value === "" ? "JANE APPLESEED" : inputName.value.toUpperCase();
  cardDate.innerHTML = inputMonth.value === "" || inputYear.value === "" ? "00/00" : inputMonth.value + "/" + inputYear.value;
  cardCvc.innerHTML = inputCvc.value === "" ? "000" : inputCvc.value;
}


