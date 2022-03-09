import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"

import { useEffect, useState } from "react"
import useRestaurants from "../hooks/useRestaurants"
import Header from "../components/Header"
import Search from "../components/Search"
import Categories from "../components/Categories"
import Restaurants from "../components/Restaurants"

export default function HomeScreen() {
  const [term, setTerm] = useState("burger")
  const commonCategories = [
    {
      name: "burger",
      img: require("../assets/images/burger.png"),
    },
    {
      name: "pizza",
      img: require("../assets/images/pizza.png"),
    },
    {
      name: "dessert",
      img: require("../assets/images/cake.png"),
    },
    {
      name: "drinks",
      img: require("../assets/images/smoothies.png"),
    },
    {
      name: "steak",
      img: require("../assets/images/steak.png"),
    },
    {
      name: "pasta",
      img: require("../assets/images/pasta.png"),
    },
  ]

  const [{ data, loading, error }, searchResaurants] = useRestaurants(term)

  useEffect(() => {
    searchResaurants(term)
  }, [term])
  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Categories categories={commonCategories} setTerm={setTerm} term={term} />
      <Restaurants data={data} loading={loading} error={error} term={term} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(253,253,253)",
  },
})
