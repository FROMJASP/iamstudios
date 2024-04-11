import Image from "next/image";
import { Services } from "./components/services";
import { Logoheader } from "./components/logo-header";

export default function Home() {
  return (
    <>
      <main className="bg-neutral-900">
        <div className="relative min-h-screen">
          {/* Image container */}
          <div className="absolute inset-0 z-0" style={{ opacity: 0.5 }}>
            {/* Next/Image for optimized image serving. Adjust layout to fill and objectFit to cover */}
            <Image
              src="/iam-studio.jpeg"
              loading="lazy"
              alt="iam-studios background image"
              layout="fill" // This makes the image cover the available space of the container
              objectFit="cover" // This makes the image cover the space without distorting aspect ratio
              quality={100} // Adjust quality if needed
            />
          </div>

          <Logoheader />
        </div>
      </main>
    </>
  );
}
