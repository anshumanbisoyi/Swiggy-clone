import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import hotels from "../data/hotels";
export default function HomeScreen() {
  const data = hotels;
  return (
    <ScrollView style={{ marginTop: 50 }}>
      {/* SearchBar */}
      <View
        style={{
          flexDirection: "row",
          aignItems: "center",
          justifyContent: "space-between",
          borderWidth: 0,
          margin: 10,
          padding: 10,
          backgroundColor: "#C0C0C0",
          borderRadius: "10px",
        }}
      >
        <TextInput
          placeholder="Search, Order, Enjoy, Repeat!"
          style={{ fontSize: 17, color: "black" }}
        />
        <AntDesign name="search1" size={24} color="black" />
      </View>
      {/* image slider */}
      <Carousel />
      {/* Food item types */}
      <FoodTypes />
      {/* Quick food */}
      <QuickFood />
      {/* filter buttons */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: "20",
            justifyContent: "center",
            width: 100,
          }}
        >
          <Text style={{ marginRight: 6 }}>Filter</Text>
          <Ionicons name="filter" size={20} color="black" />
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: "20",
            justifyContent: "center",
          }}
        >
          <Text>Sort By</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: "20",
            justifyContent: "center",
          }}
        >
          <Text>Fast Delivery</Text>
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: "20",
            justifyContent: "center",
          }}
        >
          <Text>Cusine Ratings</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
