import { animated } from "@react-spring/web";

const Container = ({ children, style, className, title }) => {
  return (
    <animated.div
      className={`w-full flex flex-col items-center pt-16 gap-4 ${className}`}
      style={style}
    >
      <h1 className="w-11/12">{title}</h1>
      {children}
    </animated.div>
  );
};

export default Container;
