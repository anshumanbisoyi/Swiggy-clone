import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";

export default function HomeScreen() {
  return (
    <ScrollView style={{marginTop: 50}}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
