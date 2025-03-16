import { useEffect, useState } from "react";

const ResultGame = () => {
  const [data, setData] = useState({});
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:6789");

    ws.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      setData(parsedData);
      setRemainingTime(parsedData.remaining_time);
    };

    ws.onclose = () => {
      console.log("WebSocket closed");
    };

    return () => ws.close();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center w-screen">
      <h2 className="text-3xl mt-7">Win Go 1 Min</h2>
      <h2 className="text-3xl max-[390px]:text-2xl max-[410px]:text-2xl max-[639px]:text-3xl mt-8">
        Period: {data.period}
      </h2>
      <h1
        className="flex flex-row justify-center items-center gap-5 text-8xl mt-10 bg-[#3674B5] text-[#D1F8EF]
         max-[390px]:w-80 max-[390px]:h-40 max-[410px]:w-90 max-[410px]:h-40 max-[639px]:w-100 max-[639px]:h-50
         h-50 w-130 rounded-2xl"
      >
        {data.number} {data.result}
        <div
          className={`w-15 h-15 ${
            data.color === "green" ? "bg-green-600" : "bg-red-600"
          } rounded-full`}
        ></div>
      </h1>
      <h3 className="flex flex-col items-center text-2xl mt-10">
        Time remaining... <div>{remainingTime} sec</div>
      </h3>
    </section>
  );
};

export default ResultGame;
