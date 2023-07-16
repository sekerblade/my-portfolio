import ContentContainer from "../../contentContainer";
import About from "../about";
import { data as experienceData } from "../../content/experience";
import { data as projectData } from "../../content/project";
import Footer from "../footer";
const RightSection = () => {
  return (
    <>
      <div className="grid gap-y-20 pr-10 pl-5 ">
        <About />
        <ContentContainer title="Project" data={projectData} />
        <ContentContainer title="Experience" data={experienceData} />

        <Footer />
      </div>
    </>
  );
};

export default RightSection;
