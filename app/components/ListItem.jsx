import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const ListItem = ({ title, description, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.profileImage} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.description}>{description}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    padding: 8,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  description: {
    color: colors.primary,
    fontSize: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ListItem;
