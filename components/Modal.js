import {
  StyleSheet,
  Text,
  View,
  Modal as NewModal,
  Button,
} from "react-native";

import React from "react";

const Modal = ({ modalVisible, onHandleDelete, itemToDelete }) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View>
            <Text style={styles.modalTitle}>ELIMINAR TAREA</Text>
          </View>
          <View>
            <Text style={styles.modalMessage}>
              ¿Estás seguro de eliminar "{itemToDelete}"?
            </Text>
          </View>
          <View style={styles.modalButton}>
            <Button
              title="CANCELAR"
              onPress={() => {
                onHandleDelete(false);
              }}
              color={"#16233d"}
            />
            <Button
              title="ELIMINAR"
              onPress={() => {
                onHandleDelete(true);
              }}
              color={"#ff5471"}
            />
          </View>
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
  modalContent: {
    backgroundColor: "#fffaf2",
    
    borderRadius: 20,
    padding: 35,
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 19,
    
  },
  modalMessage: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 15,
  },
  modalButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  modalButtonCancel: {
    marginTop: 15,
  },
  modalButtonConfirm: {
    marginTop: 15,
  },
});
