import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.actionBar}>
        <View>
          <MaterialCommunityIcons
            name="close"
            size={30}
            color={colors.text}
            style={styles.icon}
          />
        </View>
        <View>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={28}
            color={colors.secondary}
            style={styles.icon}
          />
        </View>
      </View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  actionBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 15,
    paddingHorizontal: 12,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  icon: {},
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
