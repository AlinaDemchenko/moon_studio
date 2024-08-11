import Image from "next/image";

function TopLeftImg() {
  return (
    <div className="absolute top-0 left-0 z-10 w-[200px] md:w-[400px] xl:w-[350px]">
      <Image src="/dust.png" width="419" height="536" alt="stardust" />
    </div>
  );
}

export default TopLeftImg;
