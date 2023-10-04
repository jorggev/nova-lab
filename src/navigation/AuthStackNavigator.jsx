import { Login, Signup } from '../screens'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AuthStack = createNativeStackNavigator()

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="Signup">
      <AuthStack.Screen name="Nova Lab" component={Signup} />
      <AuthStack.Screen name="INICIAR SESION" component={Login} />
    </AuthStack.Navigator>
  )
}

export default AuthStackNavigator