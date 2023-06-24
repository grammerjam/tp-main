
import completeImage from "../assets/icon-complete.svg";
import { createSignal } from "solid-js";


export default function Form({ handleFormData, formData, setFormData }) {
  const [errors, setErrors] = createSignal({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  function numberType(e) {
    let input = e.target.value;
    let key = e.target.name;
    let letters = /[A-Za-z]/g;
    if (isNaN(input)) {
      setErrors({ ...errors(), [key]: "Not a number" });
      e.target.value = "";
    } else if (!input.match(letters)) {
      setErrors({ ...errors(), [key]: "" });
    }
  }

  function letterType(e) {
    let input = e.target.value;
    let key = e.target.name;
    if (/[0-9]/.test(input)) {
      setErrors({ ...errors(), [key]: "Invalid Character" });
      e.target.value = "";
    } else {
      setErrors({ ...errors(), [key]: "" });
    }
  }


  function blankErrors() {
    for(let key in formData()) {
      if (formData()[key] === "") {
        setErrors({ ...errors(), [key]: "Can't be blank" });
      } else {
        // validateData();
        console.log("no blank errors")
      }
    }
  }

  

  function handleSubmit(e) {
    e.preventDefault();
    blankErrors();
    // CARD NAME VALIDATION
    if (!formData().name.trim().includes(" ") && formData().name !== "") {
      setErrors({ ...errors(), name: "Invalid Name" });
    } else if (formData().name.includes(" ")) {
      setErrors({ ...errors(), name: "" });
    }

    // CARD NUMBER VALIDATION
    if (formData().number.length < 16 && formData().number !== "") {
      setErrors({ ...errors(), number: "Invalid length" });
    } else if (
      formData().number.length > 16 &&
      formData().number.length < 19
    ) {
      setErrors({ ...errors(), number: "" });
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
              letterType(e);
            }}
            class="input-name border rounded h-10 mt-1 pl-3 focus:outline-input-active invalid:input-error"
            id="name"
            name="name"
            type="text"
            placeholder="e.g Jane Appleseed"
            pattern="[A-Za-z]{3,}"
          />
          <span class="error" name="nameError">
            {errors().name}
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
              numberType(e);
            }}
            class="input-number border rounded h-10 mt-1 pl-3 focus:outline-input-active"
            id="card-number creditCardNumber"
            name="number"
            // oninput="formatCreditCardNumber(this)"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            maxlength="19"
          />

          <span class="error" name="nameError">
            {errors().number}
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
                  numberType(e);
                }}
                class="input-month border rounded h-10 w-16 mr-3 pl-3 focus:outline-input-active  "
                id="month"
                name="month"
                type="text"
                placeholder="MM"
                maxlength="2"
              />
              <span class="error inline-block" name="nameError">
                {errors().month}
              </span>
            </div>
            {/* YEAR INPUT  */}
            <div class="input-control">
              <input
                onInput={(e) => {
                  handleFormData(e);
                  numberType(e);
                }}
                class="input-year border rounded h-10 w-16 mr-3 pl-3 focus:outline-input-active "
                id="year"
                name="year"
                type="text"
                placeholder="YY"
                maxlength="2"
                pattern="[0-9]"
              />
              <span class="error" name="nameError">
                {errors().year}
              </span>
            </div>
            {/*  CVC INPUT  */}
            <div class="input-control">
              <input
                onInput={(e) => {
                  handleFormData(e);
                  numberType(e);
                }}
                class="input-cvc border rounded h-10 w-full pl-3 focus:outline-input-active"
                id="cvc"
                name="cvc"
                type="text"
                placeholder="e.g. 123"
                maxlength="4"
              />
              <span class="error" name="nameError">
                {errors().cvc}
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
