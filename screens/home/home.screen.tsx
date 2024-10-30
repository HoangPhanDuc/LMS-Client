import { View, Text, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/header/header";
import SearchInput from "@/components/search/search.input";
import HomeBannerSlider from "@/components/home/home.banner.slide";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, paddingTop: 50 }}
    > 
      <SearchInput />
      <ScrollView>
        <HomeBannerSlider/>
      </ScrollView>
      <Header />
    </LinearGradient>
  );
}
