export function generateGameResult() {
  const now = new Date();

  const currentDate = now.toISOString().slice(0, 10).replace(/-/g, "");

  const totalMinutes = now.getUTCHours() * 60 + now.getUTCMinutes() + 1;
  const formattedMinutes = String(totalMinutes).padStart(4, "0");

  const autoPeriod = `${currentDate}10001${formattedMinutes}`;

  const randomNumber = Math.floor(Math.random() * 10);

  const sizeResult = randomNumber < 5 ? "Small" : "Big";
  const colorResult = [0, 2, 4, 6, 8].includes(randomNumber) ? "Red" : "Green";

  return {
    period: autoPeriod,
    number: randomNumber,
    result: sizeResult,
    color: colorResult,
  };
}
