import * as ImagePicker from 'expo-image-picker'
import { Image, Pressable, Text, View, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../../features/auth/authSlice'
import styles from './Profile.styles'
import { usePostProfileImageMutation } from '../../services/shiftsApi'
import { Header } from '../../components'
import { Feather } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [gender, setGender] = useState('');


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


  return (
    <View style={styles.container}>

      <Header title={'PERFIL'} />

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
        <Feather name="camera" size={24} color="black" />
      </Pressable>


      <View style={styles.inputsContainer}>
        <Text style={styles.label}>Edad:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={age}
          onChangeText={(text) => setAge(text)}
        />

        <Text style={styles.label}>País:</Text>
        <TextInput
          style={styles.input}
          value={country}
          onChangeText={(text) => setCountry(text)}
        />

        <Text style={styles.label}>Provincia:</Text>
        <TextInput
          style={styles.input}
          value={province}
          onChangeText={(text) => setProvince(text)}
        />

        <Text style={styles.label}>Ciudad:</Text>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={(text) => setCity(text)}
        />

        <Text style={styles.label}>Género:</Text>
        <TextInput
          style={styles.input}
          value={gender}
          onChangeText={(text) => setGender(text)}
        />

      </View>

      {/*       <View>
        <Pressable
          style={{ ...styles.cameraButton, marginTop: 20 }}
          onPress={() => navigation.navigate('Location')}
        >
          <Text>Ir a mi ubiacion</Text>
        </Pressable>

      </View> */}

      <Pressable style={styles.buttonConfirmProfile} onPress={confirmImage}>
        <Text style={styles.buttonTextConfirmProfile}>Confirmar cambios</Text>
      </Pressable>

    </View>
  )
}

export default Profile