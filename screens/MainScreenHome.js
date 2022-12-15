import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function MainScreenHome() {
  const navigation = useNavigation();
  const [text] = useState("");

  // refer to PCMOB3 slide 179 for button

  return (
    <View style={styles.container}>
      <View style={styles.titleHead}>
        <Image
          style={styles.LogoPic}
          source={{
            uri: "https://cdn.pixabay.com/photo/2017/12/28/12/31/sketch-3045125_960_720.jpg",
          }}
        />

        <Text style={styles.label}>Welcome</Text>

        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={[styles.todoButton]}
          >
            <Text style={styles.buttonText}>Todo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Homebus")}
            style={[styles.busButton]}
          >
            <Text style={styles.buttonText}>Bus</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ marginTop: 40, color: "grey" }}>
          This is what you typed:
        </Text>
        <Text style={{ color: "#333", marginTop: 10 }}>{text}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "silver",
  },

  titleHead: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  label: {
    fontWeight: "bold",
    fontSize: 30,
  },
  textInput: {
    margin: 20,
    borderWidth: 1,
    width: "80%",
    padding: 10,
    borderColor: "#ccc",
  },
  buttons: {
    flexDirection: "row",
  },

  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  todoButton: {
    padding: 15,
    margin: 10,
    backgroundColor: "orange",
    borderRadius: 15,
    width: "30%",
  },
  busButton: {
    padding: 15,
    margin: 10,
    backgroundColor: "red",
    borderRadius: 15,
    width: "30%",
  },

  LogoPic: {
    height: 200,
    width: 200,
    borderRadius: 60,
    alignSelf: "center",
    marginTop: 10,
    borderColor: "red",
    borderWidth: 2,
  },
});
