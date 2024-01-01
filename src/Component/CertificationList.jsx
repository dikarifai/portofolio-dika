import { config, useTrail, animated } from "@react-spring/web";
import { certificationData } from "../data/certificationData";

const CertificationList = () => {
  const trail = useTrail(certificationData.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.default,
  });

  return (
    <div className="w-11/12 grid grid-cols-3 items-center max-md:grid-cols-1 gap-4">
      {trail.map((style, index) => (
        <animated.div
          key={index}
          className="bg-white p-2 w-full h-60 flex flex-col items-center rounded-2xl"
          style={style}
        >
          <div className="w-3/4 ">
            <img
              className="object-cover"
              src={certificationData[index].attachment}
              alt={certificationData[index].name}
            />
          </div>
          <h6>{certificationData[index].name}</h6>
        </animated.div>
      ))}
    </div>
  );
};

export default CertificationList;
