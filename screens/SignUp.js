import React, { useState } from 'react'
import { Text, View, StyleSheet, ImageBackground,TouchableOpacity } from "react-native"
import TextBox from "../components/TextBox"
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";




//Estilos 
const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    fondo:{
        flex: 2,
        height:'100%',
        width: '100%',
        resizeMode:'contain',
        alignItems:'center', 
        justifyContent: "center",    
    },
    btn_sign:{

        width: "60%",
        height:'30%',
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FBBA00",
        borderRadius:20

    },
    text_sign:{
        fontSize: 20,
        fontWeight:'bold',
        color:"#4D1A70"
    },

    develop:{ 
    marginBottom: 20 , 
    textAlign:"center",
    top:'25%'
    }

})
//Funcion principal para crear usuario en firebase authentication 
export default function SignUpScreen ({ navigation }) {

    const [values, setValues] = useState({
      
        email: "",
        pwd: "",
        pwd2: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function SignUp() {

        const { email, pwd, pwd2 } = values

        if (pwd == pwd2) {
            
            firebase.auth().createUserWithEmailAndPassword(email, pwd)
            
             
                .then(() => {
                     
                })
                
                .catch((error) => {
                    console.log(error.message);
                    alert("Formato correo vacio o invalido")
                   
                });
         
        
        if (pwd === "" ) {
            alert("Porfavor ingrese una contraseña")
        }

        } else {
            alert("Las contraseñas no coinciden!")
        }
    }
   
    //Front pagina de crear cuenta 
    return <View  style={styles.view}>
                <ImageBackground source={require('../Img/fondo_simple.png')} style={styles.fondo}>
                    <Text 
                        style={{ fontSize: 34, fontWeight: "800", marginBottom: 20 , color:"#FBBA00"}}>REGISTRATE
                    </Text>
                    <TextBox 
                        placeholder="CORREO ELECTRONICO" onChangeText={text => handleChange(text, "email")} 
                    />
                    <TextBox 
                        placeholder="CONTRASEÑA" secureTextEntry={true}  onChangeText={text => handleChange(text, "pwd")}
                    />
                    <TextBox 
                        placeholder="CONFIRMAR CONTRASEÑA" secureTextEntry={true}  onChangeText={text => handleChange(text, "pwd2")}
                    />
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "92%", }}>
                        <TouchableOpacity style={styles.btn_sign} onPress={() => SignUp()}>
                            <Text style={styles.text_sign}>CREAR</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.develop}>
                        <Text style={{color:"#FBBA00",fontSize: 10,fontWeight: "700",}}>DEVELOPED BY CONDOR LAB</Text>
                    </View>

                </ImageBackground> 
            </View>
}
 