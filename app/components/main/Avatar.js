import styled from "styled-components";

import { images } from "../../config";
import { Image, Text } from "../../styles";

const Avatar = () => {
  return (
    <Container>
      <Box>
        <Image avatar source={images.Nawal} />
      </Box>
      <Text title1>Nawal Ibrahim</Text>
      <Text>rokia@demo.com</Text>
    </Container>
  );
};

const Container = styled.View`
  align-self: center;
  align-items: center;
  position: absolute;
  top: -35px;
`;

const Box = styled.View`
  ${({ theme: { space } }) => ({
    marginBottom: space.s1,
  })}
`;

export default Avatar;
