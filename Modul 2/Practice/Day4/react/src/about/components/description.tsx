import styled from "styled-components";

const DescriptionText = styled.h3`
color: lightblue;
font-size: 40px;
`;

function Description() {
  return (
    <>
      <DescriptionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </DescriptionText>
    </>
  )
}

export default Description;