import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Colors } from "@/constants/Colors";
import { Circle } from "react-native-progress";

const Home = () => {
  const progress = 40 / 48;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.titleGreet}>
            <Text style={styles.greeting}>Hi, John Wick</Text>
            <Text style={styles.subtitle}>Let's start learning!</Text>
          </View>
          <View style={styles.profileIcon}>
            <FontAwesome5 name="user-alt" size={50} color="black" />
          </View>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressTextContainer}>
            <Text style={styles.progressText}>Learned today</Text>
            <Text style={styles.progressText}>My course</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={styles.progressFilled} />
          </View>
          <Text style={styles.progressTime}>1h 31m</Text>
        </View>

        <View style={{ margin: 0 }}>
          <ScrollView
            horizontal={true}
            style={styles.scrollContainer}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.item}>
              <Text style={styles.text}>Item 1</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.text}>Item 2</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.text}>Item 3</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.text}>Item 4</Text>
            </View>
          </ScrollView>
        </View>

        <Text style={styles.learningPlan}>Learning Plan</Text>
        <View style={styles.learningTiltleContainer}>
          <View style={styles.courseTile}>
            <Circle
              size={30}
              color={"#ffffff"}
              progress={progress}
              unfilledColor={"#e0e0e0"}
            />
            <Text style={{ marginLeft: 10, marginTop: 5 }}>Package Design</Text>
          </View>
          <Text style={[styles.courseTile, styles.text]}>40/48</Text>
        </View>

        <View style={styles.meetup}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  titleGreet: {
    marginTop: 35,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.dark.text,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.dark.text,
  },
  profileIcon: {
    borderRadius: 50,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  progressContainer: {
    backgroundColor: "#2E2E50",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1,
  },
  progressTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressText: {
    fontSize: 16,
    color: Colors.dark.text,
  },
  progressBar: {
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    height: 10,
    marginVertical: 10,
  },
  progressFilled: {
    backgroundColor: "#FF4D4D",
    borderRadius: 10,
    height: "100%",
    width: "60%",
  },
  progressTime: {
    fontSize: 16,
    color: "#B8B8D2",
  },
  learningPlan: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dark.text,
    marginTop: 25,
  },
  learningTiltleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2E2E50",
    marginTop: 10,
    height: 180,
    borderRadius: 10,
    // marginBottom: 15,
  },
  courseTile: {
    flexDirection: "row",
    padding: 10,
  },
  scrollContainer: {
    height: "auto",
  },
  item: {
    width: 280,
    height: 200,
    backgroundColor: "#2E2E50",
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  meetup: {
    marginTop: 20,
    flex: 1,
    borderRadius: 10,
    height: 150,
    backgroundColor: "#2E2E50",
  },
});

export default Home;
