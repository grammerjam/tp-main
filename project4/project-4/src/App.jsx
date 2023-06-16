import { createSignal, createEffect } from 'solid-js';

import CardFront from './components/Card-Front';
import CardBack from './components/Card-Back';
import Form from './components/Form';



function App() {

  const [formData, setFormData] = createSignal({
    cardName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvc: "",
  });
  
  function handleFormData(e) {
    let key = e.target.name;
    setFormData({ ...formData(), [key]: e.target.value });
  }

  

  return (
    <>
      <nav class="text-center">
        <h1 class="font-bold text-lg">Team Perseverance</h1>
      </nav>

      <main class="dt:flex dt:w-[100vw] dt:h-[100vh] pb-20">
        {/* *************HEADER SECTION*************** */}
        <header class="dt:h-[100vh] dt:w-1/3 h-[30vh] dt:bg-desktop-header relative dt:bg-cover bg-mobile-header">

          {/* FRONT AND BACK CARDS */}
          <CardFront 
            formData={formData}
          />
          <CardBack
            formData={formData}
          />
        </header>
        {/* *************END HEADER SECTION*************** */}

        {/* *************FORM SECTION*************** */}
        <section class="dt:w-2/3 dt:m-auto h-[60vh] font-ff-space text-sm font-medium tracking-widest">

          {/* FORM */}
          <Form 
            formData={formData}
            handleFormData={handleFormData}
          />

        </section>
        {/* *************END FORM SECTION*************** */}
      </main>

      <footer class="flex justify-around">
        <time datetime="2023-05-15">Start Date/Time: May 15 2023 09:00 </time>
        <time datetime="2023-05-18">End Date/Time: May 18 2023 17:00 </time>
      </footer>
    </>
  );
}

export default App;
