import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const CustomPicker = ({ icon, placeholder, ...props }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleClick() {
    Alert.alert("Select a Category", null, [
      { text: "Furniture", onPress: () => setSelectedCategory("Furniture") },
      { text: "Clothing", onPress: () => setSelectedCategory("Clothing") },
      {
        text: "Electronics",
        onPress: () => setSelectedCategory("Electronics"),
      },
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
          {selectedCategory ? selectedCategory : placeholder}
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

export default CustomPicker;
