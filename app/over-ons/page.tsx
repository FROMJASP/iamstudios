import Image from "next/image";

export default function Diensten() {
  return (
    <>
      <main className="bg-zinc-900 flex flex-col justify-center items-center ">
        <section className="bg-zinc-900">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Wij zijn een creatieve studio met gevoel voor geluid →
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                <Image
                  alt="iam foto"
                  loading="lazy"
                  src="/iam-studio.jpeg"
                  width={500}
                  height={500}
                  className="absolute inset-0 h-full w-full object-cover rounded-lg"
                />
              </div>

              <div className="lg:py-16">
                <article className="space-y-4 text-neutral-500">
                  <p>
                    iam studios is gespecialiseerd in de opname van voice-overs,
                    dubbing & lokalisatie, geluidsnabewerking, sound design en
                    muziek compositie. We beschikken over twee top-notch Avid
                    Pro Tools geluidsstudio’s waarin we de afgelopen zestien
                    jaar aan ontelbare nationale en internationale producties
                    hebben gewerkt.{" "}
                  </p>

                  <p>
                    We werken met een klein vast team en een ‘handpicked’ team
                    van freelance audio technici, producers, stemacteurs,
                    regisseurs en vertalers. Uiteraard allemaal knettergoed in
                    hun vak en stand-by om aan uw project te werken.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 pb-10 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
                Klaar om samen te werken?
              </h2>

              <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
                Benieuwd naar wat we voor jouw productie kunnen betekenen? Neem
                contact met ons op:{" "}
                <a
                  href="mailto:info@iam-studios.nl"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-semibold"
                >
                  info@iam-studios.nl
                </a>{" "}
                📨
              </p>
            </div>

            <div className="mt-8 sm:mt-12">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100 dark:sm:divide-gray-800">
                <div className="flex flex-col px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
                    Geluiddsstudio`&apos;`s
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    3
                  </dd>
                </div>

                <div className="flex flex-col px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
                    Minuten opgenomen
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    10798
                  </dd>
                </div>

                <div className="flex flex-col px-4 py-8 text-center">
                  <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
                    Tevreden klanten
                  </dt>

                  <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    467
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
