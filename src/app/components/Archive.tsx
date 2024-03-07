import { ReactElement, ReactNode } from "react";
import Checkbox from "./Checkbox";
interface Archive {
  name: string;
  archiveIcon: ReactElement;
  size: string;
  status: ReactNode;
  timeLeft: string;
  lastUpdate: string;
  type: string;
}

export default function Archive({
  name,
  archiveIcon,
  size,
  status,
  timeLeft,
  lastUpdate,
  type,
}: Archive) {
  return (
    <section className="grid grid-cols-6 gap-4 p-4 text-white text-[0.85rem] pl-6 pr-16 rounded-md cursor-pointer hover:bg-gradient-to-br from-[#2f323f] to-[#19161B]">
      <div className="col-span-2 flex gap-8 items-center">
        <Checkbox />
        <div className="flex items-center justify-center gap-4">
          <div>{archiveIcon}</div>
          <div className="flex flex-col items-left justify-center">
            {name}
            <small className="text-[#747579]">{type}</small>
          </div>
        </div>
      </div>

      <div className="col-span-1 flex items-center ml-14">{size}</div>

      <div className="col-span-1 flex items-center ml-10">{status}</div>

      <div className="col-span-1 flex items-center ml-6">{timeLeft}</div>

      <div className="col-span-1 flex items-center">{lastUpdate}</div>
    </section>
  );
}
