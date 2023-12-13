import { GestureHandlerRootView } from "react-native-gesture-handler";

import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ListingsScreen />
    </GestureHandlerRootView>
  );
};

export default App;
