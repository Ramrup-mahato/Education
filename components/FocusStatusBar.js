import { StatusBar } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/core";

const FocusStatusBar = ({ background }) => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar animated={true} backgroundColor={background} />
  ) : null;
};

export default FocusStatusBar;
