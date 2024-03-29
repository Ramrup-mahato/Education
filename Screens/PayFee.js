import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FocusStatusBar from "../components/FocusStatusBar";
import BottomMenu from "../components/BottomMenu";
import Cart from "../components/Cart";

const PayFee = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f1f1f1" }}>
      <FocusStatusBar background={"#000"} />
      <BottomMenu pageName={"PayFee"} />

      <Cart />
    </SafeAreaView>
  );
};

export default PayFee;
