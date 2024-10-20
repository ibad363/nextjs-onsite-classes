import ClassCode from "./components/ClassCode";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProgramDesc from "./components/ProgramDesc";

export default function Home() {
  return (
    <>
    {/* <ClassCode/> */}
      <Header/>
      <Hero/>
      <ProgramDesc/>
      <Gallery/>
    </>
  );
}
