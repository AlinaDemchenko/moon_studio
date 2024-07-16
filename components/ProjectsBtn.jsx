import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
 
function ProjectsBtn() {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href="/works" className="relative z-10 w-[130px] h-[130px] md:w-[160px] md:h-[160px] flex justify-center items-center bg-[url('/circle_frame.png')] bg-cover bg-center bg-no-repeat group">
        <Image
        src="/circle_text.png"
        width={424}
        height={424}
        alt="our projects"
        className="animate-spin-slow w-full h-full max-w-[111px] max-h-[111px] md:max-w-[141px] md:max-h-[141px]"
        />
        <FaArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 text-amber-300"/>
      </Link> 
    </div>
  );
}

export default ProjectsBtn;
