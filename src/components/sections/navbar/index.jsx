import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col gap-3 font-semibold">
        <div>
          <FontAwesomeIcon className="mr-3" icon={faArrowRight} />
          About
        </div>
        <div>
          <FontAwesomeIcon className="mr-3" icon={faArrowRight} />
          Experience
        </div>
        <div>
          <FontAwesomeIcon className="mr-3" icon={faArrowRight} />
          Project
        </div>
      </div>
    </>
  );
};
export default Navbar;
