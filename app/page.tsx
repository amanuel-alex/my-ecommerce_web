import Image from "next/image";
import StartingPage from "./components/page";
import HomePage from "./home/page";
export default function Home() {
  return (
    <div>
      <StartingPage />
      <HomePage />
    </div>
  );
}
