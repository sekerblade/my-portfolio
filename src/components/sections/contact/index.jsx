import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="flex items-end gap-4 text-2xl ">
        <a
          href="https://github.com/sekerblade"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="hover:scale-125 hover:text-primaryTitle duration-500"
            icon={faGithub}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/pongsathorn-sutawa-970a6227a/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="hover:scale-125 hover:text-primaryTitle duration-500"
            icon={faLinkedin}
          />
        </a>
        <a
          href="https://www.facebook.com/Seker.Blade/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="hover:scale-125 hover:text-primaryTitle duration-500"
            icon={faFacebook}
          />
        </a>
      </div>
    </>
  );
};

export default Contact;
