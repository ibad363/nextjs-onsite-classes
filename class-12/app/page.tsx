import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Desktop */}
      <div className="hidden md:block">
        <Navbar/>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <MobileNavbar/>
      </div>
    </div>
  );
}
