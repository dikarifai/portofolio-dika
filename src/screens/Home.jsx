import { useNavigate } from "react-router-dom";
import homeImage from "../img/HomePhoto.jpg";
import { IoBookOutline } from "react-icons/io5";
import { useSpring, animated } from "@react-spring/web";

const Home = () => {
  const navigate = useNavigate();

  // Menggunakan useSpring untuk animasi paddingLeft
  const spring = useSpring({
    from: { transform: "translateX(-2.5%)", opacity: 0 },
    to: { transform: "translateX(0%)", opacity: 1 },
    config: { duration: 1000 },
  });
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });
  return (
    <>
      <animated.div
        className="flex-1 flex justify-center flex-col px-10 items-center max-md:px-0 md-max:relative max-md:z-10"
        style={spring}
      >
        <div className="max-md:bg-white max-md:bg-opacity-80 max-md:rounded-2xl p-2">
          <h1 className="font-semibold font-serif max-md:text-3xl">
            I am a <br />
            Frontend Developer
          </h1>
          <h5 className="max-md:text-xl">UI Implementation and Fetch API</h5>
          <button
            onClick={() => navigate("/about")}
            className="border-solid border-[#60687B] border-2 w-4/5 rounded-lg p-1 active:bg-[#60687B] hover:bg-[#8595A5] flex flex-row justify-center items-center gap-1"
          >
            View Portofolio{" "}
            <p>
              <IoBookOutline />
            </p>
          </button>
        </div>
      </animated.div>
      <animated.div
        className="flex-1 flex w-full  h-screen justify-end grayscale hover:grayscale-0 max-md:justify-center max-md:absolute max-md:grayscale-0"
        style={fadeIn}
      >
        <img className="object-cover" src={homeImage} alt="" />
      </animated.div>
    </>
  );
};

export default Home;
