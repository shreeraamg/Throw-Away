import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ title, price, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.details}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>₹ {price}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  details: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    gap: 2,
  },
  image: {
    width: "100%",
    height: 200,
  },
  price: {
    color: colors.green,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Card;
