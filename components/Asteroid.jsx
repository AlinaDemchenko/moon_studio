import Image  from "next/image";

const Asteroid = () => {
    return <div className="absolute -left-36 md:-left-20 -bottom-32 md:bottom-0 xl:-bottom-[7rem] w-[270px] xl:w-[400px] animate-pulse duration-75 z-10 opacity-35"> 
      <Image src='/asteroid.png' width={729} height={624} className="w-full h-full" alt='asteroid'/>
      </div>;
  };
  
  export default Asteroid;