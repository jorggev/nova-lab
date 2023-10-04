import { Pressable, Text, TextInput, View } from 'react-native'

import React from 'react'
import styles from './Login.styles'

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.tittle}>INCIAR SESION</Text>
                <TextInput style={styles.inputEmail} placeholder="Correo electrónico"/>
                <TextInput style={styles.inputEmail} placeholder="Contraseña"/>
                <Pressable style={styles.loginButton}>
                    <Text style={styles.textLogin}>Iniciar sesión</Text>
                </Pressable>
                <Text style={styles.questionAccount}>¿Todavía no tienes una cuenta?</Text>
                <Pressable style={styles.loginButton}>
                    <Text style={styles.textSignup}>Quiero registrarme</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login