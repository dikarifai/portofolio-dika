import { useSpring } from "@react-spring/web";
import Container from "../Component/Container";
import ContentList from "../Component/ContentList";
import { educationData } from "../data/educationData";

const Education = () => {
  const slideIn = useSpring({
    from: { transform: "translatey(100%)", opacity: 0 },
    to: { transform: "translatey(0)", opacity: 1 },
    config: { duration: 1000 },
  });
  return (
    <Container style={slideIn} title={"Education"}>
      {educationData.map((item) => (
        <ContentList
          company={item.name}
          key={item.id}
          date={item.date}
          jobDesc={item.experience}
          title={item.departement}
        />
      ))}
    </Container>
  );
};
export default Education;
