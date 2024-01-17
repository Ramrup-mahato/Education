import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FocusStatusBar from "../components/FocusStatusBar";
import homeImage from "../assets/homeImage.png";
import HeadDesc from "../components/HeadDesc";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar background={"black"} />
      <View style={{ flex: 1, backgroundColor: "#f1f1f1", height: "auto" }}>
        <View
          style={{
            height: 450,
            backgroundColor: "#f7f7f7",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Image
            source={homeImage}
            resizeMode="contain"
            style={{ width: 400, height: 400, marginBottom: -35 }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            // elevation:1
          }}
        >
          <HeadDesc
            data={"Educating for complexity"}
            fontSize={20}
            fontWeight={"bold"}
          />
          <HeadDesc
            data={
              "Instant Accurate Communication between school management, staff, parents and students with the Student Alert portal and app"
            }
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              width: 250,
              padding: 18,
              marginTop: 40,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
