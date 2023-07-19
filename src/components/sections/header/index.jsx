import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import { data } from "../../content/header";

const Header = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-medium relative group">
          <a
            href="https://github.com/sekerblade"
            target="_blank"
            rel="noreferrer"
          >
            <span className="rounded-lg text-3xl  text-primaryAccent py-2 px-2 drop-shadow-md  hover:text-primaryTitle duration-500">
              {data.name}
              <span></span>
            </span>
          </a>
        </div>
        <div className="text-primaryAccent font-medium px-2 pt-3">
          {data.title}
        </div>
        <div className="text-sm w-5/6 p-2 pb-3 ">{data.caption}</div>
        <div className="relative group ">
          <span className="absolute blur-lg  group-hover:bg-primaryAccent duration-1000">
            ViddResumedfdfddf
          </span>
          <a href={data.link} target="_blank" rel="noreferrer">
            <span className="rounded-lg bg-gradient-to-br from-primaryContent from-55% to-primaryTitle text-primaryAccent py-2 px-4 drop-shadow-md  hover:text-primaryTitle duration-500">
              <span className=""> {data.bthText}</span>

              <FontAwesomeIcon
                className="text-xs  ml-2 animate-bounce "
                icon={faArrowDown}
              />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
