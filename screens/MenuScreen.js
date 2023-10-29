import { StyleSheet, Text, View, ScrollView, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FoodItem from "../components/FoodItem";
import { SimpleLineIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";

const MenuScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  console.log(route.params);
  const [menu, setMenu] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const fetchMenu = () => {
      setMenu(route.params.menu);
    };
    fetchMenu();
  }, []);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <ScrollView style={{ marginTop: 55 }}>
        <View
          style={{
            height: 300,
            backgroundColor: "#B0C4DE",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="search1" size={20} color="black" />
              <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 5 }}>
                Search
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "white",
              height: 210,
              marginHorizontal: 20,
              marginVertical: 5,
              padding: 10,
              borderRadius: 25,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          >
            <View
              style={{
                marginTop: 7,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 19, fontWeight: "bold", marginLeft: 2 }}>
                {route.params.name}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  style={{ marginHorizontal: 10 }}
                  name="ios-share-outline"
                  size={24}
                  color="black"
                />
                <Entypo
                  style={{ marginHorizontal: 10 }}
                  name="heart-outlined"
                  size={24}
                  color="black"
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <MaterialIcons name="stars" size={20} color="green" />
              <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
                {" "}
                {route.params.rating}
              </Text>
              <Text style={{ marginLeft: 3 }}>•</Text>
              <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
                {route.params.time}mins
              </Text>
            </View>

            <View>
              <Text style={{ fontSize: 17, color: "grey", marginTop: 8 }}>
                {route.params.cuisines}
              </Text>
              <Text
                style={{
                  borderColor: "gray",
                  borderWidth: 0.3,
                  height: 1,
                  marginTop: 12,
                  marginBottom: 10,
                }}
              />
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flexDirection: "row",
                    transform: [{ rotate: "90deg" }],
                    marginRight: 10,
                    marginLeft: 0,
                    marginTop: 6,
                  }}
                >
                  <Text
                    style={{ fontSize: 20, fontWeight: "bold", color: "grey" }}
                  >
                    •--•
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <Text>Outlet</Text>
                    <Text
                      style={{ marginLeft: 15, fontSize: 15, color: "grey" }}
                    >
                      {route.params.adress}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <Text>22 mins</Text>
                    <Text
                      style={{ marginLeft: 15, fontSize: 15, color: "grey" }}
                    >
                      Delivery to Home
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            fontWeight: "500",
            marginTop: 10,
          }}
        >
          MENU
        </Text>
        <Text
          style={{
            borderColor: "gray",
            borderWidth: 0.3,
            height: 1,
            marginTop: 10,
          }}
        />
        {route.params.menu.map((item, index) => (
          <FoodItem item={item} key={index} />
        ))}
      </ScrollView>
      <Pressable
        onPress={toggleModal}
        style={{
          width: 60,
          height: 60,
          borderRadius: 40,
          justifyContent: "center",
          backgroundColor: "black",
          marginLeft: "auto",
          position: "absolute",
          bottom: 35,
          right: 25,
          alignContent: "center",
        }}
      >
        <SimpleLineIcons
          style={{ textAlign: "center" }}
          name="book-open"
          size={23}
          color="white"
        />
        <Text
          style={{ textAlign: "center", color: "white", fontWeight: "500" }}
        >
          MENU
        </Text>
      </Pressable>

      <Modal isVisible={modalVisible} onBackdropPress={toggleModal}>
        <View
          style={{
            height: 190,
            width: 250,
            backgroundColor: "black",
            position: "absolute",
            bottom: 35,
            right: 10,
            borderRadius: 7,
          }}
        >
          {menu.map((item, i) => (
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              key={i}
            >
              <Text style={{ color: "#D0D0D0", fontWeight: 600, fontSize: 19 }}>
                {item.name}
              </Text>
              <Text style={{ color: "#D0D0D0", fontWeight: 600, fontSize: 19 }}>
                {item.items.length}
              </Text>
            </View>
          ))}
          <View style={{alignItems:"center", justifyContent:"center" }}>
            <Image
              style={{ width: 100, height: 50, resizeMode: "contain", marginTop:15}}
              source={{
                uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza",
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
