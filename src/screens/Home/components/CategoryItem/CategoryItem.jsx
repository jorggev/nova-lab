import { Image, Pressable, Text, View } from 'react-native'

import styles from './CategoryItem.style'

const CategoryItem = ({ category, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('Products', { category })}
      style={styles.container}
    >
      <View style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </View>
    </Pressable>
  )
}

export default CategoryItem