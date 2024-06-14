import Link from "next/link";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
} from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";

function Socials() {
  return (
    <div className="text-neutral-500 flex items-center gap-x-5 text-xl">
      <Link href="" className="hover:text-white transition-all duration-300">
        <IoLogoFacebook />
      </Link>
      <Link href="" className="hover:text-white transition-all duration-300">
        <IoLogoInstagram /> 
      </Link>
      <Link href="" className="hover:text-white transition-all duration-300">
        <IoLogoLinkedin />
      </Link>
      <Link href="" className="hover:text-white transition-all duration-300">
        <FaTelegramPlane />
      </Link>
    </div>
  );
}

export default Socials;
