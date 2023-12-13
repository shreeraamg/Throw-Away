import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import colors from "../../config/colors";

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={28}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
