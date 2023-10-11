import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import { Header } from '../../components'
import styles from './Orders.styles'
import { Pressable, Text, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteShifts } from '../../features/shifts/shiftSlice';
import { useDeleteOrderMutation } from '../../services/shiftsApi';

const Orders = () => {
  const shifts = useSelector((state) => state.shifts.shifts);
  const dispatch = useDispatch();

  const handleDeleteTurno = (id) => {
    dispatch(deleteShifts(id));
  };




  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'stretch' }}>
      <Header title={'MIS TURNOS'} />
      {shifts.length === 0 ? (
        <Text style={styles.turnoCero}>No tienes ningún turno pendiente</Text>
      ) : (
        shifts.map((shift) => (
          <View key={shift.id} style={styles.listContainer}>
            <Text style={styles.docName}>{shift.title}</Text>
            <Text style={styles.orderShift}>{`Día: ${shift.dia}`} | {`Horario: ${shift.horario}`}</Text>
            <Text style={styles.orderBrand}>{`Especialista en: ${shift.brand}`}</Text>
            <Text style={styles.orderPrice}>{`Precio: $${shift.price}`}</Text>

            <View style={styles.details}>
              <Pressable onPress={() => handleDeleteTurno(shift.id)}>
                <Text style={styles.buttonDeleteShift}>CANCELAR TURNO</Text>
              </Pressable>
            </View>
          </View>
        ))
      )}
    </ScrollView >
  );
};

export default Orders;