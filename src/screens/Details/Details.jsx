import { Image, Text, TouchableOpacity, View } from 'react-native'

import { Header } from '../../components'
import React from 'react'
import styles from './Details.style'

const Details = ({ route }) => {
  const { product } = route.params
  return (
    <View style={styles.container}>
      <Header title={'Detalles'} />
      <Image style={styles.image} source={{ uri: product.images[0] }} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{`Consulta $ ${product.price}`}</Text>
      <Text style={styles.bio}>BIOGRAFÍA</Text>
      <Text style={styles.description}>{product.description}</Text>
      <TouchableOpacity style={styles.reserveContainer}><Text style={styles.reserve}>RESERVAR TURNO</Text></TouchableOpacity>
    </View>
  )
}

export default Details