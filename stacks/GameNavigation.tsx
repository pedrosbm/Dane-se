import React from 'react';

import { GameNavigation as Navigation } from '../types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Bet from '../screens/Bet';
import Score from '../screens/Score';
import End from '../screens/End';

const Stack = createNativeStackNavigator<Navigation>();

const GameNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='bet' component={Bet} />
                <Stack.Screen name='score' component={Score} />
                <Stack.Screen options={{headerShown: false}} name='end' component={End} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default GameNavigation;