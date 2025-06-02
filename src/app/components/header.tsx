"use client";

import { usePathname } from "next/navigation";
import HeaderOption from "./header-option";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [droppedDown, setDroppedDown] = useState(false);
  const router = useRouter();

  const options: { name: string; link: string }[] = [
    { name: "Home", link: "/" },
    { name: "Resources", link: "/resources" },
    { name: "Community", link: "/community" },
    { name: "Culture", link: "/culture" },
    { name: "Learn", link: "/learn" },
  ];

  return (
    <header className="h-16 flex">
        <img src="/Viossa_Flag.png" alt="Viossa's Flag" className="h-full" onClick={() => router.push("/")} />
      <div className="w-full h-full flex bg-viossa-500 text-viossa-950">
        <div className="text-4xl font-black items-center h-full -translate-x-2 hidden lg:flex">
          Viossa
        </div>
        <div className="hidden lg:flex">
          {options.map((v, i) => (
            <Link key={i} href={v.link}>
              <HeaderOption selected={pathname == v.link}>
                {v.name}
              </HeaderOption>
            </Link>
          ))}
        </div>
        <div className="flex lg:hidden">
          {options.map(
            (v, i) =>
              pathname === v.link && (
                <Link key={i} href={v.link}>
                  <HeaderOption selected={pathname == v.link}>
                    {v.name}
                  </HeaderOption>
                </Link>
              )
          )}
          <div
            onClick={() => setDroppedDown(!droppedDown)}
            className="flex justify-center items-center"
          >
            <button className="size-12 bg-viossa-700 hover:bg-viossa-800 transition flex items-center justify-center rounded-2xl cursor-pointer hover:*:translate-y-1">
              <span className="material-symbols-outlined text-viossa-50 transition-all">
                arrow_drop_{droppedDown ? "up" : "down"}
              </span>
            </button>
            {droppedDown && (
              <div className="absolute bg-black/50 backdrop-blur-lg top-16 text-white rounded-b-2xl w-40 left-28">
                {options.map(
                  (v, i) =>
                    pathname != v.link && (
                      <Link key={i} href={v.link}>
                        <div
                          className={`p-2 border-b border-black/10 hover:bg-viossa-800 transition text-center ${
                            i === options.length - 1 && "rounded-b-2xl"
                          }`}
                        >
                          {v.name}
                        </div>
                      </Link>
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
