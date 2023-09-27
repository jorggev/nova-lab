import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import { Pressable, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteShifts } from '../../features/shifts/shiftSlice';
import { Header } from '../../components'
import styles from './Orders.styles'

const Orders = () => {
  const shifts = useSelector((state) => state.shifts.shifts);
  const dispatch = useDispatch();

  const handleDeleteTurno = (id) => {
    dispatch(deleteShifts(id));
  };

  return (
    <View style={styles.container}>
      <Header title={'MIS TURNOS'} />
      {shifts.length === 0 ? (
        <Text style={styles.turnoCero}>No tienes ningún turno pendiente</Text>
      ) : (
        shifts.map((shift) => (
          <View key={shift.id} style={styles.listContainer}>
            <Text style={styles.docName}>{shift.title}</Text>
            <Text style={styles.orderShift}>{`Día: ${shift.dia}`} | {`Horario: ${shift.horario}`}</Text>
            <Text style={styles.orderBrand}>{`Especialista en: ${shift.brand}`}</Text>
            <Text style={styles.orderPrice}>{`Precio: ${shift.price}`}</Text>

            <View style={styles.details}>
              <Pressable onPress={() => handleDeleteTurno(shift.id)}>
                <Text style={styles.buttonDeleteShift}>CANCELAR TURNO</Text>
              </Pressable>
            </View>
          </View>
        ))
      )}
    </View>
  );
};

export default Orders;