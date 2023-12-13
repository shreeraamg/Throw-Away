import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { StatusBar } from "react-native";

const App = () => {
  return (
    <>
      <StatusBar />
      <WelcomeScreen />
    </>
  );
};

export default App;
