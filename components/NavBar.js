import { View, Text, Image } from "react-native";
import React from "react";
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";
import ramrup from "../assets/ramrup.png";
import { useNavigation } from "@react-navigation/native";

export const NavBar = ({ home, name }) => {

  const navigation=useNavigation()
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        flexDirection: "row",
        paddingVertical: 10,
      }}
    >
      {home === true ? (
        <Entypo name="menu" size={24} color="black" />
      ) : (
        <AntDesign name="arrowleft" size={24} color="black" onPress={()=>navigation.goBack()} />
      )}

      <Text
        style={{
          color: "#000",
          fontWeight: "500",
        }}
      >
        {name}
      </Text>
      <View
        style={{
          width: 48,
          height: 48,
          position: "relative",
        }}
      >
        {home == true && (
          <>
            <Image
              source={ramrup}
              resizeMode="contain"
              style={{
                width: "100%",
                height: "100%",
              }}
            />

            <MaterialIcons
              name="verified"
              size={15}
              color="green"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
              }}
            />
          </>
        )}
      </View>
    </View>
  );
};
