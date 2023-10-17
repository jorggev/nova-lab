import { Pressable, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { setUser } from '../../features/auth/authSlice'
import styles from './Login.styles'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../services/authApi'
import Feather from '@expo/vector-icons/Feather'
import { colors } from '../../constants/colors'
import { insertSession } from '../../db'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [triggerLogin] = useLoginMutation()
    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState(false);


    const onSubmit = () => {
        triggerLogin({
            email,
            password,
        })
            .unwrap()
            .then(result => {
                dispatch(setUser(result))
                insertSession({
                    localId: result.localId,
                    email: result.email,
                    token: result.idToken,
                })
                    .then(result => console.log(result))
                    .catch(error => console.log(error.message))
            })
    }


    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.tittle}>INCIAR SESION</Text>
                <TextInput
                    style={styles.inputEmail}
                    placeholder="Correo electrónico"
                    value={email}
                    onChangeText={setEmail} />
                <TextInput
                    style={styles.inputEmail}
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                />
                <Pressable
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.togglePasswordVisibility}>
                    {showPassword ? (
                        <Feather name="eye" size={24} color={colors.primary} />
                    ) : (
                        <Feather name="eye-off" size={24} color={colors.primary} />
                    )}
                </Pressable>
                <Pressable
                    style={styles.loginButton}
                    onPress={onSubmit}>
                    <Text style={styles.textLogin}>Iniciar sesión</Text>
                </Pressable>
                <Text style={styles.questionAccount}>¿Todavía no tienes una cuenta?</Text>
                <Pressable
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.textSignup}>Quiero registrarme</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login