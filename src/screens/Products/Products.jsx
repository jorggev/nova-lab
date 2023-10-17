import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Header, SearchInput } from '../../components'
import React, { useEffect, useState } from 'react'
import styles from './Products.style'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../../services/shiftsApi'

const Products = ({ navigation }) => {

  const category = useSelector(state => state.shifts.categorySelected)
  const [keyword, setKeyword] = useState('')
  const [products, setProducts] = useState([])
  const { data, isLoading } = useGetProductsByCategoryQuery(category)


  useEffect(() => {
    console.log(data, isLoading)
    if (!isLoading) {
      const dataArr = Object.values(data)
      setProducts(dataArr)
      const productsFiltered = dataArr.filter(product =>
        product.title.includes(keyword)
      )
      setProducts(productsFiltered)
    }
  }, [isLoading, keyword])

  return (
    <View style={styles.container}>
      <Header title={category} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        {!isLoading && (
          <FlatList
            data={products}
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