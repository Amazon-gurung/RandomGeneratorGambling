import BDGImg from "../assets/LotteryImg/BDG_game.png";
import DmWin from "../assets/LotteryImg/DmWin.png";
import GoaGame from "../assets/LotteryImg/GoaGame.png";
import OkWin from "../assets/LotteryImg/OkWin.png";
import TiRanga from "../assets/LotteryImg/TiRanga.png";
import Sikkim from "../assets/LotteryImg/Sikkim.png";
import BHTClub from "../assets/LotteryImg/BharatClub.png";

const LotteryItems1 = [
  {
    title: "BDG",
    img: BDGImg,
    link: "https://www.bdgall07.com//#/register?invitationCode=326366075061",
  },
  {
    title: "DmWin",
    img: DmWin,
    link: "https://www.dmwin3.com/#/register?invitationCode=25824427046",
  },
  {
    title: "Goagames",
    img: GoaGame,
    link: "http://www.goabetg.com/#/register?invitationCode=655752637246",
  },
  {
    title: "OK.Win",
    img: OkWin,
    link: "https://okwinslots3.com/#/register?invitationCode=751723501742",
  },
  {
    title: "Tiranga",
    img: TiRanga,
    link: "https://tgdream15.com/#/register?invitationCode=57326486185",
  },
  {
    title: "Sikkim",
    img: Sikkim,
    link: "http://www.6sikkim.com/#/register?invitationCode=61663329934",
  },
  {
    title: "BharatClub",
    img: BHTClub,
    link: "https://bharatclub.bet/#/register?invitationCode=174452758909",
  },
];

const LotteryLink = () => {
  return (
    <div className="flex flex-wrap justify-center w-9/10 gap-5 mt-5 mb-5">
      {LotteryItems1.map((item, index) => {
        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="flex flex-row items-center justify-center
              max-[639px]:w-100 max-[639px]:h-30 max-[410px]:w-90 max-[390px]:w-80
            sm:w-100 sm:h-30 md:w-70 md:h-30 lg:w-70 lg:h-30 xl:w-80 xl:h-30 2xl:w-80 2xl:h-30 
            bg-[#3674B5] text-[#D1F8EF] rounded-lg"
            >
              <img
                src={item.img}
                alt="BDG game icon pic"
                className="p-3 max-[390px]:w-40 w-50 h-full"
              />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default LotteryLink;
