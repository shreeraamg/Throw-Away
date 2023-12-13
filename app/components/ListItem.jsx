import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const ListItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/mosh.jpg")}
        style={styles.profileImage}
      />
      <View>
        <AppText style={styles.title}>Mosh Hamedani</AppText>
        <AppText style={styles.subTitle}>5 Listings</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  subTitle: {
    color: colors.primary,
    fontSize: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ListItem;
