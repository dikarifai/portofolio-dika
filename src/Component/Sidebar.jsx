import { useLocation, useNavigate } from "react-router-dom";
import profilePhoto from "../img/profile.jpg";
import { IoLogoLinkedin } from "react-icons/io5";

const menuSidebar = [
  { value: "Home", path: "/" },
  { value: "About", path: "/about" },
  { value: "Experience", path: "/experience" },
  { value: "Education", path: "/education" },
  { value: "Skills", path: "/skills" },
  { value: "Certification", path: "/certification" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-96 flex flex-col items-center bg-[#B1B1B1] gap-5 py-10 h-screen">
      <div className="w-28 h-28">
        <img src={profilePhoto} className="rounded-full" alt="" />
      </div>
      <div className="flex flex-col items-center gap-0">
        <h4 className="font-semibold font-serif">Dika Rahman Rifai</h4>
        <h6 className="text-[#60687B]">Frontend Developer</h6>
      </div>
      <div className="flex flex-col items-center gap-5">
        {menuSidebar.map((item, index) => (
          <p
            key={index}
            style={
              item.path === location.pathname
                ? { color: "#E3E1E4", borderBottom: "solid 2px #E3E1E4" }
                : {}
            }
            className="font-semibold hover:text-[#E3E1E4] cursor-pointer"
            onClick={() => navigate(item.path)}
          >
            {item.value}
          </p>
        ))}
      </div>
      <a href="https://www.linkedin.com/in/dikarifai/" target="_blank">
        <div className="flex flex-row items-center gap-1 cursor-pointer hover:text-[#E3E1E4]">
          <IoLogoLinkedin />
          Dika Rahman Rifai
        </div>
      </a>
    </div>
  );
};

export default Sidebar;
