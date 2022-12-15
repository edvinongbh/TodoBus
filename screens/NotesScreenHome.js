import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function NotesScreenHome() {
  const navigation = useNavigation();

  const posts = [
    { title: "Add new notes", content: "New notes are everything", id: "1" },
  ];

  function renderItem({ item }) {
    return (
      <View style={styles.noteCard}>
        <Text style={styles.noteCardTitle}>{item.title}</Text>
        <TouchableOpacity onPress={() => {}}>
          <FontAwesome name={"remove"} size={24} color={"green"} />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.containerNote}>
      <Text style={styles.title}>notes</Text>

      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(post) => post.id.toString()}
      />

      <View style={{ flex: 1 }} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Add")}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  noteCard: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  noteCardTitle: {
    fontSize: 13,
    fontWeight: "500",
  },

  containerNote: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 100,
    padding: 25,
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 15,
    width: "100%",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 17,
    padding: 20,
    color: "white",
  },
});
