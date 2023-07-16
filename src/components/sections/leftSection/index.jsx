import Contact from "../contact";
import Header from "../header";
import Navbar from "../navbar";

const LeftSection = () => {
  return (
    <>
      <div className="sticky top-14 grid gap-y-5 pl-10 pr-5 lg:grid-rows-[35%_45%_20%] lg:h-[87vh]">
        <Header />
        <Navbar />
        <Contact />
      </div>
    </>
  );
};

export default LeftSection;
