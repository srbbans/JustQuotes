/**
 * Created by - B A N S
 * @format
 * @flow strict-local
 */
 import React from 'react';
 import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import Home from './components/Home';
 import ShowQuote from './components/ShowQuote';

 const Stack = createStackNavigator();
 
 function App() {
   return (
       <NavigationContainer >
         <Stack.Navigator headerMode='none' initialRouteName="Home">
           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="ShowQuote" component={ShowQuote} />
         </Stack.Navigator>
       </NavigationContainer>
   );
 }
 export default App;