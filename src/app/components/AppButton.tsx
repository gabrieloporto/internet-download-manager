import { ReactElement } from "react";

interface AppButton {
  icon: ReactElement;
  title: string;
}

export default function AppButton({ icon, title }: AppButton) {
  return (
    <button className="flex flex-col items-center justify-center text-white hover:text-[#747579] gap-1 hover:transition-colors delay-75 ease-linear">
      {icon}
      <p className="text-[0.80rem]">{title}</p>
    </button>
  );
}
