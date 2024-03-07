import Checkbox from "./Checkbox";
import { SelectorIcon } from "./Icons";

export default function FilterArchive() {
  return (
    <section className="grid grid-cols-6 gap-4 p-4 text-[#747579] text-[0.85rem] pl-6 pr-16">
      <div className="col-span-2 flex gap-8 items-center">
        <Checkbox />

        <p className="flex gap-1 items-center">
          Names
          <SelectorIcon />
        </p>
      </div>

      <p className="col-span-1 flex items-center ml-14">
        Sizes
        <SelectorIcon />
      </p>

      <p className="col-span-1 flex items-center justify-center">
        Status
        <SelectorIcon />
      </p>

      <p className="col-span-1 flex items-center ml-6">
        Time Left
        <SelectorIcon />
      </p>

      <p className="col-span-1 flex items-center">
        Last Modification
        <SelectorIcon />
      </p>
    </section>
  );
}
