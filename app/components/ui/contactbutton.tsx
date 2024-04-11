"use client";
import React from "react";

declare global {
  interface HTMLDialogElement extends HTMLElement {
    showModal: () => void;
  }
}

export default function Home() {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_2"
          ) as HTMLDialogElement | null;
          if (modal) {
            modal.showModal();
          }
        }}
      >
        Contact
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Klaar om samen te werken?</h3>
          <p className="py-4">
            Omdat we vaak in de studio zitten, kun je ons het best mailen.
            Indien je belt en we niet kunnen opnemen, bellen we je z.s.m. terug!{" "}
          </p>
          <p className="pb-2">
            📨 {" - "}{" "}
            <a
              href="mailto:info@iam-studios.nl"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-semibold"
            >
              info@iam-studios.nl
            </a>
          </p>
          <p className="">☎️ {" - "} 020 24 44 821</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
