import { useRouter } from "next/router";

import DrawerWrapper from "@/components/UI/Drawer/Drawer-wrapper";
import { useAtom } from "jotai";
import { drawerAtom } from "@/store/drawer-atom";
import { useState } from "react";
import headerLinks from "@/seed/headerLink";
export default function MobileMainMenu() {
  const [showSubItems, setShowSubItems] = useState(false);
  const router = useRouter();
  const [_, closeSidebar] = useAtom(drawerAtom);
  const [currentSubMenu, setCurrentSubMenu] = useState<any>();

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
              className="flex w-full text-15px text-black justify-between cursor-pointer font-isidorasans_regular items-center py-3 px-5 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent md:px-8"
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
              subItems.map((item) => (
                <li
                  onClick={() => handleClick(item.href, idx)}
                  className="flex text-black pl-12 cursor-pointer font-isidorasans_regular items-center py-3 px-8 text-sm  font-semibold capitalize text-heading transition duration-200 hover:text-accent  "
                >
                  {item.label}
                </li>
              ))}
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