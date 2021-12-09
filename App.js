
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Home, Restaurant, OrderDelivery} from './src/screens'
import Tabs from './src/navigation/tabs';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    initialRouteName={"Tabs"}
    >
      <Stack.Screen name="Tabs" component={Tabs}/>
      <Stack.Screen name="Restaurant" component={Restaurant}/>
      <Stack.Screen name="OrderDelivery" component={OrderDelivery}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}


