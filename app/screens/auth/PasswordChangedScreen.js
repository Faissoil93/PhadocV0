import { Entypo } from "@expo/vector-icons";
import styled from "styled-components";

import { Button, Container, Icon, IconFooter } from "../../components";
import { colors, images } from "../../config";
import { Text } from "../../styles";

const PasswordChangedScreen = ({ navigation }) => {
  return (
    <>
      <Container image={images.backbleu} ltBorder rtBorder>
        <Icon
          IconComponent={Entypo}
          iconName="emoji-happy"
          backgroundColor={colors.danger2}
          color={colors.primary}
          iconRatio={1}
          size={100}
        />
        <TextBox>
          <Text title2 center>
          Le mot de passe a été envoyé. Veuillez vérifier votre e-mail.
          </Text>
          <Text body center mtp>
          fermer cette fenêtre et se connecter à nouveau
          </Text>
        </TextBox>
        <Button
          space
          primary
          paddingHorizontal={60}
          label="Retour à la page de connexion"
          onPress={() => navigation.navigate("Login")}
        />
      </Container>
      <IconFooter onPress={() => navigation.navigate("Welcome")} />
    </>
  );
};

const TextBox = styled.View`
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.s2,
    marginTop: space.l1,
    marginBottom: space.m2,
  })}
`;

export default PasswordChangedScreen;
