import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView} from "react-native";
import { Colors } from "@/constants/Colors";

const ListCourse = () => {
  return (
    <ScrollView style={styles.courseList}>
      <View style={styles.courseCard}>
        <View style={styles.courseImagePlaceholder} />
        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>Product Design v1.0</Text>
          <Text style={styles.courseInstructor}>Robertson Connie</Text>
          <Text style={styles.coursePrice}>$190</Text>
          <Text style={styles.courseDuration}>16 hours</Text>
        </View>
      </View>

      <View style={styles.courseCard}>
        <View style={styles.courseImagePlaceholder} />
        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>Java Development</Text>
          <Text style={styles.courseInstructor}>Nguyen Shane</Text>
          <Text style={styles.coursePrice}>$190</Text>
          <Text style={styles.courseDuration}>16 hours</Text>
        </View>
      </View>

      <View style={styles.courseCard}>
        <View style={styles.courseImagePlaceholder} />
        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>Visual Design</Text>
          <Text style={styles.courseInstructor}>Bert Pullman</Text>
          <Text style={styles.coursePrice}>$250</Text>
          <Text style={styles.courseDuration}>14 hours</Text>
        </View>
      </View>

      <View style={styles.courseCard}>
        <View style={styles.courseImagePlaceholder} />
        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>Visual Design</Text>
          <Text style={styles.courseInstructor}>Bert Pullman</Text>
          <Text style={styles.coursePrice}>$250</Text>
          <Text style={styles.courseDuration}>14 hours</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
  },
  courseCard: {
    flexDirection: "row",
    backgroundColor: "#2E2E50",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.dark.tint,
    marginBottom: 20,
    padding: 15,
  },
  courseImagePlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: "#444",
    borderRadius: 5,
    marginRight: 15,
  },
  courseInfo: {
    justifyContent: "space-between",
  },
  courseTitle: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "bold",
  },
  courseInstructor: {
    color: "#B8B8D2",
    fontSize: 12,
  },
  coursePrice: {
    color: Colors.dark.text,
    fontSize: 14,
    fontWeight: "bold",
  },
  courseDuration: {
    color: "#FF6347",
    fontSize: 12,
  },
});

export default ListCourse;
