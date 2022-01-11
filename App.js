
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from "./screens/Index";
import InicioScreen from "./screens/Inicio";
import LoginScreen from "./screens/Login";
import SignUpScreen from "./screens/SignUp";
import HomeScreen from "./screens/Home";
import ApiScreen from "./screens/Api";
import PisosScreen from './screens/Pisos';
import Configuracion_botScreen from "./screens/Configuracion_bot";
import MonedaScreen from "./screens/Moneda";
import BalanceScreen from './screens/Balance';
import firebase from 'firebase/app'; 
import "firebase/firestore";     
import "firebase/auth";


const Stack = createNativeStackNavigator();

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const firebaseConfig = {
    apiKey: "AIzaSyCHslB-W6vzLjgHEZU99RNvcMsSkSUJtrQ",
    authDomain: "condorcoin-basedatos.firebaseapp.com",
    databaseURL: "https://condorcoin-basedatos-default-rtdb.firebaseio.com",
    projectId: "condorcoin-basedatos",
    storageBucket: "condorcoin-basedatos.appspot.com",
    messagingSenderId: "1088739825011",
    appId: "1:1088739825011:web:61a090934cb9a450df6106",
    measurementId: "G-QK38Y9BTM3"
  };

  //Comprobacion si se esta inicializando firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });



  return (
    <NavigationContainer>
      {isLoggedIn ? <Stack.Navigator>
                      
                        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Api" component={ApiScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Configuracion_bot" component={Configuracion_botScreen} options={{ headerShown: false }} />
                        <Stack.Screen name = "Pisos" component ={PisosScreen} options={{headerShown:false}}/>  
                        <Stack.Screen name = "Moneda" component ={MonedaScreen} options={{headerShown:false}}/>
                        <Stack.Screen name = "Balance" component ={BalanceScreen} options={{headerShown:false}}/>
                        
                    </Stack.Navigator>: 
                    <Stack.Navigator>
                         
                        <Stack.Screen name = "Index" component ={IndexScreen} options={{headerShown:false}}/>
                        <Stack.Screen name = "Inicio" component ={InicioScreen} options={{headerShown:false}}/>
                        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }}/>
                        
                    </Stack.Navigator>}
    </NavigationContainer>
  );
}

export default App;