import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

function Header() { 
  return (
    <header className="absolute z-10 w-full xl:w-[93%] flex items-center px-16 xl:px-0 h-fit md:h-[172px] xl:h-[144px] xl:pl-[160px] xl:right-[7%]">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-y-3 md:gap-y-6 py-4 md:py-8"> 
          <Link href="/" className="w-[120px] md:w-[140px] xl:w-[150px]">
            <Image src="/moon-logo.png" width={1719} height={1068} alt="logo" priority="true" />
          </Link>
          <Socials/>
        </div>
      </div>
    </header>
  ); 
}

export default Header;
