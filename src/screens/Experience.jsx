import { useSpring } from "@react-spring/web";
import ContentList from "../Component/ContentList";
import { experienceData } from "../data/experienceData";
import Container from "../Component/Container";

const Experience = () => {
  const slideIn = useSpring({
    from: { transform: "translatey(100%)", opacity: 0 },
    to: { transform: "translatey(0)", opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <Container className="mb-12 h-fit" style={slideIn}>
      <h1 className="w-11/12">Experience</h1>
      {experienceData.map((item, index) => (
        <ContentList
          company={item.company}
          date={item.date}
          jobDesc={item.jobDesc}
          title={item.title}
          key={index}
        />
      ))}{" "}
    </Container>
  );
};

export default Experience;
