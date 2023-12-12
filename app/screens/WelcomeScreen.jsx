import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/icon.jpeg")} style={styles.logo} />
        <Text style={styles.tagline}>Sell Everything You Don't Need</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.text}>Register</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
  button: {
    width: "95%",
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    gap: 15,
    top: 200,
    alignItems: "center",
  },
  tagline: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: colors.text,
    textTransform: "uppercase",
  },
});

export default WelcomeScreen;
