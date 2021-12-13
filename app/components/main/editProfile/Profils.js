import styled from "styled-components";

import * as options from "../../../data/options";
import { Text } from "../../../styles";
import PickerGroup from "./PickerGroup";
import RoundPickerGroup from "./RoundPickerGroup";
import { Button } from "../..";
import { colors } from "../../../config";


const { genders, sizes, adress, brands } = options;

const Profils = () => {
  return (
    <Box>
      <Text caption opacity={0.7}>
        Nom et Prenom :
      </Text>
      <PickerGroup data={genders} radio initialState={[""]} />
      <Text caption opacity={0.7}>
        Genre :
      </Text>
      <RoundPickerGroup data={sizes} />
      <Text caption opacity={0.7}>
        Adresse :
      </Text>
      <PickerGroup data={adress} initialState={[""]} />
      <Text caption opacity={0.7}>
      Qualification professionnelle
      </Text>
      <PickerGroup data={brands} initialState={[""]} />
      <Text caption opacity={0.7}>
      La Liste de Vos patients
      </Text>
      <Button
          paddingHorizontal={90}
          space
          label="Liste des Patients"
          onPress={() => navigation.navigate("Register")}
        />
        
    </Box>
  );
};

const Box = styled.ScrollView`
  ${({ theme: { space } }) => ({
    paddingLeft: space.l1,
  })}
`;

export default Profils;
