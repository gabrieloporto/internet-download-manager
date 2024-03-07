import { CloudIcon, LinkSumIcon } from "./Icons";

export default function AddLinkForm() {
  return (
    <form
      className="mx-5 bg-[#22222A] flex items-center gap-2 rounded-lg text-white"
      onClick={(e) => e.preventDefault()}
    >
      <LinkSumIcon />
      <input
        type="text"
        className="bg-[#22222A] text-white text-sm outline-none w-[120px] h-[28px] pl-2"
        placeholder="Add Url"
      />
      <button className="bg-gradient-to-b from-[#0B979A] to-[#955BF1] p-2 rounded-2xl hover:opacity-80 transition-opacity duration-100 ease-linear">
        <CloudIcon />
      </button>
    </form>
  );
}
