import { IoMenu } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const HamburgerMenu = ({ onClick }) => {
  const location = useLocation();

  return (
    <div
      className={`hidden w-full ${
        location.pathname === "/" ? "" : "bg-[#B1B1B1]"
      } max-md:flex fixed top-0 left-0 p-2 z-20 text-3xl`}
      onClick={onClick}
    >
      <IoMenu />
    </div>
  );
};

export default HamburgerMenu;
