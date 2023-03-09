import styled from "styled-components";

const TestBox = () => {
  return (
    <Container>
      <Box>Test Page</Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`

const Box = styled.p`
  font-size: 50px;
  color: orange;
`

export default TestBox;
