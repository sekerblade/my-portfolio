/* eslint-disable react/prop-types */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleLink = ({ title, link }) => {
  if (!link) {
    return (
      <div className="text-primaryAccent font-medium mr-2">
        <span>{title}</span>
      </div>
    );
  }

  return (
    <div className="text-primaryAccent font-medium mr-2">
      <span>{title}</span>
      <a href={link} target="_blank" rel="noreferrer">
        <span className="mx-2 text-sm text-primaryBase underline underline-offset-2 hover:text-primaryTitle duration-500">
          Live Preview
          <FontAwesomeIcon
            className="text- ml-1  animate-pulse -rotate-45"
            icon={faArrowRight}
          />
        </span>
      </a>
    </div>
  );
};
export default TitleLink;
