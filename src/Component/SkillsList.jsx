import { config, useTrail, animated } from "@react-spring/web";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "React.js",
  "Typescript",
  "Tailwind",
  "Bootsrap",
];
const SkillList = () => {
  const trail = useTrail(skills.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.default,
  });

  return (
    <div className="grid grid-cols-3  items-center gap-12 w-11/12 max-md:grid-cols-1 max-md:gap-y-4">
      {trail.map((style, index) => (
        <animated.div
          key={index}
          style={style}
          className="bg-white p-4 text-center rounded-2xl"
        >
          {skills[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default SkillList;
