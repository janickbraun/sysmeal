import { FlatList, View } from "react-native"
import CategoryItem from "./CategoryItem"

export default function Categories({ categories, setTerm, term }) {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item, index }) => {
          return <CategoryItem name={item.name} url={item.img} index={index} active={item.name === term} handlePress={() => setTerm(item.name)} />
        }}
      />
    </View>
  )
}
