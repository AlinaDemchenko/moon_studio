import Image from "next/image";

function TopLeftImg() {
  return (
    <div className="absolute top-0 left-0 z-10 w-[300px] h-[215px] xl:w-[400px] xl:h-[511px]">
      <Image src="/dust.png" width="419" height="536" alt="stardust" />
    </div>
  );
}

export default TopLeftImg;
