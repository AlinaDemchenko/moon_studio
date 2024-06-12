"use client";

import Link from "next/link";
import {
  IoChatboxEllipsesSharp,
  IoHome,
  IoBarChartSharp,
  IoBuildSharp,
  IoBriefcase,
  IoCall,
} from "react-icons/io5";
import { usePathname} from "next/navigation";

export const navData = [
  { name: "home", path: "/", icon: <IoHome /> },
  { name: "about", path: "/about", icon: <IoBarChartSharp /> },
  { name: "services", path: "/services", icon: <IoBuildSharp /> },
  { name: "works", path: "/works", icon: <IoBriefcase /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <IoChatboxEllipsesSharp />,
  },
  { name: "contacts", path: "/contacts", icon: <IoCall /> },
];

function Nav({motionState}) {
  const pathname = usePathname(); 

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-11 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-20 xl:h-max bg-gray-400/25 py-8 text-neutral-500 text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, idx) => ( 
          <Link href={link.path} key={idx} className={`${motionState !== "-100%" && "disabled-link"} ${link.path === pathname &&  "text-white"} group relative flex items-center hover:text-white transition-all`}>
            {/* tooltip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="text-xs leading-none font-semibold capitalize ">{link.name}</div>
            </div>
            {/* icon */}
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav; 
