import { View, Text } from "react-native";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import ContextStore from "../context/AddToCart";
import { useNavigation } from "@react-navigation/native";

const CartBottomMenu = () => {
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

  return (
    <>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "#fff",
          elevation: 3,
        }}
      >
        {addToCart.length > 0 && (
          <View
            style={{
              backgroundColor: "#F7D6D3",
              padding: 3,
            }}
          >
            <Text
              style={{
                color: "#FF5534",
                textAlign: "center",
                fontSize: 13,
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
        )}
        <View
          style={{
            // height: 50,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                gap: 5,
              }}
            >
              <Text style={{ fontWeight: "600" }}>
                ₹ {totalPrice().toFixed(2)}
              </Text>
              <Text
                style={{
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid",
                }}
              >
                ₹{" "}
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
                    .toFixed(0)}
              </Text>
            </View>

            <Text
              style={{
                fontSize: 10,
              }}
            >
              {addToCart.length} items
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#FF5534",
                width: 200,
                padding: 15,
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate("PayFee")}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: "800",
                }}
              >
                {" "}
                View Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default CartBottomMenu;
