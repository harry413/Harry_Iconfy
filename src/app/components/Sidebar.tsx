"use client";
import * as React from "react";
import Image from "next/image";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function Sidebar() {
  return (
    <>
      <div className="flex items-center justify-between py-2 px-3 text-white">
        <MenuOpenIcon
          className="text-2xl cursor-pointer"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="hs-offcanvas-example"
          aria-label="Toggle navigation"
          data-hs-overlay="#hs-offcanvas-example"
        />
      </div>
      <div
        id="hs-offcanvas-example"
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 
              z-[60] w-64 bg-gray-800 pt-7 pb-10 overflow-y-auto [&::-webkit-scrollbar]:w-2 
              [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
        role="dialog"
        tabIndex={-1}
        aria-label="Sidebar"
      >
        <div className="px-6">
          <a
            className="flex items-center justify-center font-semibold text-xl text-black focus:outline-none focus:opacity-80"
            href="/"
            aria-label="Brand"
          >
            <Image
              src="/assets/exp4.svg"
              alt="logo"
              width={40}
              height={40}
              className="relative flex items-center justify-center "
            />
            <h1 className="relative pl-2 text-md font-serif bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-bold">
              Harry_Iconfy
            </h1>
          </a>
        </div>
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-600 text-sm text-gray-300 rounded-lg hover:bg-gray-700"
                href="/docs"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Get started
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-300 rounded-lg hover:bg-gray-600"
                href="/docs/documents"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                Documentation
              </a>
            </li>
            <li 
              className="hs-accordion" id="account-accordion">
              <button
                type="button"
                className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-700"
                aria-expanded="true"
                aria-controls="account-accordion"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="18" cy="15" r="3" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                  <path d="m21.7 16.4-.9-.3" />
                  <path d="m15.2 13.9-.9-.3" />
                  <path d="m16.6 18.7.3-.9" />
                  <path d="m19.1 12.2.3-.9" />
                  <path d="m19.6 18.7-.4-1" />
                  <path d="m16.8 12.3-.4-1" />
                  <path d="m14.3 16.6 1-.4" />
                  <path d="m20.7 13.8 1-.4" />
                </svg>
                Icons
                <svg
                  className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
                <svg
                  className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                id="account-accordion"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                role="region"
                aria-labelledby="account-accordion"
              >
                <ul className="pt-2 ps-2">
                  <li>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-700"
                      href="/docs/icons"
                    >
                      Skill icons
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-700"
                      href="/docs/icons"
                    >
                      Illustration
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-700"
                      href="/docs/icons"
                    >
                      Vector
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-700"
                      href="/docs/icons"
                    >
                      3D icons
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-700"
                      href="/docs/icons"
                    >
                      Vector
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-700"
                      href="/docs/icons"
                    >
                      Brands
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-700"
                      href="/docs/icons"
                    >
                      Svg
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-700"
                      href="/docs/icons"
                    >
                      Random
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
