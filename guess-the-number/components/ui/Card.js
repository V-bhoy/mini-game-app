import { View, StyleSheet, Dimensions } from "react-native"

export function Card({ children }) {
    return <View style={styles.inputContainer}>{children}</View>
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 30 : 50,
    padding: 16,
    backgroundColor: "white",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});