// eslint-disable-next-line no-unused-vars
import { data } from "../../content/about";

const About = () => {
  return (
    <>
      <div className="space-y-4 px-4">
        <div className="text-primaryAccent font-medium ">{data.title}</div>
        <div>{data.description}</div>
      </div>
    </>
  );
};

export default About;
