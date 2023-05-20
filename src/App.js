import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Components
import TextoCentral from './components/TextoCentral'
import TelaA from './views/TelaA'
import TelaB from './views/TelaB'
import TelaC from './views/TelaC'

const Stack = createNativeStackNavigator();

export default props => (
    <NavigationContainer>
        <SafeAreaView style={{
            flex: 1
        }}>
            <Stack.Navigator initialRouteName='TelaA'>
                <Stack.Screen name='TelaA' component={TelaA} />
                <Stack.Screen name='TelaB' component={TelaB} />
                <Stack.Screen name='TelaC' component={TelaC} />
            </Stack.Navigator>
        </SafeAreaView>
    </NavigationContainer>
)