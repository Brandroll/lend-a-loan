import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { drawerAtom } from "@/store/drawer-atom";

import navLinks from "@/seed/headerLink";
// import { useQuery } from "@apollo/client";
// import { GET_HEADER_MENU } from "@/apollo/queries/headerMenu";
interface NavLink {
  href: string;
  label: string;
  subItems?: { href: string; label: string }[];
}
export default function Header() {
  const router = useRouter();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  //   const [navLinks, setNavLinks] = useState<NavLink[]>([]);
  const [_, setDrawerView] = useAtom(drawerAtom);

  //   const { data } = useQuery(GET_HEADER_MENU);

  function handleSidebar(view: string) {
    setDrawerView({ display: true, view });
  }

  return (
    <div className="  ">
      <nav className=" w-full top-0 fixed shadow-2xl z-40    lg:py-3 p-6   lg:px-8     bg-white    ">
        <div className="max-w-site-full mx-auto flex justify-between items-center">
          <Link className="lg:block hidden" href={"/"}>
            <Image alt="logo" src={"/imgs/logo.svg"} width={160} height={180} />
          </Link>
          <div className="lg:hidden ">
            <Link href={"/"}>
              <Image
                alt="logo"
                src={"/imgs/logo.svg"}
                width={200}
                height={100}
              />
            </Link>
          </div>

          <motion.div
            whileTap={{ scale: 0.88 }}
            onClick={() => handleSidebar("MAIN_MENU_VIEW")}
            className=" flex justify-end lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-10 h-10 text-brand-blue-dark"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </motion.div>
          <div className="lg:flex flex-col hidden items-end   justify-end">
            <div className="lg:flex hidden top-12 md:top-0 md:py-0 items-center bg-navbar w-full left-0 absolute md:relative justify-end gap-6">
              {navLinks &&
                navLinks.map((i) => (
                  <Link
                    key={Math.random()}
                    href={i.href}
                    onMouseOver={() => {
                      if (i.subItems && i.subItems.length > 0) {
                        setIsSubMenuOpen(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (i.subItems && i.subItems.length > 0) {
                        setIsSubMenuOpen(false);
                      }
                    }}
                  >
                    <div>
                      <p
                        className={`font-isidorasans_regular ${
                          router.asPath === i.href ? "text-brand-blue-dark" : ""
                        }  hover:text-brand-blue  flex items-center gap-1 p-3 text-18px cursor-pointer relative`}
                      >
                        {i.label}
                        {i.subItems && i.subItems?.length > 0 && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        )}
                      </p>
                      {i.subItems &&
                        i.subItems?.length > 0 &&
                        isSubMenuOpen && (
                          <>
                            <div
                              onMouseOver={() => {
                                if (i.subItems) {
                                  setIsSubMenuOpen(true);
                                }
                              }}
                              onMouseLeave={() => {
                                if (i.subItems) {
                                  setIsSubMenuOpen(false);
                                }
                              }}
                              className="lg:absolute bg-white z-50  top-8 bg-navbar"
                            >
                              <div className="flex flex-col font-isidorasans_regular     pt-2">
                                {i.subItems.map((l) => (
                                  <>
                                    <Link
                                      className="hover:text-white hover:bg-brand-blue p-2 px-6  "
                                      href={l.href}
                                    >
                                      {l.label}
                                    </Link>
                                  </>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                    </div>
                  </Link>
                ))}

              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-8 text-18px rounded-full py-3 bg-brand-blue text-white font-isidorasans_regular"
              >
                Get Started Now
              </motion.button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
