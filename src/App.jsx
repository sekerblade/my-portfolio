import "./App.css";

function App() {
  return (
    <>
      <div className=" mx-auto max-w-6xl grid grid-cols-[40%_60%]">
        <div className="text-red-500 ">
          <div className="sticky top-0 grid grid-rows-[2fr_4fr_2fr] h-screen">
            <div>Name</div>
            <div>Title</div>
            <div className="flex items-end">Link</div>
          </div>
        </div>
        <div className="text-green-500">
          <div>about</div>
          <div className="mb-96">Experience</div>
          <div className="mb-96">Experience</div>
          <div className="mb-96">Experience</div>
          <div className="mb-96">Experience</div>
        </div>
      </div>
    </>
  );
}

export default App;
