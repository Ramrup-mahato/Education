import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Attendance = ({ bgBlack, value, color, title, buttonText ,page}) => {
    const navigation=useNavigation()
  return (
    <View
      style={{
        width: 185,
        height: 210,
        marginTop:15,
        backgroundColor: bgBlack == true ? "#000" : "#fff",
        borderRadius: 20,
        justifyContent: "space-evenly",
        alignItems: "center",
        elevation:5,
      }}
    >
      <Text
        style={{
          color: bgBlack == true ? "#fff" : "#000",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        {title}
      </Text>
      <CircularProgress
        value={value}
        inActiveStrokeColor={"#ffffff"}
        // progressValueColor={'#ecf0f1'}
        radius={45}
        activeStrokeColor={color}
        inActiveStrokeOpacity={1}
        progressValueColor={bgBlack == true ? "#fff" : "#000"}
        progressValueStyle={{ fontWeight: "300", color: "yellow" }}
        valueSuffix={"%"}
      />

      <TouchableOpacity
        style={{
          backgroundColor: bgBlack == true ? "#fff" : "#000",
          width: 110,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap:5,
          borderRadius: 10,
        }}
        onPress={()=>{navigation.navigate(page)}}
      >
        <Text
          style={{
            color: bgBlack == true ? "#000" : "#fff",
            fontWeight: 500,
            fontSize: 15,
          }}
        >
          {buttonText}
        </Text>
        {bgBlack == true && (
          <AntDesign name="arrowright" size={24} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Attendance;
