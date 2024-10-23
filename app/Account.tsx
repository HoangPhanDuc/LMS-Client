import React from "react";
import { Colors } from "@/constants/Colors";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Account</Text>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/5556/5556499.png",
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.menuItem}>
        <Text style={styles.menuText}>Favourite</Text>
        <AntDesign name="right" size={24} color="white" />
      </View>

      <View style={styles.menuItem}>
        <Text style={styles.menuText}>Edit Account</Text>
        <AntDesign name="right" size={24} color="white" />
      </View>

      <View style={styles.menuItem}>
        <Text style={styles.menuText}>Settings and Privacy</Text>
        <AntDesign name="right" size={24} color="white" />
      </View>

      <View style={styles.menuItem}>
        <Text style={styles.menuText}>Help</Text>
        <AntDesign name="right" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerText: {
    color: Colors.dark.text,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  menuText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});

export default Account;
