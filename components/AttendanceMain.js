import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Assignment = ({ Item }) => (
  <View
    style={{
      width: "100%",
      backgroundColor: "#fff",
      // margin:20,
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 10,
      gap: 10,
    }}
  >
    <View
      style={{
        width: 70,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Item.bgColor,
        borderRadius: 10,
        padding: 10,
      }}
    >
      <Item.Icon name={Item.name} size={40} color={Item.color} />
    </View>
    <View>
      <Text
        style={{
          fontSize: 17,
          fontWeight: "700",
        }}
      >
        {Item.title}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: "#575656",
        }}
      >
        {Item.dec}
      </Text>
      <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
        <FontAwesome name="file-pdf-o" size={15} color={Item.color} />
        <Text style={{ color: Item.color, fontSize: 14, fontWeight: 500 }}>
          Download pdf
        </Text>
      </View>
    </View>
  </View>
);

const AttendanceMain = ({ data }) => {
  return (
    <View
      style={{
        margin: 20,
        gap: 10,
      }}
    >
      {data.map((item, i) => (
        <Assignment Item={item} key={i} />
      ))}
    </View>
  );
};

export default AttendanceMain;
