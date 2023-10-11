import { FlatList, SafeAreaView, View } from 'react-native'
import { CategoryItem } from './components'
import { Header } from '../../components'
import React from 'react'
import styles from './Home.style'
import { useGetCategoriesQuery } from '../../services/shiftsApi'

const Home = ({ navigation }) => {

  const { data, isLoading } = useGetCategoriesQuery()
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'ESPECIALIDADES'} />
      <View style={styles.listContainer}>
        {!isLoading && (
          <FlatList
            data={Object.values(data)}
            keyExtractor={category => category.title}
            renderItem={({ item }) => (
              <CategoryItem category={item.title} navigation={navigation} />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default Home