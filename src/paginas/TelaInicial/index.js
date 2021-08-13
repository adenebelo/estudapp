import React from "react";
import { View, Image } from "react-native";
import styles from "./style";
//import icone-livro from "../../assets/icone-livro";

export default function TelaInicial({ navigation }) {
  return (
    <View>
      <Image source={require("../../assets/icone-livro.png")} />
    </View>
  );
}
