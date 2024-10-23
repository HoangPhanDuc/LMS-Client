import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Notifications</Text>

      <View style={styles.notiBox}>
        <View style={styles.notiIcon}>
          <MaterialIcons name="circle-notifications" size={30} color="orange" />
        </View>
        <View style={styles.notiInformationBox}>
          <Text style={styles.colorText}>Successful purchase!</Text>
          <View style={styles.timeContainer}>
            <AntDesign
              style={styles.icon}
              name="clockcircle"
              size={13}
              color="#B8B8D2"
            />
            <Text style={styles.timeText}> Just now</Text>
          </View>
        </View>
      </View>

      <View style={styles.notiBox}>
        <View style={styles.notiIcon}>
          <MaterialIcons name="circle-notifications" size={30} color="#4A90E2" />
        </View>
        <View style={styles.notiInformationBox}>
          <Text style={styles.colorText}>
            Congratulations on completing the course!
          </Text>
          <View style={styles.timeContainer}>
            <AntDesign
              style={styles.icon}
              name="clockcircle"
              size={13}
              color="#B8B8D2"
            />
            <Text style={styles.timeText}> Just now</Text>
          </View>
        </View>
      </View>

      <View style={styles.notiBox}>
        <View style={styles.notiIcon}>
          <MaterialIcons name="circle-notifications" size={30} color="#4A90E2" />
        </View>
        <View style={styles.notiInformationBox}>
          <Text style={styles.colorText}>
            Your course has been updated, you can start now!
          </Text>
          <View style={styles.timeContainer}>
            <AntDesign
              style={styles.icon}
              name="clockcircle"
              size={13}
              color="#B8B8D2"
            />
            <Text style={styles.timeText}> Just now</Text>
          </View>
        </View>
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
  notiBox: {
    flexDirection: "row",
    backgroundColor: "#2E2E50",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.dark.tint,
    marginBottom: 20,
    padding: 15,
    shadowColor: "#B8B8D2",
    shadowOpacity: 0.5,
    overflow: 'hidden',
    alignItems: 'center',
  },
  notiIcon: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    paddingTop: 3.5,
  },
  notiInformationBox: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 8,
    flexShrink: 1,
  },
  colorText: {
    color: "white",
    fontSize: 14,
    marginBottom: 5,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    color: "#B8B8D2",
    fontSize: 12,
    marginLeft: 4,
  },
});

export default Notifications;
