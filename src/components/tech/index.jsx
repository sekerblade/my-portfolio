/* eslint-disable react/prop-types */
const Tech = ({ data }) => {
  return (
    <div>
      <a href={data.link} target="_blank" rel="noreferrer">
        <span className="rounded-lg mr-2  py-1 px-2 bg-primaryAccent text-primaryContent inline-block hover:text-primaryTitle duration-300 text-sm">
          <div>{data.title}</div>
        </span>
      </a>
    </div>
  );
};
export default Tech;
