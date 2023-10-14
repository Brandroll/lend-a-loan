import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { drawerAtom } from "@/store/drawer-atom";
import navLinks from "@/seed/headerLink";
import { useModalAction } from "../UI/modal/modal.context";
import { useQuery } from "@apollo/client";
import { AllServices } from "@/config/queries";

interface NavLink {
  href: string;
  label: string;
  subItems?: { href: string; label: string }[];
}
export default function Header() {
  const router = useRouter();
  const [currentSubMenu, setCurrentSubMenu] = useState<any>();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isGetStartedVisible, setIsGetStartedVisible] = useState(false);
  //   const [navLinks, setNavLinks] = useState<NavLink[]>([]);
  const [_, setDrawerView] = useAtom(drawerAtom);
  const { openModal } = useModalAction();
  //   const { data } = useQuery(GET_HEADER_MENU);

  function handleSidebar(view: string) {
    setDrawerView({ display: true, view });
  }

  const { loading, error, data } = useQuery(AllServices);
  console.log("🚀 ~ file: Header.tsx:33 ~ Header ~ data:", data)


  return (
    <div className="  ">
      <nav className=" w-full top-0 fixed shadow-2xl z-40    lg:py-3 py-3 px-5   lg:px-8     bg-white    ">
        <div className="max-w-site-full mx-auto flex gap-3 md:gap-0 justify-between items-center">
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
          <div className="flex gap-2 items-center">
            <div>
              {!isGetStartedVisible ? (
                <svg
                  onClick={() => {
                    setIsGetStartedVisible(!isGetStartedVisible);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 md:hidden rounded-full   text-brand-blue"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => {
                    setIsGetStartedVisible(!isGetStartedVisible);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 lg:hidden"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <div className="md:hidden">
                {isGetStartedVisible && (
                  <div className="flex w-full  absolute bg-white right-0  flex-col font-isidorasans_regular      pt-3 pb-2">
                    <>
                      <Link
                        className="hover:text-white py-4 flex gap-4 items-center text-22px text-black hover:bg-brand-blue p-2  px-4  "
                        href={"tel:1300 993 095"}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                          <path
                            fillRule="evenodd"
                            d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
                            clipRule="evenodd"
                          />
                        </svg>
                        1300 993 095
                      </Link>
                      <Link
                        className="hover:text-white py-4   flex gap-4 items-center text-22px text-black hover:bg-brand-blue p-2  px-4  "
                        href={"/sa"}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-8 h-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                          />
                        </svg>
                        Book Appointment
                      </Link>

                      <Link
                        className="hover:text-white py-4 flex gap-4 items-center text-22px text-black hover:bg-brand-blue p-2  px-4  "
                        href={"tel:1300 993 095"}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.5 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72a.75.75 0 111.06 1.06L16.06 9h2.69a.75.75 0 01.75.75z"
                            clipRule="evenodd"
                          />
                          <path
                            fillRule="evenodd"
                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Request a Callback
                      </Link>
                    </>
                  </div>
                )}
              </div>
            </div>

            <motion.div
              whileTap={{ scale: 0.88 }}
              onClick={() => handleSidebar("MAIN_MENU_VIEW")}
              className=" flex items-center gap-2 justify-end lg:hidden"
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
          </div>
          <div className="lg:flex flex-col hidden items-end   justify-end">
            <div className="lg:flex hidden top-12 md:top-0 md:py-0 items-center bg-navbar w-full left-0 absolute md:relative justify-end gap-6">
              {navLinks &&
                navLinks.map((i, idx) => (
                  <Link
                    key={Math.random()}
                    href={i.href}
                    onMouseOver={() => {
                      if (i.subItems && i.subItems.length > 0) {
                        setIsSubMenuOpen(true);
                        setCurrentSubMenu(idx);
                      }
                    }}
                    onMouseLeave={() => {
                      if (i.subItems && i.subItems.length > 0) {
                        setIsSubMenuOpen(false);
                        setCurrentSubMenu(null);
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
                      {currentSubMenu === idx &&
                        i.subItems &&
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
                              className="lg:absolute bg-white z-50  top-[52px] bg-navbar"
                            >
                              <div className="flex flex-col font-isidorasans_regular     pt-3 pb-2">
                                {i.subItems.map((l) => (
                                  <>
                                    <Link
                                      className="hover:text-white hover:bg-brand-blue p-2  px-5  "
                                      href={l.href}
                                    >
                                      {l.label} 
                                    </Link>
                                  </>
                                ))}
                                {
                                  i.services === true &&
                                  data?.services?.nodes?.map((s:any, idx:number)=>(
                                    <>
                                    <Link
                                      className="hover:text-white hover:bg-brand-blue p-2 capitalize px-5  "
                                      href={s.slug}
                                      key={idx}
                                    >
                                      {s.title} 
                                    </Link>
                                  </>
                                  ))
                                  
                                }
                              </div>
                            </div>
                          </>
                        )}
                    </div>
                  </Link>
                ))}

              <motion.button
                onMouseOver={() => {
                  setIsGetStartedVisible(true);
                }}
                onMouseLeave={() => {
                  setIsGetStartedVisible(false);
                }}
                className="w-56 flex justify-center items-center gap-1 text-18px   py-3 bg-brand-blue  text-white font-isidorasans_regular"
              >
                Get Started
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
                <div
                  onMouseOver={() => {
                    setIsGetStartedVisible(true);
                  }}
                  onMouseLeave={() => {
                    setIsGetStartedVisible(false);
                  }}
                  className="lg:absolute w-56  bg-white z-50   top-[52px] bg-navbar"
                >
                  {isGetStartedVisible && (
                    <div className="flex flex-col font-isidorasans_regular      pt-3 pb-2">
                      <>
                        <div className="hover:text-white py-2 flex gap-2 items-center text-18px text-black hover:bg-brand-blue p-2  px-4  ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                            />
                          </svg>
                          <Link href={"/apply-online"}> Apply Now</Link>
                        </div>
                        <Link
                          className="hover:text-white py-2 flex gap-2 items-center text-18px text-black hover:bg-brand-blue p-2  px-4  "
                          href={"tel:1300 993 095"}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                            <path
                              fillRule="evenodd"
                              d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
                              clipRule="evenodd"
                            />
                          </svg>
                          1300 993 095
                        </Link>
                        <Link
                          className="hover:text-white text-left  flex gap-2 items-center text-18px text-black hover:bg-brand-blue p-2  px-4  "
                          href={"/book-consultation"}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                            />
                          </svg>
                          Book Appointment
                        </Link>

                        <div
                          className="hover:text-white py-2 flex gap-2 items-center text-18px text-black hover:bg-brand-blue p-2  px-4  "
                          onClick={() => {
                            openModal("CONTACT_FORM");
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M19.5 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72a.75.75 0 111.06 1.06L16.06 9h2.69a.75.75 0 01.75.75z"
                              clipRule="evenodd"
                            />
                            <path
                              fillRule="evenodd"
                              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Request a Callback
                        </div>
                      </>
                    </div>
                  )}
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
