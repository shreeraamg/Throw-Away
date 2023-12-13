import { FlatList, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { useState } from "react";

const newData = [
  { id: 1, name: "Shreeraam", image: require("../assets/mosh.jpg") },
  { id: 2, name: "Mosh", image: require("../assets/mosh.jpg") },
  { id: 3, name: "Hamedani", image: require("../assets/mosh.jpg") },
];

const data = [
  { id: 1, name: "Shreeraam", image: require("../assets/mosh.jpg") },
  { id: 2, name: "Mosh", image: require("../assets/mosh.jpg") },
  { id: 3, name: "Hamedani", image: require("../assets/mosh.jpg") },
];

const MessagesScreen = () => {
  const [users, setUsers] = useState(data);
  const [refreshing, setRefreshing] = useState(false);

  function handleDelete(id) {
    setUsers(users.filter((u) => u.id !== id));
  }

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
            onPress={() => {
              console.log(item.id);
            }}
            renderRightActions={() => {
              return (
                <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
              );
            }}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setUsers(newData);
        }}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

export default MessagesScreen;
