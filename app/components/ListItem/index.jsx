import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../../config/colors";
import AppText from "../AppText";
import ListItemDeleteAction from "./ListItemDeleteAction";
import ListItemSeparator from "./ListItemSeparator";

const ListItem = ({
  title,
  description,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.text}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.profileImage} />}
          <View>
            <AppText style={!IconComponent && styles.title}>{title}</AppText>
            {description && (
              <AppText style={styles.description}>{description}</AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    padding: 8,
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  description: {
    color: colors.primary,
    fontSize: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ListItem;
export { ListItemDeleteAction, ListItemSeparator };
