import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="mb-10 flex justify-end">
      <span>
        Powered by React and Tailwindcss
        <FontAwesomeIcon className="ml-1" icon={faGithub} />
      </span>
    </div>
  );
};
export default Footer;
