import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const FoodItem = ({ item }) => {
  const data = [item];
  const [selected,setSelected]= useState([]);
  return (
    <View>
      {data.map((item, i) => (
        <>
          <Pressable style={{margin:10, flexDirection:"row", alignItems:"center", justifyContent: "space-between"}} key={i}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>{item.name}</Text>
            <AntDesign name="down" size={24} color="black" />
          </Pressable>
        </>
      ))}
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({});
