import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import ContextStore from "../context/AddToCart";

const Cart = () => {
  const navigation = useNavigation();
  const { setAddToCart, addToCart } = useContext(ContextStore);

  const discountedPrice = (originalPrice, discountPercentage) => {
    return originalPrice - (originalPrice * discountPercentage) / 100;
  };

  const totalPrice = () => {
    let tot = addToCart.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
    return tot;
  };

  const handleDec = (id) => {
    for (let ele of addToCart) {
      if (ele.id == id) {
        if (ele.count > 1) {
          const updatedCart = addToCart.map((p) =>
            p.id === id ? { ...p, count: p.count - 1 } : p
          );
          setAddToCart(updatedCart);
        } else {
          let Fil = addToCart.filter((item) => item.id !== id);
          setAddToCart(Fil);
        }
      }
    }
  };
  const handleInc = (id) => {
    for (let ele of addToCart) {
      if (ele.id == id) {
        const updatedCart = addToCart.map((p) =>
          p.id === id ? { ...p, count: p.count + 1 } : p
        );
        setAddToCart(updatedCart);
      }
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            // color: "#FF5534",
            textAlign: "center",
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          Congratulation! ₹
          {totalPrice() -
            addToCart
              .reduce(
                (total, item) =>
                  total +
                  discountedPrice(
                    item.price * item.count,
                    item.discountPercentage
                  ),
                0
              )
              .toFixed(0)}{" "}
          saved so far!
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          marginTop: 20,
          padding: 10,
          width: "100%",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            textAlign: "center",
            padding: 10,
          }}
        >
          Service Added
        </Text>
        {addToCart.map((ele, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              borderTopWidth: 1,
              borderStyle: "dashed",
              borderColor: "#00000050",
              padding: 10,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "40%",
              }}
            >
              <Text
                style={{
                  fontWeight: "700",
                }}
              >
                {ele.brand}{" "}
              </Text>
            </View>
            <View
              style={{
                width: "25%",
                flexDirection: "row",
                backgroundColor: "#F7D6D3",
                borderWidth: 1,
                borderColor: "#FF5534",
                borderRadius: 5,
                gap: 10,
                alignItems: "center",
                justifyContent:'space-around'
              }}
            >
              <TouchableOpacity style={{padding:5}} onPress={() => handleDec(ele.id)}>
                <Text
                  style={{
                    color: "#FF5534",
                    fontSize: 20,
                    fontWeight: "900",
                  }}
                >
                  -
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: "#FF5534",
                }}
              >
                {ele.count}
              </Text>
              <TouchableOpacity style={{
                padding:5
              }} onPress={() => handleInc(ele.id)}>
                <Text
                  style={{
                    color: "#FF5534",
                    fontSize: 20,
                    fontWeight: "900",
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: "20%",
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                }}
              >
                ₹ {ele.price * ele.count}{" "}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Cart;
