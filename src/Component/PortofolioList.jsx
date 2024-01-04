import { config, useTrail, animated } from "@react-spring/web";
import { portofolioData } from "../data/portofolioData";
import Modal from "./Modal";
import { useState } from "react";

const PortofolioList = () => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState({
    id: 0,
    name: "",
    tech: [],
    api: "",
    url: "",
    img: "",
  });

  const trail = useTrail(portofolioData.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.default,
  });

  const modalToggle = (item) => {
    setShow(true);
    setModal(item);
  };

  return (
    <div className="w-11/12 grid grid-cols-3 items-center max-md:grid-cols-1 gap-4">
      {trail.map((style, index) => (
        <animated.div
          key={index}
          className="bg-white w-full h-60 flex flex-col items-center rounded-2xl cursor-pointer"
          style={style}
          onClick={() => modalToggle(portofolioData[index])}
        >
          <div className="w-full h-full flex flex-col">
            <div className="flex-1 flex justify-center items-center">
              <img src={portofolioData[index].img} alt="" />
            </div>
            <div className="bg-[#CACACA] flex-2 w-full p-2 rounded-b-2xl">
              <h6>{portofolioData[index].name}</h6>
              <div className="flex flex-col">
                <p className="font-semibold">Teknologi: </p>
                <div className="flex flex-row gap-1">
                  {portofolioData[index].tech.map((item) => (
                    <div className="bg-white px-2 rounded-lg">{item}</div>
                  ))}
                </div>
                <div className="flex flex-col ">
                  <p className="font-semibold">API:</p>
                  <a
                    target="_blank"
                    href="https://fakestoreapi.com/"
                    rel="noreferrer"
                    className="hover:bg-[#D7D7D7]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <p>{portofolioData[index].api}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      ))}
      <Modal show={show} setShow={setShow}>
        <div className="w-8/12 flex flex-col items-center bg-white">
          <div className="w-full flex justify-center bg-white">
            <img className="object-cover w-2/4" src={modal.img} alt="" />
          </div>
          {modal.name}
        </div>
      </Modal>
    </div>
  );
};

export default PortofolioList;
