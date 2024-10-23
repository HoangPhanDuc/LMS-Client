import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Home");

  const handlePress = (tab: string) => {
    setActiveTab(tab);
    navigation.navigate(tab);
  };

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuItem} onPress={() => handlePress("Home")}>
        <Ionicons
          name="home-outline"
          size={28}
          color={activeTab === "index" ? "#007BFF" : "#B8B8D2"}
        />
        <Text style={activeTab === "Home" ? styles.activeMenuText : styles.menuText}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => handlePress("Course")}>
        <FontAwesome5
          name="book"
          size={28}
          color={activeTab === "Course" ? "#007BFF" : "#B8B8D2"}
        />
        <Text style={activeTab === "Course" ? styles.activeMenuText : styles.menuText}>
          Course
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => handlePress("Search")}>
        <Ionicons
          name="search"
          size={36}
          color={activeTab === "Search" ? "#007BFF" : "#B8B8D2"}
        />
        <Text style={activeTab === "Search" ? styles.activeMenuText : styles.menuText}>
          Search
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => handlePress("Notifications")}>
        <Ionicons
          name="notifications"
          size={28}
          color={activeTab === "Notifications" ? "#007BFF" : "#B8B8D2"}
        />
        <Text style={activeTab === "Notifications" ? styles.activeMenuText : styles.menuText}>
          Notifications
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => handlePress("Account")}>
        <Ionicons
          name="person-outline"
          size={28}
          color={activeTab === "Account" ? "#007BFF" : "#B8B8D2"}
        />
        <Text style={activeTab === "Account" ? styles.activeMenuText : styles.menuText}>
          Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#1F1F39",
    borderTopWidth: 1,
    borderTopColor: "#444",
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  menuText: {
    marginTop: 5,
    fontSize: 12,
    color: "#B8B8D2",
    textAlign: 'center',
  },
  activeMenuText: {
    marginTop: 5,
    fontSize: 12,
    color: "#007BFF",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#007BFF",
    textAlign: 'center',
  },
});

export default Menu;
