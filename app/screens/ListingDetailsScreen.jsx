import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import AppText from "../components/AppText";
import Card from "../components/Card";

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/couch.jpg")} style={styles.image} />
      <View style={styles.details}>
        <AppText style={styles.title}>Couch</AppText>
        <AppText style={styles.price}>₹ 8000</AppText>
        <ListItem />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  details: {
    padding: 8,
    gap: 4,
  },
  image: {
    width: "100%",
    height: "30%",
    marginTop: StatusBar.currentHeight + 6,
  },
  price: {
    color: colors.green,
    fontWeight: "700",
    fontSize: 18,
  },
  title: {
    fontWeight: "900",
    fontSize: 24,
  },
});

export default ListingDetailsScreen;
