import Checkbox from "./Checkbox";
import {
  DownloadIcon,
  IndicatorIcon,
  SelectorIcon,
  SemiCircleProgressBar,
  UploadIcon,
} from "./Icons";

export default function Footer() {
  return (
    <footer className="sticky flex items-center justify-between bottom-0 right-0 w-full h-16 bg-[#16171B] text-white border-t border-solid border-[#747579] px-4">
      <section className="grid grid-cols-6 gap-4 p-4 text-white text-[0.85rem] pl-6 pr-16">
        <div className="col-span-2 flex gap-8 items-center mr-6">
          <Checkbox />

          <p className="flex gap-1 items-center">Select All</p>
        </div>

        <div className="col-span-1 flex items-center opacity-0">
          Sizes
          <SelectorIcon />
        </div>

        <div className="col-span-1 flex items-center justify-center ml-8">
          <div className="flex flex-col relative">
            <div className="absolute right-2 -top-3">
              <SemiCircleProgressBar size={40} gradient="url(#gradient2)" />
            </div>
            <div className="absolute right-5 -top-1">
              <IndicatorIcon />
            </div>
          </div>
          SpeedTest:
        </div>

        <div className="col-span-1 flex items-center ml-6 text-[#747579]">
          <DownloadIcon />
          <span className="text-white ml-2">10.55</span>

          <span className="text-xs ml-2">Mbs</span>
        </div>

        <div className="col-span-1 flex items-center ml-6 text-[#747579]">
          <UploadIcon />
          <span className="text-white ml-2">6.30</span>

          <span className="text-xs ml-2">Mbs</span>
        </div>
      </section>
    </footer>
  );
}
