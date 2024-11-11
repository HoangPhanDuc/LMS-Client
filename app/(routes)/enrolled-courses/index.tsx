import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import useUser from "@/hook/auth/useUser";
import axios from "axios";
import { SERVER_URI } from "@/utils/uri";
import Loader from "@/components/loader/loader";
import { LinearGradient } from "expo-linear-gradient";
import CourseCard from "@/components/cards/course.card";

export default function index() {
  const [courses, setCourses] = useState<CoursesType[]>([]);
  const [loader, setLoader] = useState(false);
  const { loading, user } = useUser();

  useEffect(() => {
    const res: any = axios.get(`${SERVER_URI}/course/get-courses`);
    const courses: CoursesType[] = res.data.course;
    const data = courses.filter((i: CoursesType) =>
      user?.courses?.some((d: any) => d._id === i._id)
    );
    setCourses(data);
  }, [loader, user]);
  return (
    <>
      {loading || loader ? (
        <Loader />
      ) : (
        <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={{ flex: 1 }}>
          <FlatList
            data={courses}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item._id.toString()}
            renderItem={({ item }) => <CourseCard item={item} />}
          />
        </LinearGradient>
      )}
    </>
  );
}
