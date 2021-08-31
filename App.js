/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
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


// import Header from './components/Header'

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header title='Just Quotes' />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
          
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
