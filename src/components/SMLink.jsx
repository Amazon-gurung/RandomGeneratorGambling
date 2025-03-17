import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const smItem = [
  {
    title: "Instagram",
    link: [
      {
        userName: "3ayank",
        url: "https://www.instagram.com/3ayank_",
      },
      {
        userName: "3m2k1",
        url: "https://www.instagram.com/3m2k1",
      },
    ],
    tags: (
      <div
        className="flex justify-center items-center rounded-full w-13 h-13 bg-gradient-to-r 
        from-[#feda75] via-[#fa7e1e] to-[#d62976] text-white"
      >
        <FaInstagram className="text-3xl" />
      </div>
    ),
  },
  {
    title: "YouTube",
    link: [
      {
        userName: "3ayank",
        url: "https://youtube.com/@3ayank",
      },
      {
        userName: "3m2k1",
        url: "https://youtube.com/@3m2k1",
      },
    ],
    tags: (
      <div className="flex justify-center items-center rounded-full w-13 h-13 bg-red-600 text-white">
        <FaYoutube className="text-3xl" />
      </div>
    ),
  },
  {
    title: "Telegram",
    link: [
      {
        userName: "3ayank",
        url: "https://t.me/addlist/3Fjrwy-U2AkyNzdl",
      },
    ],
    tags: (
      <div className="flex justify-center items-center rounded-full w-13 h-13 bg-blue-500 text-white">
        <FaTelegramPlane className="text-3xl" />
      </div>
    ),
  },
  {
    title: "WhatsApp",
    link: [
      {
        userName: "Mayank Kotecha",
        url: "https://whatsapp.com/channel/0029Vae25lgJ93wdF3oU703f",
      },
    ],
    tags: (
      <div className="flex justify-center items-center rounded-full w-13 h-13 bg-green-500 text-white">
        <FaWhatsapp className="text-3xl" />
      </div>
    ),
  },
  {
    title: "Snapchat",
    link: [
      {
        userName: "3M2K1",
        url: "https://snapchat.com/t/y4OzhdjU",
      },
    ],
    tags: (
      <div className="flex justify-center items-center rounded-full w-13 h-13 bg-yellow-400 text-white">
        <FaSnapchatGhost className="text-3xl" />
      </div>
    ),
  },
  {
    title: "Facebook",
    link: [
      {
        userName: "3M2K1",
        url: "https://www.facebook.com/share/HLTgQhdXFuLWdUXT/?mibextid=kFxxJD",
      },
    ],
    tags: (
      <div className="flex justify-center items-center rounded-full w-13 h-13 bg-blue-500 text-white">
        <FaFacebookF className="text-3xl" />
      </div>
    ),
  },
];

const SMLink = () => {
  return (
    <div
      className="flex flex-col flex-wrap gap-5 justify-center items-center sm:w-full sm:h-80 
      md:w-full md:h-70 lg:w-8/10 lg:h-50 xl:w-8/10 xl:h-50 2xl:w-8/10 2xl:h-50 mt-2"
    >
      {smItem.map((items, SMindex) => {
        return (
          <div
            key={SMindex}
            className="flex flex-row items-center gap-2 w-70 h-20 border-2 rounded-2xl"
          >
            <div className="flex justify-center items-center w-25 border-2 h-full rounded-l-2xl">
              {items.tags}
            </div>
            <ul className="w-50 rounded-r-2xl">
              {items.link.map((itemLink, Linkindex) => {
                return (
                  <li
                    key={Linkindex}
                    className="flex flex-col justify-center ml-2 text-lg h-11"
                  >
                    <a href={itemLink.url} target="_blink">
                      👉🏻 {itemLink.userName}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SMLink;
