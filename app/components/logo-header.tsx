"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";

export function Logoheader() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-md">
      <h1 className="md:text-7xl text-7xl lg:text-7xl font-bold text-center text-neutral-100 relative z-20">
        <span className="text-sky-500">iam</span>studios
      </h1>

      <div className=" relative ">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={800}
          className="opacity-10 w-[600px] h-[100px]"
          particleColor="#949494"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="flex flex-col items-center justify-center relative space-y-4  -mt-[82px]">
          <p className="text-center text-neutral-200 max-w-md">
            Geluidsstudio&apos;s voor voice-overs & dubbing • Geluidsnabewerking
            • Sound design • Muziekcompositie
          </p>

          <div>
            <button className="px-4 py-2 backdrop-blur-sm border bg-zinc-300/10 border-sky-500/20 text-white mx-auto text-center rounded-full">
              <a href="/diensten">
                <span>Vertel meer →</span>
              </a>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-sky-500 to-transparent" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
