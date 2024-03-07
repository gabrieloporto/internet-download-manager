import { SearchIcon } from "./Icons";

export default function SearchForm() {
  return (
    <form
      className="p-2 bg-[#22222A] flex gap-2 rounded-lg"
      onSubmit={(e) => e.preventDefault()}
    >
      <button>
        <SearchIcon />
      </button>
      <input
        type="text"
        className="bg-[#22222A] text-white text-sm outline-none w-[240px] h-[28px]"
        placeholder="Search in the List"
      />
    </form>
  );
}
