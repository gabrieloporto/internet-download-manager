import Image from "next/image";
import { DiskIcon, SemiCircleProgressBar } from "./Icons";
import CountUp from "react-countup";

export default function DiskCard() {
  return (
    <article className="flex flex-col items-stretch justify-center text-white w-[20vw] h-auto bg-gradient-to-br from-[#2f323f] to-[#19161B] px-6 py-4 rounded-3xl gap-4 mt-8 mr-8">
      <header className="flex items-center justify-between pt-2">
        <div className="flex gap-2">
          <DiskIcon />
          <h2 className="text-sm">Disk Space</h2>
        </div>

        <button className="flex items-center justify-between gap-1">
          <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
          <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
          <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
        </button>
      </header>

      <article className="flex items-center justify-center">
        <SemiCircleProgressBar size={110} gradient="url(#gradient)" />

        <div className="absolute flex gap-4 items-center justify-center text-[#747579] ml-2 mt-4">
          <span className="text-xs mt-4">0%</span>
          <Image
            src="/confounded-emoji.png"
            alt="confounded emoji"
            width={40}
            height={40}
          />
          <span className="text-xs mt-4">100%</span>
        </div>
        <div className=" absolute flex flex-col items-center justify-center mt-28">
          <h2 className="font-semibold">
            <CountUp
              start={0}
              end={90}
              formattingFn={(value: number) => value + " %"}
            />
          </h2>
          <p className="text-xs text-[#747579]">C:/Downloads</p>
        </div>
      </article>

      <button className="bg-gradient-to-r from-[#0B979A] to-[#955BF1] text-white py-2 px-4 rounded-2xl text-sm mt-8 hover:opacity-80 transition-opacity duration-100 ease-linear">
        Disk Cleaner
      </button>
    </article>
  );
}
