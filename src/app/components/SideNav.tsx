import {
  APKIcon,
  ChevronIcon,
  CompressedIcon,
  DocumentIcon,
  FolderDownIcon,
  FolderOkIcon,
  FoldersIcon,
  ImageIcon,
  MusicIcon,
  ProgramsIcon,
  VideoIcon,
} from "./Icons";

interface SideNav {
  subMenuOpen: boolean;
  toggleSubMenu: () => void;
}

export default function SideNav({ subMenuOpen, toggleSubMenu }: SideNav) {
  return (
    <>
      <button
        onClick={toggleSubMenu}
        className="flex flex-row items-center p-2 rounded-lg w-full justify-between"
      >
        <div className="flex flex-row space-x-4 items-center mr-16 text-white text-[0.80rem]">
          <FoldersIcon />
          <span className="font-semibold flex">All Downloads</span>
        </div>

        <div
          className={`${
            subMenuOpen ? "rotate-180 " : ""
          } transition-all duration-150 ease-linear text-white flex mr-4 text-[0.80rem]`}
        >
          <ChevronIcon />
        </div>
      </button>

      <div
        className={`${
          subMenuOpen ? "max-h-[300px]" : "max-h-0"
        } overflow-hidden transition-all duration-400 ease-linear`}
      >
        {subMenuOpen && (
          <div className="my-2 ml-12 flex flex-col space-y-3 text-[#747579] text-[0.80rem]">
            <a className="cursor-pointer hover:text-white transition-all duration-150 ease-linear flex gap-3 items-center">
              <span className="text-white">
                <MusicIcon size={16} />
              </span>
              Musics
            </a>
            <a className="cursor-pointer hover:text-white transition-all duration-150 ease-linear flex gap-3 items-center">
              <span className="text-white">
                <CompressedIcon size={16} />
              </span>
              Compressed
            </a>
            <a className="cursor-pointer hover:text-white transition-all duration-150 ease-linear flex gap-3 items-center">
              <span className="text-white">
                <VideoIcon size={16} />
              </span>
              Videos
            </a>
            <a className="cursor-pointer hover:text-white transition-all duration-150 ease-linear flex gap-3 items-center">
              <span className="text-white">
                <ProgramsIcon size={16} />
              </span>
              Programs
            </a>
            <a className="cursor-pointer hover:text-white transition-all duration-150 ease-linear flex gap-3 items-center">
              <span className="text-white">
                <DocumentIcon size={16} />
              </span>
              Documents
            </a>
            <a className="cursor-pointer hover:text-white transition-all duration-150 ease-linear flex gap-3 items-center">
              <span className="text-white">
                <APKIcon size={16} />
              </span>
              APKs
            </a>
            <a className="cursor-pointer hover:text-white transition-all duration-150 ease-linear flex gap-3 items-center">
              <span className="text-white">
                <ImageIcon size={16} />
              </span>
              Images
            </a>
          </div>
        )}
      </div>

      <button className="flex flex-row items-center p-2 rounded-lg w-full justify-between">
        <div className="flex flex-row space-x-4 items-center mr-16 text-white text-[0.80rem]">
          <FolderDownIcon />
          <span className="font-semibold flex">Unfinished</span>
        </div>

        <div className={`text-white flex mr-4 text-[0.80rem]`}>
          <ChevronIcon />
        </div>
      </button>

      <button className="flex flex-row items-center p-2 rounded-lg w-full justify-between">
        <div className="flex flex-row space-x-4 items-center mr-16 text-white text-[0.80rem]">
          <FolderOkIcon />
          <span className="font-semibold flex">Finished</span>
        </div>

        <div className={`text-white flex mr-4 text-[0.80rem]`}>
          <ChevronIcon />
        </div>
      </button>
    </>
  );
}
