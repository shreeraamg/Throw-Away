import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const ListItemSeparator = () => {
  return <View style={styles.seperator} />;
};

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.text,
  },
});

export default ListItemSeparator;
