import Image from "next/image";
import InfoForm from "../components/InfoForm";

const Mobler = () => {
  return (
    <section className="w-full flex flex-col justify-start items-center gap-7 bg-[#ebf5f0]">
      <div className="w-full h-[60vh] relative sm:max-2xl:h-0 pb-[56.25%] sm:max-2xl:mt-5 sm:max-2xl:w-[50vw]">
        <Image
          src="/assets/painted_chair.avif"
          alt="painted doors"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-transparent flex justify-center items-center">
          <p className="font-bold text-[2.2rem] sm:max-2xl:text-[1.8rem] sm:max-2xl:inline text-[#222] px-8 py-4 flex flex-col justify-center items-center shadow-2xl">
            <span>Möbler</span>
          </p>
        </div>
      </div>

      <div className="px-5 py-5 flex flex-col gap-5 sm:max-2xl:gap-7 sm:max-2xl:w-[70%] sm:max-2xl:mx-auto">
        <p className="font-bold text-[1.7rem]">Sprutmålning Möbler</p>
        <p className="text-[1.35rem] leading-[2.6rem] text-[#111] sm:max-2xl:text-[1.1rem] sm:max-2xl:leading-[2.4rem]">
          Har du gamla furu möbler ståendes i förråd? Med kulör kan de omvandlas
          till vackra möbler för det här årtiondet! Vi gör ett utförligt jobb
          med nedslipning, spärrgrunds behandling, grund målning och lackning.
          Med den rätta kulören blir möbler tidlösa, så släng inte! Få dem
          sprutlackerade istället! Eller har du sen tidigare målade möbler som
          behöver ett ansiktslyft? Skicka oss en bild så svarar vi med
          prisförslag. Vi hjälper också gärna till med leverans och erbjuder
          gratis hämtning i närområdet! Kontakta oss redan idag!
        </p>
      </div>

      <div className="px-0 sm:max-2xl:px-5 py-5 flex flex-col gap-1 sm:max-2xl:gap-5 sm:max-2xl:w-[70%] sm:max-2xl:mx-auto">
        <p className="font-bold text-[1.8rem] sm:max-2xl:text-[1.4rem] sm:max-2xl:leading-[2.4rem]">
          <span>Telefon:</span> <span>072-017 56 20 </span>
        </p>
        <p className="font-bold text-[1.8rem] sm:max-2xl:text-[1.4rem] sm:max-2xl:leading-[2.4rem]">
          <span>E-post:</span> <span>info@lackverket.se</span>
        </p>
      </div>


      <div className="w-full mb-15 sm:max-2xl:w-[70%] sm:max-2xl:mx-auto sm:max-2xl:text-[1.1rem]">
        <InfoForm />
      </div>
    </section>
  );
};

export default Mobler;
