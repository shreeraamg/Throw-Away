import { Image, StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/couch.jpg")} style={styles.image} />
      <View style={styles.details}>
        <AppText style={styles.title}>Couch</AppText>
        <AppText style={styles.price}>₹ 8000</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Mosh Hamedani"
            description="5 Listings"
            image={require("../assets/mosh.jpg")}
          />
        </View>
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
  userContainer: {
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
