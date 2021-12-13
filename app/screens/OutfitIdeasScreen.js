import { StatusBar } from "expo-status-bar";
import { useState,useRef } from "react";

import styled from "styled-components";

import {
  
  CategoryBar,
  HeaderBar,
  ListItem,
  
} from "../components/main";

import { View } from "../styles";

import { constants } from "../config";
import cartItems from "../data/cartItems";




const { CART_BAR_HEIGHT } = constants;

const OutfitIdeasScreen = ({ navigation }) => {
  
  const [items, setItems] = useState(cartItems);
  const scrollView = useRef();

  const handleDelete = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  return (
    <View container>
      <HeaderBar
        title="MEDECIN"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "home", onPress: () => navigation.navigate("Cart") }}
      />

      <CategoryBar />
      <Box>
        
        <Listing
            ref={scrollView}
            contentContainerStyle={{
              paddingTop: CART_BAR_HEIGHT,
              paddingBottom: 20,
            }}
            onContentSizeChange={() =>
              scrollView.current.scrollToEnd({ animated: true, duration: 500 })
            }
            showsVerticalScrollIndicator={false}
          >
            {items.map((item) => (
              <ListItem
                key={`list${item.id}`}
                item={item}
                onRemove={handleDelete}
              />
            ))}
          </Listing>
      </Box>
      <StatusBar style="dark" />
    </View>
  );
};

const Box = styled.View`
  flex: 1;
`;

const Listing = styled.ScrollView``;

export default OutfitIdeasScreen;
