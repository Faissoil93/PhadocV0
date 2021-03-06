import styled from "styled-components";

import { constants, images } from "../../config";
import { Image, View } from "../../styles";

const { FOOTER_IMGH } = constants;

const ImgFooter = () => {
  return (
    <>
      <View bdBox>
        <Image topCurve source={images.medecin1} />
      </View>
      <Footer>
        <Image source={images.md} />
      </Footer>
    </>
  );
};

const Footer = styled.View`
  overflow: hidden;
  margin-top: -0.15px;

  ${({ theme: { radii } }) => ({
    borderTopLeftRadius: radii.xl,
    height: FOOTER_IMGH,
  })}
`;

export default ImgFooter;
