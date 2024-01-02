import { config, useTrail, animated } from "@react-spring/web";
import { portofolioData } from "../data/portofolioData";

const PortofolioList = () => {
  const trail = useTrail(portofolioData.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.default,
  });

  return (
    <div className="w-11/12 grid grid-cols-3 items-center max-md:grid-cols-1 gap-4">
      {trail.map((style, index) => (
        <animated.div
          key={index}
          className="bg-white py-2 w-full h-60 flex flex-col items-center  rounded-2xl"
          style={style}
        >
          <div className="w-3/4 ">
            <iframe title="Website Preview" width="100%" height="100%"></iframe>
          </div>
          <h6>{portofolioData[index].name}</h6>
        </animated.div>
      ))}
    </div>
  );
};

export default PortofolioList;
