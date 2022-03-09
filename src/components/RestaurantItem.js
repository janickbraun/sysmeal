import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import { withNavigation } from "react-navigation"
import { MaterialIcons } from "@expo/vector-icons"

function RestaurantItem({ restaurant, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Restaurant", { id: restaurant.id })}>
      <View style={[styles.elevation, styles.container]}>
        {restaurant.image_url === "" ? (
          <MaterialIcons name="restaurant" size={50} style={{ marginLeft: 10, marginRight: 20 }} />
        ) : (
          <Image style={styles.image} source={{ uri: restaurant?.image_url }} />
        )}

        <View style={styles.infoContainer}>
          <Text style={styles.header}>{restaurant.name}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>{restaurant.rating}</Text>
            <Text style={styles.money}>{restaurant.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 100,
    borderRadius: 500,
    shadowOffset: { width: 1, height: 3 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation: 3,
    backgroundColor: "white",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 400,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  info: {
    fontWeight: "bold",
    flexDirection: "row",
  },
  rating: {
    marginRight: 20,
  },
  money: {
    color: "gold",
  },
})

export default withNavigation(RestaurantItem)
