import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

import colors from "../config/colors";

const Icon = ({ name, size = 36 }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: colors.primary,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        color={colors.secondary}
        size={size / 2}
      />
    </View>
  );
};

export default Icon;
