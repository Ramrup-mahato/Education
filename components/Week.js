import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
// import * as Progress from "react-native-progress";
import { AntDesign } from "@expo/vector-icons";

const Week = () => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 60],
      },
    ],
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding:10,
        }}
      >
        <Text style={{
            fontSize:17,
            fontWeight:'600'
        }}>HomeWork</Text>
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            gap:2,
        }}>
          <Text style={{color:'#575656'}}>Week</Text>
          <AntDesign name="down" size={15} color="#575656" />
        </View>
      </View>
      <BarChart
        data={data}
        width={350}
        height={170}
        yAxisLabel="Value"
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0,
          color: (opacity = 1) => `#d10d90`,
          style: {
            borderRadius: 16,
          },
        }}
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 20,
    elevation:5
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    // transform: [{ scaleY: 1.2 }], // Adjust the scaleY to create a 3D-like effect
  },
});

export default Week;
