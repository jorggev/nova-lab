import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Header, SearchInput } from '../../components'
import React, { useEffect, useState } from 'react'
import styles from './Products.style'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../../services/shiftsApi'

const Products = ({ navigation }) => {

  const category = useSelector(state => state.shifts.categorySelected)
  const [keyword, setKeyword] = useState('')
  const { data, isLoading } = useGetProductsByCategoryQuery(category)

/*   useEffect(() => {
    console.log(category)
    if (data) {
      const productsFiltered = data.filter(product =>
        product.title.includes(keyword)
      )
    }
  }, []) */


  return (
    <View style={styles.container}>
      <Header title={category} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        {!isLoading && (
          <FlatList
            data={Object.values(data)}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', { product: item })}
              >
                <Text style={styles.textListContainer}>{item.title}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  )
}

export default Products