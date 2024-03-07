import Archive from "./Archive";
import { ProgressBar } from "./Percentage";
import {
  APKIcon,
  CompressedIcon,
  DocumentIcon,
  ImageIcon,
  MusicIcon,
  ProgramsIcon,
  VideoIcon,
} from "../components/Icons";
import Checkbox from "./Checkbox";

export default function ContainerArchives() {
  return (
    <>
      <Archive
        name="UIUXMonster.png"
        archiveIcon={<ImageIcon size={26} />}
        lastUpdate="2023/08/09"
        size="745 KB"
        status="Complete"
        timeLeft="0 Sec"
        type="Image"
      />

      <Archive
        name="2pacCover.mp3"
        archiveIcon={<MusicIcon size={26} />}
        lastUpdate="2023/08/09"
        size="3.00 MB"
        status={<ProgressBar percentage={80} />}
        timeLeft="0 Sec"
        type="Music"
      />

      <Archive
        archiveIcon={<CompressedIcon size={26} />}
        lastUpdate="2023/08/09"
        name="UIUXMonster.zip"
        type="Archive"
        size="12.00 MB"
        status="Complete"
        timeLeft="0 Sec"
      />

      <Archive
        archiveIcon={<DocumentIcon size={26} />}
        lastUpdate="2023/08/09"
        name="Details.pdf"
        size="2 MB"
        status={<ProgressBar percentage={50} />}
        timeLeft="5 Min 12 Sec"
        type="Document"
      />

      <Archive
        archiveIcon={<VideoIcon size={26} />}
        lastUpdate="2023/08/09"
        name="Better.Call Saul.so2E10.720p.mp3"
        size="2.5 GB"
        status={<ProgressBar percentage={0} />}
        timeLeft="0 Sec"
        type="Video"
      />

      <Archive
        archiveIcon={<APKIcon size={26} />}
        lastUpdate="2023/08/09"
        name="Call Of Duty.apk"
        size="12.00 MB"
        status={
          <div className="flex gap-2 items-center">
            <Checkbox /> <p>Paused</p>
          </div>
        }
        timeLeft="0 Sec"
        type="App"
      />

      <Archive
        archiveIcon={<CompressedIcon size={26} />}
        lastUpdate="Today"
        name="2pacCover.mp3"
        size="12.00 MB"
        status={<ProgressBar percentage={10} />}
        timeLeft="0 Sec"
        type="Archive"
      />

      <Archive
        archiveIcon={<ProgramsIcon size={26} />}
        lastUpdate="2023/08/09"
        name="Mima.exe"
        size="32 MB"
        status="Completed"
        timeLeft="0 Sec"
        type="Program"
      />
    </>
  );
}
