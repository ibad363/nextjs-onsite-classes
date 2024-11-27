import Image from "next/image";
import ParentComponent from "./components/ParentComponent";
import FeatureCar from "./components/FeatureCar";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-2 font-[family-name:var(--font-geist-sans)]">
      <ParentComponent/>
      <FeatureCar/>
    </div>
  );
}