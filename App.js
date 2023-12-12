import { StyleSheet, Text, View, StatusBar } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View
        style={{ backgroundColor: "gold", width: 100, height: 100, top: -100 }}
      />
      <View
        style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}
      />
      <View
        style={{ backgroundColor: "tomato", width: 100, height: 100, top: 100 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
