import { IoMenu } from "react-icons/io5";

const HamburgerMenu = ({ onClick }) => {
  return (
    <div
      className="hidden max-md:flex fixed top-2 left-2 z-20 text-3xl"
      onClick={onClick}
    >
      <IoMenu />
    </div>
  );
};

export default HamburgerMenu;
