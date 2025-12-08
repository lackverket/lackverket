"use client";

import Image from "next/image";
import Link from "next/link";
import { robotoBold } from "./layout";
import { useRef, useState } from "react";



export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playDisplay, setPlayDisplay] = useState(true);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlayDisplay(false);
    }
  };

  return (
    <section className="bg-[#ebf5f0] pt-10 w-full overflow-x-hidden">
      {/* ---------------------------------------------------- */}
      {/* 1️⃣ SMALL → MEDIUM UI (mobile/tablet)                */}
      {/* ---------------------------------------------------- */}
      <section className="lg:hidden px-5">
        <p
          className={`${robotoBold.className} text-center font-bold text-[7vw] mb-10`}
        >
          VÄLKOMMEN TILL LACKVERKET!
        </p>

        {/* --- REUSABLE BLOCK --- */}
        {[
          {
            title: "SPRUTLACKERING KÖKSLUCKOR",
            link: "/about-4",
            text: `Vi använder industriell akryl färg vilket ger en mycket 
              slitstark och tålig yta! Perfekt på köksluckor som har mest 
              slitage i hemmet. Ge oss bara en NCS kod så målar vi i exakt 
              din önskade kulör!`,
            img: "/assets/painted_doors.avif",
          },
          {
            title: "SPRUTLACKERING YTTERDÖRRAR",
            link: "/dorrar",
            text: `Vi sprutmålar ytterdörrar på plats hemma hos kunden över dagen! 
              Det är alltså inte nödvändigt att vara utan dörr över natten. 
              Vi behöver endast en liten plast i trädgården och eluttag så fixar 
              vi resten!`,
            img: "/assets/painted_door.avif",
          },
          {
            title: "SPRUTLACKERING MÖBLER",
            link: "/mobler",
            text: `Varför inte modernisera och måla om de gamla furumöblerna 
              istället för att köpa nytt? Valen är ändlösa med färg!`,
            img: "/assets/painted_chair.avif",
          },
          {
            title: "SPRUTLACKERING INNEDÖRRAR",
            link: "/mobler",
            text: `Istället för att byta ut gamla innedörrar till nya med andra 
              mått, installationskostnad och allt vad det innebär, så går det 
              enkelt att sprutmåla de gamla så de känns som nya!`,
            img: "/assets/room_door.avif",
          },
        ].map((block, index) => (
          <div key={index} className="flex flex-col gap-3 mb-8">
            <div className="w-full flex flex-col gap-4 bg-black text-white py-10 px-6">
              <p className="font-bold underline text-xl text-center">
                <Link className={robotoBold.className} href={block.link}>
                  {block.title}
                </Link>
              </p>
              <p className={`${robotoBold.className} text-[1.4rem] leading-9`}>
                {block.text}
              </p>
            </div>

            <div className="w-full h-[55vh] relative overflow-hidden">
              <Image
                src={block.img}
                alt={block.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}

        <p className="py-5 text-[4.5vw] leading-[7vw] font-bold">
          Vi är sprutlackerare med bakgrund i möbler och interiörer, och med 17
          års erfarenhet av branschen. Kontakta oss så hjälper vi gärna till med
          att hitta bästa lackeringslösningen för dina köksluckor, dörrar och
          möbler.
        </p>

        {/* VIDEO */}
        <div className="w-full flex justify-center items-center mt-7 mb-10 relative">
          <video
            ref={videoRef}
            src="/assets/file.mp4"
            controls
            playsInline
            className="w-full rounded-lg"
          />
          <Image
            onClick={handlePlay}
            src="/assets/play-circle.svg"
            alt="Play button"
            width={50}
            height={50}
            className={`${playDisplay ? "inline" : "hidden"} absolute z-10`}
          />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2️⃣ LARGE SCREENS UI (your original layout)           */}
      {/* ---------------------------------------------------- */}
      <section className="hidden lg:block">
        <p
          className={`${robotoBold.className} w-full text-center font-bold leading-[1.35rem] text-[2.5rem] mt-8 mb-5`}
        >
          VÄLKOMMEN TILL LACKVERKET!
        </p>

        <div className="pt-20">
          {/* BLOCKS — original flex-row layout */}
          {[
            {
              reverse: false,
              title: "SPRUTLACKERING KÖKSLUCKOR",
              link: "/about-4",
              text: `Vi använder industriell akryl färg vilket ger en mycket slitstark
              och tålig yta! Perfekt på köksluckor som har mest slitage i
              hemmet. Ge oss bara en NCS kod så målar vi i exakt din önskade
              kulör!`,
              img: "/assets/painted_doors.avif",
            },
            {
              reverse: true,
              title: "SPRUTLACKERING YTTERDÖRRAR",
              link: "/dorrar",
              text: `Vi sprutmålar ytterdörrar på plats hemma hos kunden över dagen!
              Det är alltså inte nödvändigt att vara utan dörr över natten. Vi
              behöver endast en liten plast i trädgården och eluttag så fixar vi
              resten! Låt oss ta vara på varma sommardagar och fräscha upp även
              utvändigt!`,
              img: "/assets/painted_door.avif",
            },
            {
              reverse: false,
              title: "SPRUTLACKERING MÖBLER",
              link: "/mobler",
              text: `Varför inte modernisera och måla om de gamla furumöblerna istället
              för att köpa nytt? Eller ge redan målade möbler ett lyft med en ny
              kulör. Valen är ändlösa med färg!`,
              img: "/assets/painted_chair.avif",
            },
            {
              reverse: true,
              title: "SPRUTLACKERING INNEDÖRRAR",
              link: "/mobler",
              text: `Istället för att byta ut gamla innedörrar till nya med andra mått,
              installationskostnad och allt vad det innebär, så går det enkelt
              att sprutmåla de gamla så de känns som nya! Kontakta oss idag!`,
              img: "/assets/room_door.avif",
            },
          ].map((b, i) => (
            <div
              key={i}
              className={`flex ${
                b.reverse ? "flex-row-reverse" : ""
              } justify-center items-center gap-5 px-10`}
            >
              <div className="w-[42vw] h-[78vh] bg-black text-white flex flex-col justify-center items-center gap-5 p-8">
                <p className="font-bold underline text-[1.3rem]">
                  <Link className={robotoBold.className} href={b.link}>
                    {b.title}
                  </Link>
                </p>
                <p
                  className={`${robotoBold.className} w-[85%] text-center leading-7 text-[0.96rem]`}
                >
                  {b.text}
                </p>
              </div>

              <div className="w-[42vw] h-[78vh] relative">
                <Image
                  src={b.img}
                  alt={b.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="pt-17 pb-7 px-4 text-[1.4rem] leading-8 font-bold">
          Vi är sprutlackerare med bakgrund i möbler och interiörer, och med 17
          års erfarenhet av branschen. Kontakta oss så hjälper vi gärna till med
          att hitta bästa lackeringslösningen för dina köksluckor, dörrar och
          möbler. Eller varför inte kontakta oss och diskutera sprutmålning av
          olika inredningsdetaljer i ditt hem, så som speglar, lampfötter,
          ramar, lister eller fönsterfoder! Med färg och kulör som passion,
          pratar vi gärna inredningslösningar med just dig!!"
        </p>

        {/* VIDEO (desktop) */}
        <div className="w-full flex justify-center items-center mt-10 mb-10 relative">
          <video
            ref={videoRef}
            src="/assets/file.mp4"
            controls
            playsInline
            className="w-full"
          />
          <Image
            onClick={handlePlay}
            src="/assets/play-circle.svg"
            alt="Play button"
            width={50}
            height={50}
            className={`${playDisplay ? "inline" : "hidden"} absolute z-10`}
          />
        </div>
      </section>
    </section>
  );
}
