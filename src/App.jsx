import { Routes, Route, useLocation } from "react-router";
import SMIcon from "./components/SMIcon";
import NavMenu from "./components/NavMenu";
import LotteryLink from "./components/LotteryLink";
import ResultGame from "./components/ResultGame";

function App() {
  const location = useLocation();

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="flex justify-center items-center text-7xl w-full h-25 font-[yellowtail]">
        3ayank
      </h1>
      <NavMenu />
      <Routes location={location} key={location.pathname}>
        <Route index element={<SMIcon />} />
        <Route path="/lottery" element={<LotteryLink />} />
        <Route path="/result" element={<ResultGame />} />
      </Routes>
    </section>
  );
}

export default App;
