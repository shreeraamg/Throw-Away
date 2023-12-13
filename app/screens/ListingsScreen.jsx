import { FlatList, StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import Card from "../components/Card";
import Screen from "../components/Screen";

const items = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 1200,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in Great condition",
    price: 9000,
    image: require("../assets/couch.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <AppText style={styles.heading}>My Listings</AppText>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card title={item.title} image={item.image} price={item.price} />
        )}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 12,
  },
  screen: {
    padding: 20,
    backgroundColor: "#EEE",
    paddingTop: 50,
  },
  seperator: {
    height: 15,
  },
});

export default ListingsScreen;
