import { useState } from "react";
import styled from "styled-components";

import { constants } from "../../../config";
import { Text } from "../../../styles";


const { LIST_CARD } = constants;

const ListItem = ({ item,  }) => {
  const [numberOfItems, setNumberOfItems] = useState(1);

  return (
    
      <Container>
        <Picture />
        <Info>
          <Text caption>
            No m :{" "}
            <ColorText caption upper>
              {item.size}
            </ColorText>
          </Text>
          <Text caption>
            Specialité :{" "}
            <ColorText caption upper>
              {item.size}
            </ColorText>
          </Text>
          <Title mbt>Gynocologue{"\n"}Bab Khadra</Title>
          <ColorText title3>{`$${item.price}`}</ColorText>
        </Info>
        
      </Container>
    
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.m2,
    marginTop: space.m2,
  })}
`;

const Picture = styled.View`
  width: ${LIST_CARD}px;
  height: ${LIST_CARD}px;

  ${({ theme: { colors, radii } }) => ({
    background: colors.lightCyan,
    borderRadius: radii.s2,
  })}
`;

const Info = styled.View`
  flex: 1;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.m2,
  })}
`;

const Title = styled(Text)`
  ${({ theme: { getFont, colors } }) => ({
    fontFamily: getFont(1),
    color: colors.text,
  })}
`;

const ColorText = styled(Text)`
  ${({ theme: { colors } }) => ({
    color: colors.primary,
  })}
`;

const Circle = styled.View`
  height: 26px;
  width: 26px;
  border-radius: 13px;
  align-items: center;
  justify-content: center;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.secondary,
  })}
`;

export default ListItem;
