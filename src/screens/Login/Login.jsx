import { Pressable, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { setUser } from '../../features/auth/authSlice'
import styles from './Login.styles'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../services/authApi'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [triggerLogin, result] = useLoginMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        console.log(email, password)
        triggerLogin({
            email,
            password,
        })
        console.log(result)
        if (result.isSuccess) {
            dispatch(setUser(result))
        }
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
                    onChangeText={setPassword} />
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