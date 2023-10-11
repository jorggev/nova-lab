import React, { useState } from 'react'
import styles from './Details.style'
import { Image, Text, TouchableOpacity, View, TouchableHighlight, ScrollView } from 'react-native'
import { Header } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { reserveShifts } from '../../features/shifts/shiftSlice';
import { usePostOrderMutation } from '../../services/shiftsApi';
import { colors } from '../../constants/colors';


const Details = ({ route }) => {
  const { product } = route.params

  const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);

  const dispatch = useDispatch();

  const shifts = useSelector((state) => state.shifts.shifts);

  const [triggerPost] = usePostOrderMutation();

  const handleTurnoSeleccionado = (index) => {
    setTurnoSeleccionado(index);
  };

  const handleReserveTurno = async () => {
    try {
      if (!shifts.some((shift) => shift.id === product.id)) {
        dispatch(reserveShifts({
          id: product.id,
          title: product.title,
          dia: product.turnos[turnoSeleccionado].dia,
          horario: product.turnos[turnoSeleccionado].horario,
          price: product.price,
          brand: product.brand,
        })
        );
      }
      const { data } = await triggerPost({
        user: 'LoggedUser',
        order: [
          {
            id: product.id,
            title: product.title,
            dia: product.turnos[turnoSeleccionado].dia,
            horario: product.turnos[turnoSeleccionado].horario,
            price: `$${product.price}`,
            brand: product.brand,
          },
        ],
      });
      console.log(data);
    }
    catch (error) {
      console.error('Error al reservar turno:', error.message);
    }
  };



  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'stretch' }}>
      <Header title={'Detalles'} />
      <Image style={styles.image} source={{ uri: product.images[0] }} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.especiality}>Especialidad: {product.brand}</Text>
      <Text style={styles.bio}>BIOGRAFÍA</Text>
      <Text style={styles.description}>{product.description}</Text>


      {/* Turnos */}

      <Text style={styles.bio}>Turnos Disponibles:</Text>
      {product.turnos && product.turnos.length > 0 ? (
  <View>
  {product.turnos.map((turno, index) => (
    <TouchableHighlight
      key={index}
      style={[
        styles.turno,
        turnoSeleccionado === index && styles.turnoSeleccionado,
      ]}
      onPress={() => handleTurnoSeleccionado(index)}
      underlayColor="whitesmoke">
      <Text style={[
        styles.turnoText,
        turnoSeleccionado === index && { color: colors.secondary}, // Aplica blanco solo al seleccionado
      ]}>{`${turno.dia}: ${turno.horario}`}</Text>
    </TouchableHighlight>
  ))}
</View>
      ) : (
        <Text style={styles.turno}>No hay turnos disponibles</Text>
      )}
      <Text style={styles.price}>{`Consulta $ ${product.price}`}</Text>
      <TouchableOpacity style={styles.reserveContainer} onPress={handleReserveTurno}>
        <Text style={styles.reserve}>RESERVAR TURNO</Text>
      </TouchableOpacity>
    </ScrollView >
  )
}

export default Details;