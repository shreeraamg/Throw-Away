import { GestureHandlerRootView } from "react-native-gesture-handler";
import MessagesScreen from "./app/screens/MessagesScreen";
import { View } from "react-native";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import Icon from "./app/components/Icon";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <ListItem
          title="Shreeraam"
          description="5 Listings"
          IconComponent={<Icon name="email" />}
        />
      </Screen>
    </GestureHandlerRootView>
  );
};

export default App;
