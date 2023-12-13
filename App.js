import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { StatusBar, View } from "react-native";
import Card from "./app/components/Card";
import colors from "./app/config/colors";

const App = () => {
  return (
    <>
      <StatusBar />
      <View
        style={{
          flex: 1,
          paddingTop: 30,
          backgroundColor: colors.text,
          paddingHorizontal: 10,
        }}
      >
        <Card
          image={require("./app/assets/couch.jpg")}
          title="Couch"
          price={8000}
        />
        <Card
          image={require("./app/assets/jacket.jpg")}
          title="Red Jacket"
          price={700}
        />
      </View>
    </>
  );
};

export default App;
