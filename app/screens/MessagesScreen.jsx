import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";

const users = [
  { id: 1, name: "Shreeraam", image: require("../assets/mosh.jpg") },
  { id: 2, name: "Mosh", image: require("../assets/mosh.jpg") },
  { id: 3, name: "Hamedani", image: require("../assets/mosh.jpg") },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            description={item.id}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

export default MessagesScreen;
