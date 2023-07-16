/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({ icon, link }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-primaryTitle duration-300"
          icon={icon}
        />
      </a>
    </>
  );
};
export default Material;
