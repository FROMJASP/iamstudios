import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ContactButton from "./components/ui/contactbutton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iam studios™ | a sense of sound design",
  description:
    "iam studios is gespecialiseerd in de opname van voice-overs, dubbing & lokalisatie, geluidsnabewerking, sound design en muziek compositie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <nav>
          <div className="navbar bg-zinc-900 border-b-[0.1px] border-sky-950 shadow-xl">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/over-ons">Over ons</a>
                  </li>
                  <li>
                    <a href="/diensten">Diensten</a>
                  </li>
                  <li>
                    <a href="/portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a>Divisies</a>
                    <ul className="p-2">
                      <li>
                        <a target="_blank" href="https://www.14voices.com/">
                          14Voices.com
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.wearesabine.com/">
                          The Sabine 1
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">
                <span>
                  {" "}
                  <span className="text-sky-500">iam</span>studios{" "}
                </span>
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/over-ons">Over ons</a>
                </li>
                <li>
                  <a href="/diensten">Diensten</a>
                </li>
                <li>
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                  <details>
                    <summary>Divisies</summary>
                    <ul className="p-2">
                      <li>
                        <a target="_blank" href="https://www.14voices.com/">
                          14Voices
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.wearesabine.com/">
                          The Sabine 1
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <div className="navbar-end p-2">
              <ContactButton />
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>Copyright © 2024 - All right reserved by IAM Studios</p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
