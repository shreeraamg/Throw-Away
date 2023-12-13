import { StyleSheet, Text, TouchableHighlight } from "react-native";
import colors from "../config/colors";

const AppButton = ({ label, onPress }) => {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.text,
    textTransform: "uppercase",
  },
});

export default AppButton;
