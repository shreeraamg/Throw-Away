import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Alert,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const AppPicker = ({
  icon,
  placeholder,
  items,
  onSelectItem,
  selectedItem,
  ...props
}) => {
  function handleClick() {
    Alert.alert("Select a Category", null, [
      { text: items[0], onPress: () => onSelectItem(items[0]) },
      { text: items[1], onPress: () => onSelectItem(items[1]) },
      { text: items[2], onPress: () => onSelectItem(items[2]) },
    ]);
  }

  return (
    <TouchableWithoutFeedback onPress={handleClick} {...props}>
      <View style={styles.inputContainer}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={colors.primary}
          />
        )}
        <AppText style={styles.text}>
          {selectedItem ? selectedItem : placeholder}
        </AppText>
        <MaterialCommunityIcons
          name="chevron-down"
          size={20}
          color={colors.primary}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    gap: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    flex: 1,
    // paddingLeft: 10,
  },
});

export default AppPicker;
