import Image from "next/image";

export default function Header() {
  return (
    <header className="mx-8 my-3 flex items-center justify-between">
      <h1 className="text-white text-sm flex justify-left items-center gap-4">
        <Image
          src="/internet-download-manager.png"
          alt="IDM-LOGO"
          width={30}
          height={30}
        />
        Internet Download Manager 10.36
      </h1>
      <article className="flex items-center justify-between gap-2">
        <div className="w-3 h-3 bg-[#DB6D78] rounded-full"></div>
        <div className="w-3 h-3 bg-[#DFCC93] rounded-full"></div>
        <div className="w-3 h-3 bg-[#7AB375] rounded-full"></div>
      </article>
    </header>
  );
}
