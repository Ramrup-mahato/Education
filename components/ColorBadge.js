import React from "react";
import { View, Text } from "react-native";

const ColorBadge = ({ Data }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        width: 100,
        height: 100,
        padding: 10,
        borderRadius: 10,
        elevation: 5,
      }}
    >
      <View
        style={{
          backgroundColor: Data.bgColor,
          width: 40,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 5,
          borderRadius: 7,
        }}
      >
        <Data.Icon name={Data.name} size={24} color={Data.color} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 6,
          paddingVertical: 13,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "600", color: "#575656" }}>
          {Data.title}
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: "#575656",
          }}
        >
          {Data.updates}
        </Text>
      </View>
    </View>
  );
};

export default ColorBadge;
