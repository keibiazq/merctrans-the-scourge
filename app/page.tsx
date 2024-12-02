import { Header } from "@/app/components/header";
import MainBody from "./components/main-body";

export default function Home() {
  return (
    <div className="max-h-[164px]">
      <div>
        <Header />
      </div>
      <div>
        <MainBody />
      </div>
    </div>
  );
}
