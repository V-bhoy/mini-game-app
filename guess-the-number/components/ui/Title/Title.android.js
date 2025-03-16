import { Text, StyleSheet, Platform } from "react-native";

export function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    // fontFamily: 'open-sans-bold',
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ?  2 : 0,
        // borderWidth: Platform.select({ android: 2, ios: 0 }),
    borderWidth: 2,
    borderColor: "red",
    padding: 12,
    maxWidth: "80%",
  },
});
