import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import FocusStatusBar from "../components/FocusStatusBar";
import BottomMenu from "../components/BottomMenu";
import { NavBar } from "../components/NavBar";
import Calender from "../components/Calender";
import AttendanceMain from "../components/AttendanceMain";
import { data } from "../container/Data";

const Assignment = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#f1f1f1", paddingBottom: 85 }}
    >
      <FocusStatusBar background={"#000"} />
      <BottomMenu pageName={"Assignment"} />
      <NavBar name={"Assignment"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Calender />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            paddingHorizontal: 20,
            marginTop:10
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Assignments({data.Assignment.length})
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Text style={{ color: "#575656" }}>See all</Text>
          </TouchableOpacity>
        </View>
        <AttendanceMain data={data.Assignment} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Assignment;
