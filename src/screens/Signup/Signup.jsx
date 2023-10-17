import { Pressable, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { setUser } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../../services/authApi'
import styles from './Signup.styles'
import Feather from '@expo/vector-icons/Feather'
import { colors } from '../../constants/colors'

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    // const [triggerSignup, result] = useSignUpMutation()
    const [triggerSignup] = useSignUpMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        console.log(email, password, confirmPass)
        triggerSignup({
            email,
            password,
        })
        .unwrap()
        .then(result => {
          console.log(result)
          dispatch(setUser(result))
        })
        .catch(err => console.log(err))
    }

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.tittle}>REGISTRATE</Text>

                <TextInput style={styles.inputEmail}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Correo electrónico" />
                <TextInput style={styles.inputEmail}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Contraseña"
                    secureTextEntry={!showPassword} />
                <TextInput style={styles.inputEmail}
                    value={confirmPass}
                    onChangeText={setConfirmPass}
                    placeholder="Repetir contraseña"
                    secureTextEntry={!showPassword} />
                <Pressable
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.togglePasswordVisibility}>
                    {showPassword ? (
                        <Feather name="eye" size={24} color={colors.primary} />
                    ) : (
                        <Feather name="eye-off" size={24} color={colors.primary} />
                    )}
                </Pressable>
                <Pressable style={styles.loginButton} onPress={onSubmit}>
                    <Text style={styles.textSignup}>Registrarse</Text>
                </Pressable>
                <Text style={styles.questionAccount}>¿Ya tienes una cuenta?</Text>
                <Pressable style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textLogin}>Inciar sesión</Text>
                </Pressable>
            </View>
        </View >
    )
}

export default Signup