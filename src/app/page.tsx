
import { navItems } from "../../data";
import Approach from "./components/Approach";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import RecentProjects from "./components/RecentProjects";
import { FloatingNav } from "./components/ui/FloatingNav";
import Grid from "./components/ui/Grid";
import Footer from "./components/Footer"

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5  ">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={ navItems } />
      <Hero />
      <Grid />
      <RecentProjects/> 
      <Experience />
      <Approach />
      <Footer/>
      </div>
    
   </main>
  );
}
