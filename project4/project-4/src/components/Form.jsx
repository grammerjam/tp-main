
import completeImage from "../assets/icon-complete.svg";

import { createSignal } from "solid-js";


export default function Form({ handleFormData, formData }) {


  const [errors, setErrors] = createSignal({
    nameError: "",
    numberError: "",
    monthError: "",
    yearError: "",
    cvcError: "",
  });
  
  function blankErrors() {
    let allBlank = false;

    for(let key in formData()) {
    if(formData()[key] === "") {
      allBlank = true
    } else {
      allBlank = false
    }
    }
    if (allBlank = true)
    for(let key in errors()) {
      setErrors({ ...errors(), [key]: "Can't be blank" } )
      console.log(errors())
    } 
  }
  

 
  
  
  
  function handleSubmit(e) {
    
    e.preventDefault();
    blankErrors();
    if(!formData().cardName.includes(" ") && formData().cardName !== "") {

      setErrors({...errors(), nameError: "Invalid format"})
    } else {
      formData().cardName = "Success"
    }

  }
    
    
  
 
  return (
    <>
      <form
        id="myForm"
        class="max-w-[300px] flex flex-col pt-[7rem] w-[90vw] m-auto"
      
      >
        <div class="input-control max-w-[300px] flex flex-col w-[90vw] m-auto">
          <label for="name block">CARDHOLDER NAME</label>
          {/* CARD NAME INPUT  */}
          <input
            onInput={(e) => {
              handleFormData(e);
            }}

            class="input-name border rounded h-10 mt-1 pl-3 focus:outline-input-active invalid:input-error"
            id="name"
            name="cardName"
            type="text"
            placeholder="e.g Jane Appleseed"
            pattern="[A-Za-z]{3,}"
          />
          <span class="error" name="nameError">
            {errors().nameError}
          </span>
        </div>
        <div class="input-control max-w-[300px] flex flex-col w-[90vw] m-auto">
          <label class="pt-5" for="card-number">
            CARD NUMBER
          </label>
          {/* CARD NUMBER INPUT */}
          <input
            onInput={(e) => {
              handleFormData(e);
            }}
            class="input-number border rounded h-10 mt-1 pl-3 focus:outline-input-active"
            id="card-number creditCardNumber"
            name="cardNumber"
            // oninput="formatCreditCardNumber(this)"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            maxlength="19"
          />

          <span class="error" name="nameError">
            {errors().numberError}
          </span>
        </div>

        {/* CARD EXPIRATION DATE  */}
        <div class=" max-w-[300px] flex flex-col w-[90vw] m-auto">
          {/* EXP DATE LABELS  */}
          <div class="pt-5">
            <label for="month year">EXP. DATE (MM/YY)</label>
            <label for="cvc">CVC</label>
          </div>

          <div class="flex mt-1">
            {/* MONTH INPUT  */}
            <div class="input-control">
              <input
                onInput={(e) => {
                  handleFormData(e);
                }}
                class="input-month border rounded h-10 w-16 mr-3 pl-3 focus:outline-input-active  "
                id="month"
                name="cardMonth"
                type="text"
                placeholder="MM"
                maxlength="2"
              />
              <span class="error" name="nameError">
                {errors().monthError}
              </span>
            </div>
            {/* YEAR INPUT  */}
            <div class="input-control">
              <input
                onInput={(e) => {
                  
                  handleFormData(e);
                }}
                class="input-year border rounded h-10 w-16 mr-3 pl-3 focus:outline-input-active "
                id="year"
                name="cardYear"
                type="number"
                placeholder="YY"
                maxlength="2"
                pattern="[0-9]"
              />
              <span class="error" name="nameError">
                {errors().yearError}
              </span>
            </div>
            {/*  CVC INPUT  */}
            <div class="input-control">
              <input
                onInput={(e) => {
                  handleFormData(e);
                }}
                class="input-cvc border rounded h-10 w-full pl-3 focus:outline-input-active"
                id="cvc"
                name="cardCvc"
                type="text"
                placeholder="e.g. 123"
                maxlength="4"
              />
              <span class="error" name="nameError">
                {errors().cvcError}
              </span>
            </div>
          </div>
        </div>

        {/*  CONFIRM BUTTON  */}
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          class="confirm-btn h-10 min-w-[300px] bg-dark-violet text-white mt-8 rounded-md tracking-wide"
          type="submit"
          id="submitButton"
        >
          Confirm
        </button>
      </form>

      {/*  THANK YOU */}
      <div
        class="hidden max-w-[300px] flex flex-col text-center pt-[7rem] w-[90vw] m-auto [&>*]:mb-4"
        id="hiddenElement"
      >
        <img class="h-18 w-18 self-center" src={completeImage} alt="" />
        <h2 class="text-3xl mt-4 font-[500]">THANK YOU!</h2>
        <p class="text-[1.1rem] font-medium text-dark-gray">
          We've added your card details
        </p>

        <button
          class="confirm-btn h-10 bg-dark-violet text-white mt-8 rounded-md tracking-wide"
          type="submit"
          id="confirmButton"
          
        >
          Confirm
        </button>
      </div>
    </>
  );
}
