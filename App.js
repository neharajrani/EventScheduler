import { StyleSheet, Text, View } from "react-native";

import BottomTabNavigation from "./src/navigation/bottomnavigation/index";
import Navigation from "./src/navigation/stackNavigation/index";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
