import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BottomMenu = ({ pageName }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
        zIndex:1,
        elevation:5,
      
      }}
    >
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Ionicons
          name="home-sharp"
          size={24}
          color={
            pageName === "Dashboard"
              ? style.SelectMenu.color
              : style.TextColor.color
          }
        />
        <Text
          style={pageName === "Dashboard" ? style.SelectMenu : style.TextColor}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
        onPress={() => navigation.navigate("Assignment")}
      >
        <MaterialIcons
          name="assignment"
          size={24}
          color={
            pageName === "Assignment"
              ? style.SelectMenu.color
              : style.TextColor.color
          }
        />
        <Text
          style={pageName === "Assignment" ? style.SelectMenu : style.TextColor}
        >
          Assignment
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
        onPress={() => navigation.navigate("HomeWork")}
      >
        <Entypo
          name="open-book"
          size={24}
          color={
            pageName === "HomeWork"
              ? style.SelectMenu.color
              : style.TextColor.color
          }
        />
        <Text
          style={pageName === "HomeWork" ? style.SelectMenu : style.TextColor}
        >
          HomeWork
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
        onPress={() => navigation.navigate("PayFee")}
      >
        <FontAwesome
          name="money"
          size={24}
          color={
            pageName === "PayFee"
              ? style.SelectMenu.color
              : style.TextColor.color
          }
        />
        <Text
          style={pageName === "PayFee" ? style.SelectMenu : style.TextColor}
        >
          Pay Fee
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  TextColor: {
    color: "#575656",
  },
  SelectMenu: {
    color: "#2de874",
  },
});

export default BottomMenu;
