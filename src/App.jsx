// import { Routes, Route, useLocation } from "react-router";
import SMIcon from './components/SMIcon';
// import NavMenu from "./components/NavMenu";
// import LotteryLink from "./components/LotteryLink";
// import ResultGame from "./components/ResultGame";
// import { useEffect, useRef, useState } from "react";

function App() {
  // const dialogRef = useRef();
  // const [showDialog, setShowDialog] = useState(true);
  // const location = useLocation();

  // useEffect(() => {
  //   if (showDialog && dialogRef.current) {
  //     dialogRef.current.showModal();
  //   }
  // }, [showDialog]);

  return (
    <>
      {/* {showDialog && (
        <div className="flex justify-center items-center w-screen h-screen">
          <dialog
            ref={dialogRef}
            className="flex flex-col m-auto p-10 rounded-2xl dark:bg-white bg-neutral-500"
          >
            <ul className="list-disc dark:text-black text-white">
              <li>We do not assure users that they will earn with us.</li>
              <li>Playing online games involves financial risk.</li>
              <li>Play at your own risk</li>
            </ul>
            <button
              onClick={() => {
                dialogRef.current.close();
                setShowDialog(false);
              }}
              className="mt-5 dark:bg-neutral-600 bg-white p-3 rounded-2xl dark:text-white"
            >
              Ok, I understand.
            </button>
          </dialog>
        </div>
      )}
      {!showDialog && ( */}
      <section className="flex flex-col justify-center items-center">
        <h1 className="flex justify-center items-center text-7xl w-full h-25 font-[yellowtail]">
          3ayank
        </h1>
        {/* <NavMenu />
          <Routes location={location} key={location.pathname}>
            <Route index element={<SMIcon />} />
            <Route path="/lottery" element={<LotteryLink />} />
            <Route path="/result" element={<ResultGame />} />
          </Routes> */}
        <SMIcon />
      </section>
    </>
  );
}

export default App;
