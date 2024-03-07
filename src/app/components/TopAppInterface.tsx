import AddLinkForm from "./AddLinkForm";
import AppButton from "./AppButton";
import {
  ScheduleIcon,
  SettingsIcon,
  ShareIcon,
  StopAllIcon,
  StopIcon,
  TrashIcon,
  PlayIcon,
  QueuesIcon,
} from "../components/Icons";

export default function TopAppInterface() {
  return (
    <section className="flex p-4 gap-8 pl-0 border-b border-solid border-[#747579]">
      <AddLinkForm />

      <div className="w-[1px] h-8 bg-[#747579] flex mt-2"></div>

      <AppButton icon={<PlayIcon />} title="Resume" />

      <AppButton icon={<StopIcon />} title="Stop" />

      <AppButton icon={<StopAllIcon />} title="Stop All" />

      <div className="w-[1px] h-8 bg-[#747579] flex mt-2"></div>

      <AppButton icon={<TrashIcon />} title="Delete" />

      <AppButton icon={<SettingsIcon />} title="Options" />

      <AppButton icon={<QueuesIcon />} title="Queues" />

      <AppButton icon={<ScheduleIcon />} title="Schedule" />

      <AppButton icon={<ShareIcon />} title="Share" />
    </section>
  );
}
