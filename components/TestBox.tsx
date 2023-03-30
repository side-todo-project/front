import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Box = styled.p`
  font-size: 50px;
  color: orange;
`;

const TestBox = () => {
  return (
    <Container>
      <Box>Test Page</Box>
    </Container>
  );
};

export default TestBox;
