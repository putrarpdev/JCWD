import styled from "styled-components";
import Description from "./components/description";

const Title = styled.h1`
  color: lightblue;
  font-size: 80px;
`

function About() {
  return (
    <>
      <Title>How about this?</Title>
      <Description />
    </>
  );
}

export default About;