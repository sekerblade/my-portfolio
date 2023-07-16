/* eslint-disable react/prop-types */

const Picture = ({ picture, title }) => {
  if (!picture) return null;
  return (
    <div>
      <div>
        <img
          src={picture}
          alt={title}
          className=" mt-4 w-5/6 rounded-lg border-2 border-primaryContent"
        />
      </div>
    </div>
  );
};
export default Picture;
