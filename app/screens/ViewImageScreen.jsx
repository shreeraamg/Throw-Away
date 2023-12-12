import { Image, StatusBar, StyleSheet, View } from "react-native";
import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.actionBar}>
        <View style={styles.iconBtn} />
        <View style={styles.iconBtn} />
      </View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  actionBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    paddingHorizontal: 12,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  iconBtn: {
    width: 45,
    height: 45,
    backgroundColor: colors.secondary,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
