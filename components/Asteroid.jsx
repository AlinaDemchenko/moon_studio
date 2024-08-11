import Image  from "next/image";

const Asteroid = () => {
    return <div className="absolute left-0 bottom-10 xl:bottom-0 w-[270px] xl:w-[400px] animate-pulse duration-75 z-10 opacity-35"> 
      <Image src='/asteroid.png' width={729} height={624} className="w-full h-full" alt='decoration picture'/>
      </div>;
  };
  
  export default Asteroid;