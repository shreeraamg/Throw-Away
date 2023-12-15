import { StyleSheet } from "react-native";
import AppText from "./AppText";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    fontSize: 12,
    color: "#dc2626",
  },
});

export default ErrorMessage;
