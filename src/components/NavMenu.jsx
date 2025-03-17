import { Link, useLocation } from "react-router";

const NavItem = [
  {
    name: "Social Media",
    path: "/",
  },
  {
    name: "Lottery",
    path: "/lottery",
  },
  {
    name: "Result",
    path: "/result",
  },
];

const NavMenu = () => {
  const location = useLocation();
  return (
    <nav
      className="flex flex-row justify-around items-center w-full h-20 text-center
     bg-[#3674B5] text-[#D1F8EF]"
    >
      {NavItem.map((item, index) => {
        return (
          <Link
            to={item.path}
            key={index}
            className={`flex justify-center items-center  text-2xl w-60 h-17 duration-500 ${
              location.pathname === item.path
                ? "bg-[#578FCA] text-[#D1F8EF] rounded-2xl"
                : "hover:bg-[#578FCA] hover:text-[#D1F8EF] rounded-2xl"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavMenu;
