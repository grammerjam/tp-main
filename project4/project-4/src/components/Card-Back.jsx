

export default function CardBack() {

  return (
    <>
      <div class="dt:h-[12rem] dt:w-[20rem] dt:top-[22rem] dt:-right-48 dt:bg-[center] back-card rounded-md bg-back-card bg-[cover] absolute h-[10rem] w-[18rem] top-5 max-dt:left-16 ">
        <div class="black-stripe"></div>
        <div class="gray-stripe">
          <div class="card-cvc dt:top-[85px] dt:left-[260px] text-white text-xs absolute top-[70px] left-[238px]">
            <p class="card-cvc">000</p>
          </div>
        </div>
        <div class="fine-print"></div>
      </div>
    </>
  );

}