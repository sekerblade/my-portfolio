import "./App.css";
import Contact from "./components/sections/contact";
import Header from "./components/sections/header";
//import LeftSection from "./components/sections/leftSection";
import Navbar from "./components/sections/navbar";
import RightSection from "./components/sections/rightSection";

function App() {
  return (
    <div className=" pt-14 mx-auto max-w-7xl grid gap-y-5 lg:grid-cols-[40%_60%]  ">
      <div className="lg:sticky top-14 grid gap-y-5 pl-10 pr-5 lg:grid-rows-[35%_45%_20%] lg:h-[87vh]">
        <Header />
        <Navbar />
        <Contact />
      </div>
      <RightSection />
    </div>
  );
}

export default App;
