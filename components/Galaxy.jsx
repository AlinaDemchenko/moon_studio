import Image from "next/image";

function Galaxy() {
  return (
    <div className="w-[300px] md:w-[400px] xl:w-[600px] absolute -right-14 -bottom-6 animate-pulse duration-75 z-0">
      <Image
        src="/galaxy.png"
        width="1000" 
        height="1200"
        alt="circles"
        className="w-full h-full "
      />
    </div>
  );
}

export default Galaxy;
 