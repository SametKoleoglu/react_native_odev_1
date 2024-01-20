import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import ProducsFilter from "./components/ProducsFilter";
import Product from "./components/Product";

export default function App() {
  return (
    <Product/>
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
