import { Pressable, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import AntDesign from '@expo/vector-icons/AntDesign'
import styles from './SearchInput.style'

const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    onSearch(value)
  }, [value])

  const search = () => {
    onSearch(value)
  }

  const clearInput = () => {
    setValue('')
    onSearch('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Especialidad, nombre o consulta"
      />
      <Pressable onPress={search}>
        <AntDesign name="search1" size={25} color={'black'} />
      </Pressable>
      <Pressable onPress={clearInput}>
        <AntDesign name="closecircleo" size={25} color={'black'} />
      </Pressable>
    </View>
  )
}

export default SearchInput
