import { StyleSheet, Text, View, TextInput, Keyboard } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const AppTextInput = ({ icon, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} color={colors.primary} />
      )}
      <TextInput style={styles.textInput} {...props} />
    </View>
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
  textInput: {
    flex: 1,
  },
});

export default AppTextInput;
