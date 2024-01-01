import { animated } from "@react-spring/web";

const Container = ({ children, style, className }) => {
  return (
    <animated.div
      className={`w-full flex flex-col items-center mt-16 gap-4 ${className}`}
      style={style}
    >
      {children}
    </animated.div>
  );
};

export default Container;
