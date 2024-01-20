import { View, Text, SafeAreaView, ScrollView, Dimensions } from "react-native";
import React from "react";
import FocusStatusBar from "../components/FocusStatusBar";
import BottomMenu from "../components/BottomMenu";
import Astrologer from "../components/Astrologer";

const { width } = Dimensions.get("window");
const YOUR_INSET_LEFT = 10; // Set your left inset value
const YOUR_INSET_RIGHT = 10; // Set your right inset value

const HomeWork = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f1f1f1" }}>
      <FocusStatusBar background={"#000"} />
      {/* <BottomMenu pageName={"HomeWork"} /> */}
    
        <Astrologer />

      <Text>HomeWork</Text>
    </SafeAreaView>
  );
};

export default HomeWork;
