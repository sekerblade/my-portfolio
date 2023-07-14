import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import { data } from "../../content/header";

const Header = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="text-3xl text-primaryAccent font-medium">
          {data.name}
        </div>
        <div className="text-primaryAccent font-medium">{data.title}</div>
        <div className="text-sm w-5/6">{data.caption}</div>
        <div className="mt-3">
          <span className="rounded-lg bg-primaryTitle text-primaryAccent py-2 px-4">
            <a href={data.link} target="_blank" rel="noreferrer">
              {data.bthText}
              <span className="rotate-90 inline-block ml-2">
                <FontAwesomeIcon
                  className="animate-bounce"
                  icon={faArrowDown}
                />
              </span>
            </a>
          </span>
        </div>
      </div>
    </>
  );
};
export default Header;
