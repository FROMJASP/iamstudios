"use client";

import Img from "next/image";

import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <main className="bg-zinc-900 ">
        <h1 className="text-center text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent pt-28">
          Werk waar we trots op zijn
        </h1>
        <div className="-mt-20 flex items-center justify-center">
          <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 pt-[200px] gap-10 px-40">
            {/* De nieuwe bibliotheek */}
            <BackgroundGradient className="rounded-[22px] h-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={`/portfolio/nieuwebibliotheek.png`}
                alt="de nieuwe bibliotheek"
                height="400"
                width="400"
                className="object-contain text-center"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                De Nieuwe Bibliotheek
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Een korte animatiefilm van Frank Siebelink over de avonturen die
                je kunt beleven in de bibliotheek. Wij mochten de muziek, het
                sound design en de voice-over verzorgen.
              </p>
              <div className="flex flex-wrap">
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800 ">
                  <span>Geluidsnabewerking </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Muziekcompositie </span>
                </button>

                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Sound design </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Voice-over </span>
                </button>
              </div>
            </BackgroundGradient>

            {/* My Brother is an Ostrisch */}
            <BackgroundGradient className="rounded-[22px] h-full  p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={`/portfolio/brotherostrich.jpeg`}
                alt="my brother is an ostrich"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                My Brother is an Ostrich
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Voor deze korte animatiefilm over een jongen en zijn
                niet-zo-normale broer mochten wij met veel plezier de muziek en
                het sound design verzorgen.
              </p>
              <div className="flex flex-wrap">
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800 ">
                  <span>Geluidsnabewerking </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Muziekcompositie </span>
                </button>

                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Sound design </span>
                </button>
              </div>
            </BackgroundGradient>

            {/* Scrap */}
            <BackgroundGradient className="rounded-[22px] h-full  p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={`/portfolio/scrap.jpeg`}
                alt="scrap"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Scrap
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Scrap is een korte studentenfilm over een man die gevangen zit
                in zijn treurige leven op de autosloop. Een bijzonder projects
                waarbij wij o.a. de muziek voor verzorgden.
              </p>
              <div className="flex flex-wrap">
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800 ">
                  <span>Geluidsnabewerking </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Muziekcompositie </span>
                </button>

                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Sound design </span>
                </button>
              </div>
            </BackgroundGradient>

            {/* BLG Beleggen (SNS) */}
            <BackgroundGradient className="rounded-[22px] h-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={`/portfolio/blg-beleggen-sns.jpeg`}
                alt="scrap"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                BLG Beleggen (SNS)
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Wel eens van een ‘explanimation’ gehoord? Dat is een filmpje dat
                een bepaald proces of een bepaalde handeling uitlegt aan de hand
                van een geanimeerde film.
              </p>
              <div className="flex flex-wrap">
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Sound design </span>
                </button>
              </div>
            </BackgroundGradient>

            {/* Skylanders Superchargers */}
            <BackgroundGradient className="rounded-[22px] h-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={`/portfolio/skylanders.png`}
                alt="Skylanders Superchargers"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Skylanders Superchargers
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Of we even 70.000 inzetten konden opnemen voor een van de meest
                succesvolle en leukste games ooit. Ja, dat konden we. Met meer
                dan 40 stemacteurs die samen, onder regie, zo’n 70 rollen
                spelen. En dan geen enkele inzet vergeten. Zo zijn wij. En we
                zijn behoorlijk trots op het resultaat.
              </p>
              <div className="flex flex-wrap">
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Dubbing</span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Geluidsnabewerking</span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Voice-over</span>
                </button>
              </div>
            </BackgroundGradient>

            {/* Nike Mercurial Superfly */}
            <BackgroundGradient className="rounded-[22px] h-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={`/portfolio/nike-mercurial.png`}
                alt="Nike Mercurial Superfly"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Nike Mercurial Superfly
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                “Hallo, met Nike.” En toen bleef aan onze zijde het even stil.
                Maar niet voor lang, want sound design en muziek mogen maken
                voor een Nike commercial is de droom van elke sound designer.
                Dus zijn we meteen het voetbalveld opgegaan om het geluid van
                nat-gras-onder-een-Nike-Mercurial-Superfly-voetbalschoen op te
                nemen. En dat klinkt best vet.
              </p>
              <div className="flex flex-wrap">
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Geluidsnabewerking </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Muziekcompositie </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Sound design</span>
                </button>
              </div>
            </BackgroundGradient>

            {/* Storm & Skye Secret of the Car Wash */}
            <BackgroundGradient className="rounded-[22px] h-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={`/portfolio/storm&sky.png`}
                alt="Storm & Skye Secret of the Car Wash"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Storm & Skye Secret of the Car Wash
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                We wonnen er de belangrijkste prijs voor apps in de Verenigde
                Staten mee: de Tabby Award. Storm & Skye and the Secret of the
                Car Wash is de eerste aflevering van een serie spannende
                verhalen voor kinderen van vijf tot tien jaar oud. Inmiddels
                kijken en luisteren dagelijks meer dan 100.000 kinderen naar. En
                wij hadden de eer om de dubbing, het sound design en de muziek
                te mogen verzorgen.
              </p>
              <div className="flex flex-wrap">
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Dubbing </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Geluidsnabewerking</span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Muziekcompositie </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Sound design </span>
                </button>
              </div>
            </BackgroundGradient>

            {/* Moeders voor Moeders */}
            <BackgroundGradient className="rounded-[22px] h-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={`/portfolio/moeders-voor-moeders.png`}
                alt="Moeders voor Moeders"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Moeders voor Moeders
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Het klinkt wat vreemd, plassen in een kan. Vonden wij ook!
                Totdat we hoorden dat daarmee vele vrouwen met
                vruchtbaarheidsproblemen geholpen worden. En dat mochten we
                middels muziek, sound design en voice-over uitleggen in dit
                filmpje van Moeders voor Moeders.
              </p>
              <div className="flex flex-wrap">
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Geluidsnabewerking</span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Muziekcompositie</span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Sound design</span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Voice-over</span>
                </button>
              </div>
            </BackgroundGradient>

            {/* Cevo */}
            <BackgroundGradient className="rounded-[22px] h-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={`/portfolio/cevo.png`}
                alt="Cevo"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Cevo
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Onze opdrachtgever kwam met een heel ingewikkeld verhaal over
                kunstmatige intelligentie. Nu zijn we best intelligent, maar hoe
                ze computers precies laten nadenken konden we toch niet helemaal
                volgen. “Geef ons jullie film nou maar. Wij maken er wel iets
                moois van.” En zo geschiedde. CEVO, platform voor Artificial
                Intelligence, kreeg een prachtige film, door ons voorzien van
                muziek en sound design.
              </p>
              <div className="flex flex-wrap">
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Geluidsnabewerking </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Muziekcompositie</span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Sound design</span>
                </button>
              </div>
            </BackgroundGradient>

            {/* Dodaq */}
            <BackgroundGradient className="rounded-[22px] h-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={`/portfolio/dodaq.png`}
                alt="Dodaq"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Dodaq
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Psst! Diamant kopen? Van een oud omaatje geweest! Nou ja, niet
                helemaal. Gewoon online gekocht. Soort van. Voor de online
                diamantenbeurs DODAQ voorzagen we deze commercial van sound
                design, muziek en voice-over.
              </p>
              <div className="flex flex-wrap">
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Geluidsnabewerking </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Muziekcompositie</span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Sound design</span>
                </button>
              </div>
            </BackgroundGradient>

            {/* 48 HOUR: Family Wars */}
            <BackgroundGradient className="rounded-[22px] h-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={`/portfolio/familywars.jpg`}
                alt="Family Wars"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                48 HOUR: Family Wars
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Voor het 48 HOUR Amsterdam Festival en voor Team TucTuv
                verzorgden wij het sound design en de geluidsnabewerking van de
                inzending Family Wars. Een korte film over een fan van de Star
                Wars saga, die fantasie en werkelijkheid niet meer helemaal uit
                elkaar kan houden. De film werd genomineerd voor beste sound
                design.
              </p>
              <div className="flex flex-wrap">
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Dubbing </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Geluidsnabewerking </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Sound design </span>
                </button>
              </div>
            </BackgroundGradient>

            {/* Uber */}
            <BackgroundGradient className="rounded-[22px] h-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={`/portfolio/uber.jpg`}
                alt="Family Wars"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Uber
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                U kent ze wel. Van die chique taxi’s die je met je iPhone kunt
                bestellen. Die wilden opeens ook op TV. En snel een beetje. Dus
                namen wij de voice-over voor ze op. En verzorgden we de TV mix.
                ’s Ochtends gebeld, ’s middags klaar. Dus worden wij nu voor
                altijd gratis door Uber rondgereden.
              </p>
              <div className="flex flex-wrap">
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Geluidsnabewerking</span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Voice-over</span>
                </button>
              </div>
            </BackgroundGradient>

            {/* Penny's: Liefde in de Lucht */}
            <BackgroundGradient className="rounded-[22px] h-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={`/portfolio/penny-liefde.png`}
                alt="Penny's: Liefde in de Lucht"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Penny`&apos;`s: Liefde in de Lucht
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Maak voor ons gedurende anderhalf jaar élke dag een soort
                soap-aflevering voor onze lezertjes.” Dat was de opdracht van
                paardenblad Penny. En daarom verzonnen we de ‘luisterstrip’, een
                geanimeerde strip voor tablets die door ons werd voorzien van
                stemmen, muziek en geluid. Met elke aflevering weer 15 minuten
                nieuw materiaal.
              </p>
              <div className="flex flex-wrap">
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Dubing </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Geluidsnabewerking </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Muziekcompositie </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Sound desig </span>
                </button>
              </div>
            </BackgroundGradient>

            {/* La Paradoja de Arrow */}
            <BackgroundGradient className="rounded-[22px] h-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={`/portfolio/laparadoja.png`}
                alt="La Paradoja de Arrow"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                La Paradoja de Arrow
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Wat zou er gebeuren als het leven keuzes voor jou maakt? Als
                alles wat je doet voorbestemd is en je geen vrijheid meer hebt
                om zélf te kiezen? In deze korte film, waarvoor wij de muziek en
                het sound design maakten, wordt die vraag beantwoord. Muziek
                geïnspireerd op de fabuleuze sounds die in de jaren vijftig uit
                het NatLab van Philips kwamen.
              </p>
              <div className="flex flex-wrap">
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Geluidsnabewerking </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Muziekcompositie </span>
                </button>
                <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-medium dark:bg-zinc-800">
                  <span>Sound design</span>
                </button>
              </div>
            </BackgroundGradient>
          </div>
        </div>
      </main>
    </>
  );
}
