import { useLocation, useNavigate } from "react-router-dom";
import profilePhoto from "../img/profile.jpg";
import { IoClose, IoLogoLinkedin } from "react-icons/io5";

const menuSidebar = [
  { value: "Home", path: "/" },
  { value: "Portofolio", path: "/portofolio" },
  { value: "About", path: "/about" },
  { value: "Experience", path: "/experience" },
  { value: "Education", path: "/education" },
  { value: "Skills", path: "/skills" },
  { value: "Certification", path: "/certification" },
];

const Sidebar = ({ sidebarActive, onClickItem }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handlerClick = (path, event) => {
    onClickItem();
    event.stopPropagation();
    navigate(path);
  };

  return (
    <div
      className="max-md:fixed max-md:w-full max-md:bg-[#B1B1B1] max-md:bg-opacity-60 z-30 "
      onClick={() => onClickItem()}
    >
      <div
        className={`w-96 flex flex-col items-center bg-[#B1B1B1] gap-5 py-10 h-screen relative max-md:w-4/5  ${
          sidebarActive ? "" : "max-md:hidden"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-28 h-28">
          <img src={profilePhoto} className="rounded-full" alt="" />
        </div>
        <div className="flex flex-col items-center gap-0">
          <h4 className="font-semibold font-serif">Dika Rahman Rifai</h4>
          <h6 className="text-[#60687B]">Frontend Developer</h6>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div
            className="hidden max-md:flex max-md:absolute text-[#E3E1E4] right-2 top-2 z-50 text-3xl"
            onClick={(e) => onClickItem()}
          >
            <IoClose />
          </div>
          {menuSidebar.map((item, index) => (
            <p
              key={index}
              style={
                item.path === location.pathname
                  ? { color: "#E3E1E4", borderBottom: "solid 2px #E3E1E4" }
                  : {}
              }
              className="font-semibold hover:text-[#E3E1E4] cursor-pointer"
              onClick={(e) => handlerClick(item.path, e)}
            >
              {item.value}
            </p>
          ))}
        </div>
        <a
          href="https://www.linkedin.com/in/dikarifai/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex flex-row items-center gap-1 cursor-pointer hover:text-[#E3E1E4]">
            <IoLogoLinkedin />
            Dika Rahman Rifai
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
