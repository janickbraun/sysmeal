import { Text, View, StyleSheet } from "react-native"

export default function Header() {
  return (
    <View style={{ marginHorizontal: 25 }}>
      <Text style={styles.lightHeader}>Grab your</Text>
      <Text style={styles.boldHeader}>delicous meal!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  lightHeader: {
    fontSize: 35,
    marginTop: 60,
  },
  boldHeader: {
    fontSize: 35,
    fontWeight: "bold",
  },
})
