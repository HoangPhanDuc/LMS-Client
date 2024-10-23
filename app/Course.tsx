import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import ListCourse from "@/components/ListCourse";

const Course = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Course</Text>
        <Ionicons name="person-circle" size={36} color={Colors.dark.text} />
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={Colors.dark.icon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Find Course"
          placeholderTextColor={Colors.dark.icon}
        />
        <Ionicons name="filter-outline" size={24} color={Colors.dark.icon} />
      </View>

      <View>
        <ScrollView
          horizontal={true} // Cho phép cuộn ngang
          showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn
          style={styles.categoryContainer}
        >
          <View style={styles.categoryBox}>
            <Image
              source={{ uri: "https://example.com/language.png" }}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Language</Text>
          </View>
          <View style={styles.categoryBox}>
            <Image
              source={{ uri: "https://example.com/painting.png" }}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Painting</Text>
          </View>
          <View style={styles.categoryBox}>
            <Image
              source={{ uri: "https://marketplace.canva.com/EAF0A6RdU3c/1/0/1600w/canva-green-and-white-illustrative-math-schoology-course-card-w7MH16FodUY.jpg" }}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Math</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>New</Text>
        </TouchableOpacity>
      </View>

      <ListCourse />
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: Colors.dark.text,
    fontSize: 28,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#2E2E50",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.dark.tint,
    padding: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    color: Colors.dark.text,
    paddingLeft: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  categoryBox: {
    width: 160,
    backgroundColor: "#2E2E50",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.dark.tint,
    padding: 15,
    alignItems: "center",
    marginRight: 10,
  },
  categoryImage: {
    width: 158,
    height: 50,
    marginBottom: 10,
  },
  categoryText: {
    color: Colors.dark.text,
    fontSize: 14,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: "#3E3E61",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: Colors.dark.tint,
  },
  filterButtonText: {
    color: "white",
    fontSize: 14,
  },
});

export default Course;
