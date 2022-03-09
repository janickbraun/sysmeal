import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { elevation } from "../common/styles"
import { useState, useEffect } from "react"

export default function CategoryItem({ name, url, index, active, handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          styles.elevation,
          index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
          active ? { backgroundColor: "rgb(241,186,87)" } : { backgroundColor: "white" },
          index === 5 && { marginRight: 25 },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={url} style={styles.image} />
        </View>
        <Text style={styles.header}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  elevation,
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 5,
  },
  header: {
    fontWeight: "bold",
  },
})
