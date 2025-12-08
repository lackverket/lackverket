"use client";

import Image from "next/image";
import InfoForm from "../components/InfoForm";

import ImageSlider from "../components/ImageSlider";

const Dorrar = () => {
  return (
    <section className="w-full flex flex-col justify-start items-center gap-10 bg-[#ebf5f0]">
      {/* Image Section */}
      <div className="py-9 sm:max-2xl:py-0 w-full flex flex-col sm:max-2xl:flex-row-reverse h-[80vh] sm:max-2xl:h-[50vh] sm:max-2xl:mt-5 sm:max-2xl:w-[70%] sm:max-2xl:mx-auto">
        <div className="h-[60%] w-full sm:max-2xl:w-[50vw] sm:max-2xl:h-full relative px-4 sm:max-2xl:px-0">
          <ImageSlider />
        </div>
        <div className="sm:max-2xl:w-[40%] flex justify-center items-center px-9 sm:max-2xl:px-0">
          <Image
            src="/assets/slide_page_door.avif"
            alt="Painted door"
            width={1200}
            height={600}
            className="sm:max-2xl:w-full sm:max-2xl:h-full sm:max-2xl:mx-0 object-cover w-[70%] mx-auto"
          />
        </div>
      </div>

      <div className="text-center">
        <p className="font-bold text-[1.95rem] sm:max-2xl:text-[1.5rem] text-[#111]">
          Sprutmåla Innedörrar & Ytterdörrar
        </p>
      </div>

      <div className="px-10 py-5 flex flex-col gap-5 sm:max-2xl:gap-7 sm:max-2xl:w-[70%] sm:max-2xl:mx-auto">
        <p className="font-bold text-[2.25rem]">Innedörrar och Ytterdörrar</p>
        <p className="text-[1.6rem] leading-[3.4rem] text-[#111] sm:max-2xl:text-[1.1rem] sm:max-2xl:leading-[2.4rem]">
          Vi sprutmålar din ytterdörr på plats hemma hos dig vilket innebär att
          du inte behöver vara utan dörr över natten! Vi slipar ner, grundmålar
          och lackar, och jobbar på en lämplig plats i trädgården. Vi kan
          sprutmåla dörren i en kulör för fram och baksida eller i två olika
          kulörer. Behöver ytor repareras kan vi självklart göra det också och
          har du fler än en dörr så kan vi måla alla samtidigt. Behövs mer än en
          dag så kan vi hjälpa till att hänga tillbaka dörren på kvällen för att
          återkomma nästa dag. Just nu är rot avdraget höjt till 50% så passa på
          och slå till så länge vädret tillåter. Du är alltid välkommen att
          skicka oss en bild så räknar vi ut ett prisförslag!
        </p>
      </div>

      <div className="px-10 py-5 flex flex-col gap-1 sm:max-2xl:gap-5 sm:max-2xl:w-[70%] sm:max-2xl:mx-auto">
        <p className="font-bold text-[2.2rem] sm:max-2xl:text-[1.6rem] sm:max-2xl:leading-[2.4rem]">
          <span>Telefon:</span> <span>072-017 56 20 </span>
        </p>
        <p className="font-bold text-[2.2rem] sm:max-2xl:text-[1.6rem] sm:max-2xl:leading-[2.4rem]">
          <span>E-post:</span> <span>info@lackverket.se</span>
        </p>
      </div>

      <div className="w-full mb-15 sm:max-2xl:w-[70%] sm:max-2xl:mx-auto sm:max-2xl:text-[1.1rem]">
        <InfoForm />
      </div>
    </section>
  );
};

export default Dorrar;
