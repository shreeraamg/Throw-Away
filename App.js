import { GestureHandlerRootView } from "react-native-gesture-handler";

import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import MessagesScreen from "./app/screens/MessagesScreen";

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
      <MessagesScreen />
    </GestureHandlerRootView>
  );
};

export default App;
