import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import baba from "../assets/shavi.jpeg";
import { AntDesign, Feather, Ionicons, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Message = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        // justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Image
        source={baba}
        style={{ borderRadius: 50, width: 30, height: 30 }}
        resizeMode="contain"
      />
      <View>
        <Text style={{ color: "#fff", fontSize: 13, fontWeight: "900" }}>
          {item.name}
        </Text>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={{ color: "#fff", fontSize: 10 }}>{item.message}</Text>
        </View>
      </View>
    </View>
  );
};

const Astrologer = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState([
    { id: 1, name: "baba", message: "hello" },
  ]);
  const [text, setText] = useState("");
  const handleMessage = (value) => {
    setText(value);
  };

  const handleSendMessage = () => {
    let newData = {
      id: message.length + 1,
      name: "Ramrup",
      message: text,
    };
    setMessage([...message, newData]);
    setText("");
  };
  return (
    <View style={{ width: "100%", position: "relative", height: "100%" }}>
      {[1,2,].map((item, i) => (
        <Image
          key={i}
          source={baba}
          resizeMode="cover"
          style={{
            flex: 1,
            width: null,
            height: null,
          }}
        />
      ))}

      <View
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#00000048",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={baba}
              style={{ borderRadius: 50, width: 48, height: 48 }}
              resizeMode="contain"
            />
            <View>
              <Text style={{ color: "#fff", fontSize: 17, fontWeight: "900" }}>
                Astrologer
              </Text>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <AntDesign name="eyeo" size={13} color="#fff" />
                <Text style={{ color: "#fff", fontSize: 10 }}>2,345</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#7127FF",
              width: 90,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
            }}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Text style={{ color: "#fff" }}>Leave</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
            padding: 20,
            width: "100%",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              flex: 0.7,
              justifyContent: "flex-start",
              width: "100%",
              gap: 10,
            }}
          >
            {message.length > 3
              ? message
                  .slice(message.length - 3, message.length)
                  .map((item, i) => <Message key={i} item={item} />)
              : message.map((item, i) => <Message key={i} item={item} />)}
            <View style={{ width: "100%", height: 35, flexDirection: "row" }}>
              <TextInput
                placeholder="write here..."
                placeholderTextColor={"#bebbbb"}
                value={text}
                style={{
                  flex: 1,
                  borderColor: "#bebbbb",
                  borderWidth: 1,
                  paddingLeft: 10,
                  borderRadius: 50,
                  color: "#bebbbb",
                }}
                onChangeText={handleMessage}
              />
              <TouchableOpacity onPress={handleSendMessage}>
                <Feather name="send" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 0.3,
              justifyContent: "flex-end",
              alignItems: "flex-end",
              gap: 10,
            }}
          >
            <AntDesign name="hearto" size={24} color="#fff" />
            <AntDesign name="gift" size={24} color="#fff" />
            <View
              style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
            >
              <Ionicons name="call-outline" size={24} color="#fff" />
              <Text style={{ color: "#fff", fontSize: 8 }}>100Rs</Text>
            </View>
            <View style={{ position: "relative" }}>
              <AntDesign name="inbox" size={24} color="#fff" />
              <Text
                style={{
                  position: "absolute",
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  top: 0,
                  right: 0,
                  fontSize: 7,
                  width: 10,
                  height: 10,
                  textAlign: "center",
                }}
              >
                2
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Astrologer;
