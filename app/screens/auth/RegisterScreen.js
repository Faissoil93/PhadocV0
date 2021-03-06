import { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";

import { Container, LinkFooter } from "../../components";
import { Form, FormField, SubmitButton } from "../../components/forms";
import { images } from "../../config";
import { Text } from "../../styles";

let validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email("Invalid Email").label("Email"),
  password: Yup.string()
    .required()
    .min(5)
    .max(50)
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\d/, "Password must have a number")
    .label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required()
    .label("Confirm password"),
});

const RegisterScreen = ({ navigation }) => {
  const [inputs] = useState([]);
  const focusNextField = (nextField) => inputs[nextField].focus();

  return (
    <>
      <Container image={images.md} imgRbr ltBorder>
        <TextBox>
          <Text title2>Créez un compte</Text>
          <Text body center mtp>
          Indiquez nous votre nom, votre adresse électronique et Téléphone mobile, ainsi que votre mot de passe.
          </Text>
        </TextBox>
        <Form
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="name"
            autoCorrect={false}
            blurOnSubmit={false}
            icon="account-circle"
            keyboardAppearance="default"
            keyboardType="default"
            name="name"
            numberOfLines={1}
            onSubmitEditing={() => focusNextField("email")}
            placeholder="Nom"
            returnKeyLabel="next"
            returnKeyType="next"
            textContentType="name"
          />
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            blurOnSubmit={false}
            icon="email"
            keyboardAppearance="default"
            keyboardType="email-address"
            name="email"
            numberOfLines={1}
            onRef={(input) => (inputs["email"] = input)}
            onSubmitEditing={() => focusNextField("password")}
            placeholder="Email"
            returnKeyLabel="next"
            returnKeyType="next"
            textContentType="emailAddress"
          />
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            blurOnSubmit={false}
            icon="phone"
            keyboardAppearance="default"
            keyboardType="email-address"
            name="phone"
            numberOfLines={1}
            onRef={(input) => (inputs["email"] = input)}
            onSubmitEditing={() => focusNextField("password")}
            placeholder="Telephone"
            returnKeyLabel="next"
            returnKeyType="next"
            textContentType="emailAddress"
          />

          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            blurOnSubmit={false}
            icon="lock"
            keyboardAppearance="default"
            keyboardType="default"
            maxLength={50}
            name="password"
            numberOfLines={1}
            onRef={(input) => (inputs["password"] = input)}
            onSubmitEditing={() => focusNextField("confirmPassword")}
            placeholder="Mot de passe"
            returnKeyLabel="next"
            returnKeyType="next"
            secureTextEntry
            textContentType="password"
          />
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            blurOnSubmit={false}
            icon="lock"
            keyboardAppearance="default"
            keyboardType="default"
            maxLength={50}
            name="confirmPassword"
            numberOfLines={1}
            onRef={(input) => (inputs["confirmPassword"] = input)}
            placeholder="Confirmez votre mot de passe"
            returnKeyLabel="go"
            returnKeyType="go"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton label="S'inscrire" />
        </Form>
      </Container>
      <LinkFooter
        title="Vous avez déjà un compte ?"
        action="Se Connecter"
        onPress={() => navigation.navigate("Login")}
      />
    </>
  );
};

const TextBox = styled.View`
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.s2,
    marginBottom: space.m2,
  })}
`;

export default RegisterScreen;
