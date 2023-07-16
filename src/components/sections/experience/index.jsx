/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FormattedDate from "../../formattedDate";
import Picture from "../../picture";
import TitleLink from "../../titleLink";
import Material from "../../material";
import Description from "../../description";
import Tech from "../../tech";
import ProjectPhoto from "../../../assets/github_profile.png";
import {
  faGithub,
  faSlack,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { data } from "../../content/experience";
import pics from "../../../assets/github_profile.png";
const Experience = () => {
  const SECTION_ID = "experience-section";
  return (
    <div id={SECTION_ID} className="">
      <div className="text-primaryAccent font-medium pl-4 mb-4">Experience</div>

      {data.map(
        (
          {
            date = "",
            title = "",
            link = "",
            materials = [],
            descriptions = [],
            frontend = [],
            backend = [],
            photo = "",
          },
          index
        ) => (
          <div
            key={`${SECTION_ID}-${index}-${title.replaceAll(" ", "")}`}
            className="grid grid-cols-[25%_75%] rounded-md hover:bg-primarySubcontent duration-500 py-4 px-4"
          >
            <div>
              <FormattedDate key={`${date}-date-${index}`} date={date} />
              <Picture
                key={`${title}-picture-${index}`}
                picture={photo}
                title={title}
              />
            </div>
            <div className="grid gap-4">
              <TitleLink
                key={`${title}-name-${index}`}
                title={title}
                link={link}
              />
              <div className="flex gap-4 text-xl">
                {materials.map((e, i) => (
                  <Material
                    key={`${e.type}-material-${i}`}
                    icon={e.type}
                    link={e.link}
                  />
                ))}
              </div>

              {descriptions.map((e, i) => (
                <Description key={`description-${i}`} description={e} />
              ))}

              <div className="flex gap-0 ">
                {frontend.map((e, i) => (
                  <Tech key={`frontend-${e.title}-${i}`} data={e} />
                ))}
              </div>

              <div className="flex gap-0  ">
                {backend.map((e, i) => (
                  <Tech key={`backend-${e.title}-${i}`} data={e} />
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
export default Experience;
