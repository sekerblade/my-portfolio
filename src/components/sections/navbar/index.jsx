/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const navs = [
  { title: "About", sectionId: "About-section" },
  { title: "Project", sectionId: "Project-section" },
  { title: "Experience", sectionId: "Experience-section" },
];

const Navbar = () => {
  const [isMouseEnter, setIsMouseEnder] = useState({});
  const handleClick = (sectionId) => {
    console.log(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="flex flex-col  font-semibold">
        {navs.map((e, i) => (
          <div
            key={`nav-${e.sectionId}-${i}`}
            onClick={() => handleClick(e.sectionId)}
            onMouseEnter={() => setIsMouseEnder({ [e.title]: true })}
            onMouseLeave={() => setIsMouseEnder({ [e.title]: false })}
            className="cursor-pointer flex py-3"
          >
            <div>
              <FontAwesomeIcon
                className={` mr-3 new-arrow ${
                  isMouseEnter[e.title] ? "" : "hidden"
                } `}
                icon={faArrowRight}
              />
            </div>

            <div
              className={`${
                isMouseEnter[e.title] ? "translate-x-1" : ""
              } duration-500 ease-out`}
            >
              {e.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Navbar;
