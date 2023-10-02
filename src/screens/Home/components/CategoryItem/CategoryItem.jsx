import styles from './CategoryItem.style'
import { Image, Pressable, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../../../features/shifts/shiftSlice'

const CategoryItem = ({ category, navigation }) => {

  const dispatch = useDispatch()

  return (
    <Pressable
      onPress={() => {
        dispatch(setCategorySelected(category))
        navigation.navigate('Products', { category })
      }}
      style={styles.container}
    >
      <View style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </View>
    </Pressable>
  )
}

export default CategoryItem