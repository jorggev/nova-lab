import {View, FlatList as NewFlatList } from 'react-native'
import React from 'react'

const FlatList = ({itemsList, renderListItem}) => {
  return (
    <View>
        <NewFlatList
          data={itemsList}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
        />
    </View>
  )
}

export default FlatList