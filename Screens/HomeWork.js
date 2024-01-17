import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import FocusStatusBar from "../components/FocusStatusBar";
import BottomMenu from "../components/BottomMenu";

const HomeWork = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f1f1f1" }}>
      <FocusStatusBar background={"#000"} />
      <BottomMenu pageName={"HomeWork"} />
      <Text>HomeWork</Text>
    </SafeAreaView>
  );
};

export default HomeWork;
