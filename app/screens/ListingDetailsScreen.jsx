import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/couch.jpg")} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>Couch</Text>
        <Text style={styles.price}>₹ 8000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  details: {
    padding: 8,
    gap: 6,
  },
  image: {
    width: "100%",
    height: "30%",
    marginTop: StatusBar.currentHeight + 6,
  },
  price: {
    color: colors.green,
    fontWeight: "600",
    fontSize: 18,
  },
  title: {
    fontWeight: "900",
    fontSize: 24,
  },
});

export default ListingDetailsScreen;
