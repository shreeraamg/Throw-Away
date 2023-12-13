import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/icon.jpeg")} style={styles.logo} />
        <Text style={styles.tagline}>Sell Everything You Don't Need</Text>
      </View>
      <AppButton label="Login" onPress={() => console.log("Login")} />
      <AppButton label="Register" onPress={() => console.log("Register")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 5,
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
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default WelcomeScreen;
