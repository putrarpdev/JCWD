import styled from "styled-components";

interface props {
  name: string;
  email: string;
}

const Title = styled.h1`
  color: lightblue;
  font-size: 80px;
`;

const Sumbit = styled.button`
  font-size: 20px;
  color: lightblue;
`;

const Greet = styled.h4`
  color: lightblue;
  font-size: 40px;
`;

function Home({ name, email }: props) {
  return (
    <>
      <Title>
        This is our new Home!
      </Title>
      <Greet>
        Hello {name}, {email}
      </Greet>
      <Sumbit>Click Me!</Sumbit>
    </>
  );
}

export default Home;