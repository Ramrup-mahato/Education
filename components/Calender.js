import { View, Text } from "react-native";
import React, { useState } from "react";
import DatePicker from "react-native-modern-datepicker";

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState("");
  var currentDate = new Date();

  // Extracting components
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  var day = currentDate.getDate();

  // Formatting the date
  var formattedDate =
    year +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    (day < 10 ? "0" + day : day);
  return (
    <View
      style={{
      
        marginHorizontal: 20,
        borderRadius: 20,
        backgroundColor: "#fff",
        elevation: 5,
        padding: 10,
      }}
    >
      <DatePicker
        onSelectedChange={(date) => setSelectedDate(date)}
        options={{
          mainColor: "#a84ac7",
          textHeaderColor: "#000",
          textHeaderFontSize: 20,

          selectedTextColor: "#fff",
        }}
        mode="calendar"
        current={formattedDate}
        selected={formattedDate}
        // style={{ borderRadius: 20,height:350 }}
      />
    </View>
  );
};

export default Calender;
