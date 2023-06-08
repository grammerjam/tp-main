
import cardLogo from "../assets/card-logo.svg";


export default function CardFront({ formData }) {

  return (
    <>
      <div class="dt:h-[12rem] dt:w-[20rem] dt:top-[8rem] dt:-right-28 rounded-md bg-front-card bg-right-top absolute h-[10rem] w-[18rem] top-28 max-dt:left-4 z-10">
        <div class="dt:pt-4 py-3 px-4 text-white">
          <div class="card-logo">
            <img class="card-image h-7" src={cardLogo} alt="Card Logo" />
          </div>

          <div class="dt:pt-16 font-normal tracking-[.13rem] text-xl pt-10 pl-2">
            <p class="card-number">
              <Show
                when={formData().cardNumber}
                fallback={<p class="card-name">0000 0000 0000 0000</p>}
              >
                {formData().cardNumber}
              </Show>
            </p>
          </div>

          <div class="flex justify-between max-w-[232px] text-[10px] pt-4 pl-2">
            <div class="card-holder">
              <p class="card-name">
                <Show
                  when={formData().cardName}
                  fallback={<p class="card-name">Jane Doe</p>}
                >
                  {formData().cardName}
                </Show>
              </p>
            </div>

            <div class="">
              <p class="card-date">
                <Show
                  when={formData().cardMonth && formData().cardYear}
                  fallback={<p class="card-name">00/00</p>}
                >
                  {formData().cardMonth}/{formData().cardYear} 
                </Show>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
