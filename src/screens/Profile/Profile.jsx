import * as ImagePicker from 'expo-image-picker'
import { Image, Pressable, Text, View, TextInput, Alert, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../../features/auth/authSlice'
import styles from './Profile.styles'
import { usePostProfileImageMutation } from '../../services/shiftsApi'
import { Header } from '../../components'
import { Feather } from '@expo/vector-icons';
import { clearUser } from '../../features/auth/authSlice'
import { deleteSession } from '../../db'

const Profile = ({ navigation }) => {
  const image = useSelector(state => state.auth.imageCamera)
  const { localId } = useSelector(state => state.auth)
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
  const dispatch = useDispatch()

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) {
      return false
    }
    return true
  }

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      })
      if (!result.canceled) {
        console.log(result.assets)
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        )
      }
    } else {
      // Para permisos denegados
      Alert.alert(
        'Permisos de cámara requeridos',
        'Por favor, habilite los permisos de cámara en la configuración de la aplicación.',
      );
    }
  }

  const confirmImage = () => {
    dispatch(setCameraImage(image))
    triggerSaveProfileImage({ image, localId })
    console.log(result)
  }

  const logout = () => {
    dispatch(clearUser())
    deleteSession()
  }


  return (
    <ScrollView style={styles.container}>

      <Header title={'PERFIL'} />

      <View style={styles.profileImage}>

        {image ? (
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={{
              uri: 'https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280-768x768.jpg',
            }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
        <Pressable style={styles.cameraButton} onPress={pickImage}>
          <Feather name="camera" size={35} color="black" />
        </Pressable>

      </View>



      <Pressable style={styles.buttonConfirmProfile} onPress={confirmImage}>
        <Text style={styles.buttonTextConfirmProfile}>Confirmar cambios</Text>
      </Pressable>

      <Pressable style={styles.buttonLogOut} onPress={logout}>
        <Text style={styles.buttonTextLogOut}>CERRAR SESION</Text>
      </Pressable>

    </ScrollView>
  )
}

export default Profile