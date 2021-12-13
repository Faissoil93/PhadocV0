import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

import { Button, Icon } from "../../components";
import { colors, constants, images } from "../../config";
import { Image, Text } from "../../styles";

const { CELL_NUM, SIDEBAR_HEIGHT } = constants;

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container>
      <TopContainer>
        <Background
          start={[0.8, 0.2]}
          end={[0.1, 0.9]}
          locations={[0.1, 0.3, 0.7, 0.9]}
          colors={[colors.white, colors.white, colors.white, colors.secondary]}
        >
          <Image small resizeMode="contain" source={images.logo} />
        </Background>
      </TopContainer>
      <Medium />
      <Caption>
        <TextBox>
          <Title title1>{" Merci et Commençons"}</Title>
          <Text body center mtp>
          Connectez-vous à votre compte ci-dessous ou inscrivez-vous pour surveiller votre santé.
          </Text>
        </TextBox>
        <Button
          primary
          space
          paddingHorizontal={80}
          label="Connexion"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          paddingHorizontal={70}
          space
          label="S'inscrire"
          onPress={() => navigation.navigate("Register")}
        />
        <Button
          bgColor="transparent"
          textStyle={{ color: colors.primary, textTransform: "capitalize" }}
          label="Mots de passe oublié?"
         
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        />
      </Caption>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}; ;
`;

const TopContainer = styled.View`
  overflow: hidden;

  ${({ theme: { radii } }) => ({
    borderBottomRightRadius: radii.xl,
  })}
`;

const Background = styled(LinearGradient)`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  height: ${SIDEBAR_HEIGHT}px;
`;

const Medium = styled.View`
  height: ${CELL_NUM}px;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.secondary,
  })};
`;

const Caption = styled.View`
  flex: 1;
  align-items: center;
  margin-top: -${CELL_NUM}px;

  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.white,
    paddingBottom: space.m2,
    borderTopLeftRadius: radii.xl,
  })};
`;

const Title = styled(Text)`
  text-transform: capitalize;

  ${({ theme: { colors, space } }) => ({
    color: colors.primary,
    marginTop: space.xl,
  })};
`;

const TextBox = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.xl,
    paddingBottom: space.m2,
  })}
`;

export default WelcomeScreen;
