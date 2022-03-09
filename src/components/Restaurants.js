import { Text, View, StyleSheet, ActivityIndicator, FlatList } from "react-native"
import useRestaurants from "../hooks/useRestaurants"
import RestaurantItem from "./RestaurantItem"
import { useEffect } from "react"

export default function Restaurants({ term }) {
  const [{ data, loading, error }, searchResults] = useRestaurants()
  useEffect(() => {
    console.log(term)
    searchResults(term)
  }, [term])

  //console.log({ data, loading, error })

  if (loading) return <ActivityIndicator size="large" marginVertical={30} color="black" />
  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>
      </View>
    )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => <RestaurantItem restaurant={item}>{item.name}</RestaurantItem>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
})
