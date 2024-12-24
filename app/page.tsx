import Image from "next/image";
import StartingPage from "./components/page";
import HomePage from "./home/page";
export default function Home() {
  return (
    <div className="px-3">
      <StartingPage />
      <HomePage />
    </div>
  );
}
