import { Keyboard, Linking } from "react-native";
import styled from "styled-components";
import * as Yup from "yup";

import { Container, LinkFooter } from "../../components";
import { Form, FormField, SubmitButton } from "../../components/forms";
import { images } from "../../config";
import { Text } from "../../styles";

let validationSchema = Yup.object().shape({
  email: Yup.string().required().email("Invalid Email").label("Email"),
});

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <>
      <Container image={images.md} ltBorder rtBorder>
      
        <TextBox>
          <Text title2 mbt>
          Mot de passe oublié ?
          </Text>
          <Text body center mtp>
          Saisissez l'adresse électronique associée à votre compte
          </Text>
        </TextBox>
        <Form
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={() => {
            navigation.navigate("PasswordChanged");
            Keyboard.dismiss();
          }}
        >
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            icon="email"
            keyboardAppearance="default"
            keyboardType="email-address"
            name="email"
            numberOfLines={1}
            placeholder="Entrer Votre email"
            textContentType="emailAddress"
          />
          <ButtonWrapper>
            <SubmitButton label="Réinitialiser le mot de passe" />
          </ButtonWrapper>
        </Form>
      </Container>
      <LinkFooter
        title="Ça ne marche pas ?"
        action="Essayez un autre moyen"
        onPress={() => Linking.openURL('"mailto:help@support.com"')}
      />
    </>
  );
};

const TextBox = styled.View`
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.s2,
    marginBottom: space.l2,
  })}
`;

const ButtonWrapper = styled.View`
  ${({ theme: { space } }) => ({
    marginTop: space.m2,
  })}
`;

export default ForgotPasswordScreen;
