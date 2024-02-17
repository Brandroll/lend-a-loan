import { useRouter } from "next/router";

import DrawerWrapper from "@/components/UI/Drawer/Drawer-wrapper";
import { useAtom } from "jotai";
import { drawerAtom } from "@/store/drawer-atom";
import { useState } from "react";
import headerLinks from "@/seed/headerLink";
import { useQuery } from "@apollo/client";
import { AdvanceService, CalcMenu } from "@/config/queries";
import {MenuItems} from '../megaMenu'
import Link from "next/link";

export default function MobileMainMenu() {
  const [showSubItems, setShowSubItems] = useState(false);
  const router = useRouter();
  const [_, closeSidebar] = useAtom(drawerAtom);
  const [currentSubMenu, setCurrentSubMenu] = useState<any>();

  const { loading, error, data } = useQuery(AdvanceService);
  const CalNav = useQuery(CalcMenu);


  function handleClick(path: string, idx: any) {
    const hasSubItems = headerLinks.find((hed) => hed.href === path)?.subItems;
    if (hasSubItems) {
      setShowSubItems(!showSubItems);
      setCurrentSubMenu(idx);

      return;
    }
    setCurrentSubMenu(null);

    router.push(path);
    closeSidebar({ display: false, view: "" });
  }

  return (
    <DrawerWrapper>
      <ul className="flex-grow  ">
        {headerLinks.map(({ href, label, subItems }, idx) => (
          <li key={`${href}${label}`}>
            <button
              onClick={() => handleClick(href, idx)}
              className="flex   text-15px text-black justify-between cursor-pointer font-isidorasans_regular items-center py-3 px-5 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent md:px-8"
            >
              {label}

              {subItems && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </button>
            {currentSubMenu === idx &&
              showSubItems &&
              subItems &&
              label === "Solutions" &&
                MenuItems?.map((item:any, idx:number) => (
                     <ul className="col-span-2 md:col-span-1 text-gray-700" key={idx}>
                          {
                               item.column.map((l:any, i:number) => (
                                    <li key={i}>
                                         <Link href={l.href} className="flex p-3 px-8 hover:bg-gray-100 justify-between">
                                         <div className="font-medium">{l.label}</div>
                                              <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                                   xmlns="http://www.w3.org/2000/svg">
                                                   <path fill-rule="evenodd"
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clip-rule="evenodd"></path>
                                              </svg>
                                              
                                         </Link>
                                    </li>
                               ))
                          }

                     </ul>
                ))
              }
               {currentSubMenu === idx &&
              showSubItems &&
              subItems &&
              label === "Calculators" &&
              CalNav?.data?.menuItems?.nodes?.map((item:any) => (
                <li
                  onClick={() => handleClick(item.uri, idx)}
                  className="flex text-black   cursor-pointer font-isidorasans_regular items-center py-3 px-8 text-sm  font-semibold capitalize text-heading transition duration-200 hover:text-accent  "
                >
                  {item.label}
                </li>
              ))
              
              
              }
          </li>
        ))}
        <li>
          <a
            href="tel:1300%20662%20344"
            className=" flex cursor-pointer  font-isidorasans_regular items-center py-3 px-5 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent md:px-8 gap-2"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            1300 662 344
          </a>
        </li>
      </ul>
    </DrawerWrapper>
  );
}
