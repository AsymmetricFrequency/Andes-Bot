//Pantalla Signup 

//Importaciones
import React, { useState } from 'react'
import { TextInput, Text, View, StyleSheet, ImageBackground,TouchableOpacity } from "react-native"
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


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
        top:70,
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
    },

    textbox_input:{
        position:'relative',
        top:100,
        marginTop:5,
        height: 42,
        width: "92%",
        borderRadius: 10,
        alignItems: "center",
        borderColor:'#4D1A70',
        borderWidth: 1,
        paddingLeft: 6,
        backgroundColor: '#fff'
    }

})

//Funcion principal para crear usuario en firebase authentication 
export default function SignUpScreen ({ navigation }) {

    //Variables email, pwd, pwd2
    const [values, setValues] = useState({
        email: "",
        pwd: "",
        pwd2: ""
    })

    //funcion para tomar del text las variables
    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    //Funcion de registrarse
    function SignUp() {

        const { email, pwd, pwd2 } = values

        if (pwd == pwd2) {
            
            firebase.auth().createUserWithEmailAndPassword(email, pwd)
                
            .catch((error) => {
                console.log(error.message);
                alert("Formato correo vacio o invalido")
                   
            });
         
            if (email === "" ) {
                alert("Porfavor ingrese un correo")
            }
            if (pwd === "" ) {
                alert("Porfavor ingrese una contraseña")
            }
        } 
        else {
            alert("Las contraseñas no coinciden!")
        }
    }
   
    //Front pagina de crear cuenta 
    return <View  style={styles.view}>
                <ImageBackground source={require('../Img/fondo_simple.png')} style={styles.fondo}>
                    <Text 
                        style={{ fontSize: 34, fontWeight: "800", marginBottom: 20 , color:"#FBBA00"}}>
                            REGISTRATE
                    </Text>
                    
                     
                    <TextInput style={styles.textbox_input} placeholder="CORREO ELECTRONICO" onChangeText={text => handleChange(text, "email")}/>

                    <TextInput style={styles.textbox_input} placeholder="CONTRASEÑA" secureTextEntry={true}  onChangeText={text => handleChange(text, "pwd")}/>

                    <TextInput style={styles.textbox_input} placeholder="CONFIRMAR CONTRASEÑA" secureTextEntry={true}  onChangeText={text => handleChange(text, "pwd2")}/>
    
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "92%"}}>
                        <TouchableOpacity style={styles.btn_sign} onPress={() => SignUp()}>
                            <Text style={styles.text_sign}>
                                CREAR
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.develop}>
                        <Text style={{color:"#FBBA00",fontSize: 10,fontWeight: "700"}}>
                            DEVELOPED BY CONDOR LAB
                        </Text>
                    </View>
                </ImageBackground> 
            </View>
}
 