/* eslint-disable react/prop-types */
import Description from "../description";
import FormattedDate from "../formattedDate";
import Material from "../material";
import Picture from "../picture";
import Tech from "../tech";
import TitleLink from "../titleLink";

const ContentContainer = ({ title: sectionTitle = "", data = [] }) => {
  const SECTION_ID = `${sectionTitle}-section`;
  return (
    <div id={SECTION_ID} className="scroll-m-14">
      <div className="text-primaryAccent font-medium pl-4 mb-4">
        {sectionTitle}
      </div>

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
              {materials.length > 0 ? (
                <div className="flex gap-4 text-xl">
                  {materials.map((e, i) => (
                    <Material
                      key={`${e.type}-material-${i}`}
                      icon={e.type}
                      link={e.link}
                    />
                  ))}
                </div>
              ) : null}

              {descriptions.map((e, i) => (
                <Description key={`description-${i}`} description={e} />
              ))}

              {frontend.length > 0 ? (
                <div className="flex gap-0 ">
                  {frontend.map((e, i) => (
                    <Tech key={`frontend-${e.title}-${i}`} data={e} />
                  ))}
                </div>
              ) : null}

              {backend.length > 0 ? (
                <div className="flex gap-0  ">
                  {backend.map((e, i) => (
                    <Tech key={`backend-${e.title}-${i}`} data={e} />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        )
      )}
    </div>
  );
};
export default ContentContainer;
