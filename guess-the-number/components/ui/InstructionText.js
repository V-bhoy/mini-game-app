import { Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    // fontFamily: 'open-sans',
    color: colors.accent500,
    fontSize: 24,
  },
});
