import { createSignal, createEffect } from "solid-js";
import completeImage from "../assets/icon-complete.svg";

export default function Form() {
  const [form, setForm] = createSignal({
    cardName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvc: "",
  });

  const handleInput = (e) => {
    let key = e.target.name;
    setForm({ ...form(), [key]: e.target.value });

  };

  createEffect(() => {
    console.log(form().cardName);
  })

  return (
    <>
      <form
        id="myForm"
        class="max-w-[300px] flex flex-col pt-[7rem] w-[90vw] m-auto"
        action="javascript:validateInputs()"
      >
        <div class="input-control max-w-[300px] flex flex-col w-[90vw] m-auto">
          <label for="name block">CARDHOLDER NAME</label>
          {/* CARD NAME INPUT  */}
          <input
            onInput={(e) => {
              handleInput(e);
            }}
            class="input-name border rounded h-10 mt-1 pl-3 focus:outline-input-active invalid:input-error"
            id="name"
            name="cardName"
            type="text"
            placeholder="e.g Jane Appleseed"
          />
          <div class="error"></div>
        </div>
        <div class="input-control max-w-[300px] flex flex-col w-[90vw] m-auto">
          <label class="pt-5" for="card-number">
            CARD NUMBER
          </label>
          {/* CARD NUMBER INPUT */}
          <input
            onInput={(e) => {
               handleInput(e);
            }}
            class="input-number border rounded h-10 mt-1 pl-3 focus:outline-input-active"
            id="card-number creditCardNumber"
            name="cardNumber"
            // oninput="formatCreditCardNumber(this)"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            maxlength="19"
          />

          <div class="error"></div>
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
                   handleInput(e);
                }}
                class="input-month border rounded h-10 w-16 mr-3 pl-3 focus:outline-input-active  "
                id="month"
                name="cardMonth"
                type="text"
                placeholder="MM"
                maxlength="2"
              />
              <div class="error"></div>
            </div>
            {/* YEAR INPUT  */}
            <div class="input-control">
              <input
                onInput={(e) => {
                  handleInput(e);
                }}
                class="input-year border rounded h-10 w-16 mr-3 pl-3 focus:outline-input-active"
                id="year"
                name="cardYear"
                type="text"
                placeholder="YY"
                maxlength="2"
              />
              <div class="error pl-1"></div>
            </div>
            {/*  CVC INPUT  */}
            <div class="input-control">
              <input
                onInput={(e) => {
                   handleInput(e);
                }}
                class="input-cvc border rounded h-10 w-full pl-3 focus:outline-input-active"
                id="cvc"
                name="cardCvc"
                type="text"
                placeholder="e.g. 123"
                maxlength="4"
              />
              <div class="error pl-1"></div>
            </div>
          </div>
        </div>

        {/*  CONFIRM BUTTON  */}
        <button
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
