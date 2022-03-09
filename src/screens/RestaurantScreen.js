import { View, Text, ActivityIndicator, FlatList, Image, StyleSheet, Dimensions } from "react-native"
import useRestaurant from "../hooks/useRestaurant"
import { useEffect } from "react"

export default function RestaurantScreen({ navigation }) {
  const [{ data, loading, error }, searchRestaurant] = useRestaurant()
  const id = navigation.getParam("id")
  useEffect(() => {
    searchRestaurant(id)
  }, [])

  if (loading) return <ActivityIndicator size="large" marginVertical={30} color="black" />
  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>
      </View>
    )

  return (
    <View>
      {data && (
        <FlatList
          data={data.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: Math.round((Dimensions.get("window").width * 9) / 16),
    width: Dimensions.get("window").width,
  },
})
