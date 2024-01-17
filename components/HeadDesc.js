import { View, Text } from "react-native";
import React from "react";

const HeadDesc = ({ data, ...props }) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text
        style={{
          textAlign: "center",
          ...props,
        }}
      >
        {data}
      </Text>
    </View>
  );
};

export default HeadDesc;
