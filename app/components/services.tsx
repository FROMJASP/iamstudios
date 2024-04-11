"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Img from "next/image";

const content = [
  {
    title: "Voice-overs & Dubbing",
    description:
      "Dagelijks leveren wij voice-over producties zoals radioreclames, TV commercials, bedrijfsfilms, tekenfilms & games. Soms slecht een paar A4tjes en soms wel 90.000 zinnen tegelijk. Uiteraard met grootste aandacht voor kwaliteit en strakke deadlines.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Img
          src="voice-over-lachend.jpeg"
          alt="voice-over-lachend"
          className="h-full opacity-93 grayscale"
        />
      </div>
    ),
  },
  {
    title: "Geluidsnabewerking",
    description:
      "Met verschillende geluidstudio's verspreid over de Randstad verzorgen wij de productie & mixage voor o.a. gameconsoles zoals PlayStation of Xbox. Van stereo tot surround, als het maar klinkt zoals het moet klinken.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Img
          src="/iam-studio.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover opacity-80"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Sound design",
    description:
      "De interface-geluiden van een elektrische auto. De geluidseffecten bij een ‘explanimation’. Of 80 sporen met gelaagd geluid om één enkele filmscène tot leven te wekken. Allemaal voorbeelden van sound design opdrachten waar we aan werkten.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Muziek compositie",
    description:
      "Wij schrijven muziek voor commercials, games, televisieprogramma’s en films. Van een simpele gitaartrack tot een orkestrale filmscore. Met onze inhuis-componisten weten we de sfeer van elke productie te vatten in muziek.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Img
          src="/iam-studio.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover opacity-80"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "",
    description: "",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Img
          src="/iam-studio.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover opacity-80"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function Services() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
