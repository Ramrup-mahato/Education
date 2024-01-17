import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FocusStatusBar from "../components/FocusStatusBar";
import BottomMenu from "../components/BottomMenu";
import { NavBar } from "../components/NavBar";
import HeadDesc from "../components/HeadDesc";
import Attendance from "../components/Attendance";
import Week from "../components/Week";
import SchoolUpdates from "../components/SchoolUpdates";

const Dashboard = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f1f1f1", paddingBottom:95}}>
      <FocusStatusBar background={"#000"} />
      <BottomMenu pageName={"Dashboard"} />
      <NavBar home={true} name={'Home'} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <HeadDesc
          data="Hello Ramrup 👋"
          textAlign="left"
          fontSize={25}
          fontWeight={900}
        />
        <View
          style={{
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              gap: 20,
            }}
          >
            <Attendance
              bgBlack={true}
              value={80}
              color={"#2de874"}
              title={"Attendance"}
              buttonText={"View"}
              page="HomeWork"
            />

            <Attendance
              bgBlack={false}
              value={60}
              color={"#f39c12"}
              title={"Fee"}
              buttonText={"Pay Fee"}
              page="PayFee"
            />
          </View>
          <Week />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
              }}
            >
              School Updates
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Text style={{ color: "#575656" }}>view all</Text>
            </TouchableOpacity>
          </View>
          <SchoolUpdates />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
