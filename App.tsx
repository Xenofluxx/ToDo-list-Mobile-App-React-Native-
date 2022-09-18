import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./src/components/app-container";
import MainScreen from "./src/screens/main";
import React from "react";
import { i18n, changeLanguage } from "./src/i18n/translator";
export default function App() {
  return (
    <AppContainer>
      <MainScreen />
    </AppContainer>
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
