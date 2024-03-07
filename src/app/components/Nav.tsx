export default function Nav() {
  return (
    <nav className="text-[#747579] flex gap-[1.80rem] text-sm cursor-pointer ml-2">
      <a className="hover:text-white transition-all delay-75 ease-linear">
        Tasks
      </a>
      <a className="hover:text-white transition-all delay-75 ease-linear">
        File
      </a>
      <a className="hover:text-white transition-all delay-75 ease-linear">
        Downloads
      </a>
      <a className="hover:text-white transition-all delay-75 ease-linear">
        View
      </a>
      <a className="hover:text-white transition-all delay-75 ease-linear">
        Helps
      </a>
    </nav>
  );
}
