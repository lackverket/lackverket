import Image from "next/image";
import InfoForm from "../components/InfoForm";

const About4 = () => {
  return (
    <section className="w-full flex flex-col justify-start items-center gap-7 sm:max-2xl:gap-10 bg-[#ebf5f0]">
      <div className="w-full h-[25vh] relative sm:max-2xl:h-[70vh] sm:max-2xl:w-[70%] sm:max-2xl:mx-auto sm:max-2xl:mt-5">
        <Image
          src="/assets/painted_doors.avif"
          alt="painted doors"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-transparent flex justify-center items-center">
          <p className="font-bold text-[1.6rem] sm:max-2xl:text-[1.3rem] sm:max-2xl:inline text-[#222] px-8 py-4 flex flex-col justify-center items-center shadow-2xl"><span>Sprutlackering</span> <span>Köksluckor</span></p>
        </div>
      </div>

      <div className="px-5 py-5 flex flex-col gap-5 sm:max-2xl:gap-7 sm:max-2xl:w-[70%] sm:max-2xl:mx-auto">
        <p className="font-bold text-[1.7rem]">Köksluckor</p>
        <p className="text-[1.35rem] leading-[2.6rem] text-[#111] sm:max-2xl:text-[1.1rem] sm:max-2xl:leading-[2.4rem]">
          Vi sprutmålar dina köksluckor att kännas som nya! Istället för att
          byta ut luckor och stommar, kontakta oss för prisförslag på
          sprutlackering av luckorna. Det innebär en stor besparing på både
          kostnad och miljön! Du kan dessutom få exakt din önskade nyans - vi
          behöver bara en ncs kod så bryter vi den. Vi använder industriell
          akryl färg vilken ger en extra slitstark yta på dina köksluckor. Våra
          priser inkluderar lätt nedslipning, grundmålning och lackning. Våra
          tilläggstjänster inkluderar spärrgrunds behandling, spackling och
          reparation av ytor samt spackling av hål Vi hjälper gärna till med
          leverans och erbjuder gratis hämtning i närområdet! Så kontakta oss
          redan idag!
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

      <div className="px-5 pt-0 pb-10 text-[1.35rem] leading-[2.6rem] text-[#111] sm:max-2xl:gap-5 sm:max-2xl:w-[70%] sm:max-2xl:mx-auto sm:max-2xl:text-[1.1rem] sm:max-2xl:leading-[2.4rem]">
        Det går även bra att anlita oss att måla resterande kök! Skicka en bild
        för offert! Då gäller <span className="font-bold">ROT-avdraget!</span>
      </div>

      <div className="w-full mb-15 sm:max-2xl:w-[70%] sm:max-2xl:mx-auto sm:max-2xl:text-[1.1rem]"><InfoForm /></div>
    </section>
  );
};

export default About4;
