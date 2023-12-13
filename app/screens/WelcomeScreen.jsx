import { Image, StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/icon.jpeg")} style={styles.logo} />
        <AppText style={styles.tagline}>Sell Everything You Don't Need</AppText>
      </View>
      <AppButton label="Login" />
      <AppButton variant="secondary" label="Register" />
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
    // backgroundColor: "#F9F9F9",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    gap: 15,
    top: "15%",
    alignItems: "center",
  },
  tagline: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default WelcomeScreen;
