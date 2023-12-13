import { FlatList, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import ListItem, { ListItemSeparator } from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: "format-list-bulleted",
  },
  {
    title: "My Messages",
    icon: "email",
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Shreeraam"
          description="shreeram0312@gmail.com"
          image={require("../assets/icon.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={<Icon name={item.icon} />}
            />
          )}
        />
      </View>
      <ListItem title="Logout" IconComponent={<Icon name="logout" />} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});

export default AccountScreen;
