import { Pressable, Text, TextInput, View } from 'react-native'

import React from 'react'
import styles from './Signup.styles'

const Signup = () => {
    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.tittle}>REGISTRATE</Text>
                <TextInput style={styles.inputEmail} placeholder="Nombre y apellido"/>
                <TextInput style={styles.inputEmail} placeholder="Correo electrónico"/>
                <TextInput style={styles.inputEmail} placeholder="Contraseña"/>
                <TextInput style={styles.inputEmail} placeholder="Repetir contraseña"/>
                <Pressable style={styles.loginButton}>
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