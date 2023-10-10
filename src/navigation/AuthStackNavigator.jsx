import { Login, Signup } from '../screens'
import { colors } from '../constants/colors'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AuthStack = createNativeStackNavigator()

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="Signup"
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.secondary,
    }}>
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  )
}

export default AuthStackNavigator
