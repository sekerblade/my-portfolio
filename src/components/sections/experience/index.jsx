import {
  faGithub,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import picture from "../../../assets/github_profile.png";
const Experience = () => {
  return (
    <div className="">
      <div className="text-primaryAccent font-medium pl-4 mb-4">Experience</div>
      <div className="grid grid-cols-[25%_75%] rounded-md hover:bg-primarySubcontent transition-all py-4 px-4">
        <div>
          <div>
            <span className="text-sm">2022-2023</span>
          </div>
          <div className="">
            <img
              src={picture}
              alt=""
              className=" mt-4 w-5/6 rounded-lg border-2 border-primaryContent"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="text-primaryAccent font-medium">Title</div>
          <div className="flex gap-4 text-xl">
            <a
              href="https://youtu.be/DOUP5gwk2jI"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="hover:scale-125 hover:text-primaryTitle transition-all"
                icon={faGithub}
              />
            </a>
            <a
              href="https://youtu.be/DOUP5gwk2jI"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="hover:scale-125 hover:text-primaryTitle transition-all"
                icon={faMedium}
              />
            </a>
            <a
              href="https://youtu.be/DOUP5gwk2jI"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="hover:scale-125 hover:text-primaryTitle transition-all"
                icon={faYoutube}
              />
            </a>
          </div>
          <div className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
          </div>
          <div className="flex gap-4 text-sm">
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              <span className="rounded-lg  py-1 px-2 bg-primaryAccent text-primaryContent inline-block hover:text-primaryTitle">
                <div>NextJS</div>
              </span>
            </a>
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              <span className="rounded-lg  py-1 px-2 bg-primaryAccent text-primaryContent inline-block hover:text-primaryTitle transition-all">
                <div>React</div>
              </span>
            </a>
            <a href="https://mui.com/" target="_blank" rel="noreferrer">
              <span className="rounded-lg  py-1 px-2 bg-primaryAccent text-primaryContent inline-block hover:text-primaryTitle transition-all">
                <div>MUi</div>
              </span>
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <span className="rounded-lg  py-1 px-2 bg-primaryAccent text-primaryContent inline-block hover:text-primaryTitle transition-all">
                <div>Tailwindcss</div>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
