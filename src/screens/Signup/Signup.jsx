import { Pressable, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { setUser } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../../services/authApi'
import styles from './Signup.styles'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [triggerSignup, result] = useSignUpMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        console.log(email, password, confirmPass)
        triggerSignup({
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
                <Text style={styles.tittle}>REGISTRATE</Text>

                <TextInput style={styles.inputEmail}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Correo electrónico" />
                <TextInput style={styles.inputEmail}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Contraseña" />
                <TextInput style={styles.inputEmail}
                    value={confirmPass}
                    onChangeText={setConfirmPass}
                    placeholder="Repetir contraseña" />
                <Pressable style={styles.loginButton} onPress={onSubmit}>
                    <Text style={styles.textSignup}>Registrarse</Text>
                </Pressable>
                <Text style={styles.questionAccount}>¿Ya tienes una cuenta?</Text>
                <Pressable style={styles.loginButton}>
                    <Text style={styles.textLogin}>Inciar sesión</Text>
                </Pressable>
            </View>
        </View >
    )
}

export default Signup