import { StyleSheet, Text, TouchableHighlight } from "react-native";

import colors from "../config/colors";

const AppButton = ({ label, onPress, variant }) => {
  if (variant == "secondary") {
    return (
      <TouchableHighlight
        style={[styles.button, { backgroundColor: colors.secondary }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: colors.primary }]}>{label}</Text>
      </TouchableHighlight>
    );
  }

  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.text,
    textTransform: "uppercase",
    fontWeight: "700",
  },
});

export default AppButton;
