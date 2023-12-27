import { useNavigate } from "react-router-dom";
import homeImage from "../img/HomePhoto.jpg";
import { IoBookOutline } from "react-icons/io5";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex-1 flex justify-center flex-col px-24">
        <h1 className="font-semibold font-serif">
          I am a <br />
          Frontend Developer
        </h1>
        <h5 className="">UI Implementation and Fetch API</h5>
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
      <div className="flex-1 flex w-full h-screen grayscale hover:grayscale-0">
        <img className="object-fill" src={homeImage} alt="" />
      </div>
    </>
  );
};

export default Home;
