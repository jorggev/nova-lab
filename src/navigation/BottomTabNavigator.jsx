import Feather from '@expo/vector-icons/Feather'
import OrdersNavigator from './OrdersNavigator'
import StackNavigator from './StackNavigator'
import ProfileNavigator from './ProfileNavigator'
import { StyleSheet } from 'react-native'
import { colors } from '../constants/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomTab = createBottomTabNavigator()

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="Shop"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <BottomTab.Screen
                name="Shop"
                component={StackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="home"
                            size={24}
                            color={focused ? colors.primary : colors.quaternary}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="OrdersNav"
                component={OrdersNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="calendar"
                            size={24}
                            color={focused ? colors.primary : colors.quaternary}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="ProfileNav"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="user"
                            size={24}
                            color={focused ? colors.primary : colors.quaternary}
                        />
                    ),
                }}
            />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.secondary,
    },
})