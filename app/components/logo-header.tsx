"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";

export function Logoheader() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-md">
      <div className="max-w-2/3">
        <h1 className="md:text-7xl text-6xl sm:text-7xl lg:text-8xl font-bold text-center text-neutral-100 relative z-20">
          <span className="text-sky-500">iam</span>studios
        </h1>
      </div>

      <div className="relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="flex flex-col items-center justify-center relative space-y-4 pt-3 max-w-sm ">
          <p className="text-center text-neutral-200 max-w-[2/3] text-sm sm:text-md">
            Geluidsstudio&apos;s voor voice-overs & dubbing • Geluidsnabewerking
            • Sound design • Muziekcompositie
          </p>

          <div>
            <button className="px-4 py-2 backdrop-blur-sm border bg-zinc-300/10 border-sky-500/20 text-white mx-auto text-center rounded-full">
              <a href="/over-ons">
                <span>Vertel meer →</span>
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* Core component */}
      <div className="absolute max-w-sm min-w-1/5">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={800}
          className="opacity-10  h-2/3"
          particleColor="#949494"
        />
      </div>
    </div>
  );
}
