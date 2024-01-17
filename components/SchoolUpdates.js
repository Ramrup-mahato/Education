import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Badge } from "react-native-paper";
import ColorBadge from "./ColorBadge";
import { data } from "../container/Data";

const SchoolUpdates = () => {
  return (
    <View style={styles.container}>
      {data.SchoolUpdate.map((item, i) => (
        <ColorBadge Data={item} key={i} />
      ))}

      {/* <ColorBadge /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    gap:10,
    marginVertical:10
  },
});

export default SchoolUpdates;
