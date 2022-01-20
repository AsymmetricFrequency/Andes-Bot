//Pantalla Pisos

//Importaciones
import React ,{ useState } from 'react'
import { Text, View, StyleSheet, ImageBackground,TouchableOpacity ,TextInput,ScrollView } from "react-native"
import {FontAwesome5} from '@expo/vector-icons';
import "firebase/auth";



//Estilos
const styles = StyleSheet.create({

    view: {
        width: '100%',
        height: '100%',
        flex: 1
    },

    fondo:{
        height:'100%',
        width: '100%',
        resizeMode:'contain',
        alignItems:'center'
    },

    containerConf:{
        flexDirection:"row",
        marginTop:"18%",
        alignItems:'center'
    },

    iconreturn:{
        width:"21%"
    },

    txtconf:{
        width:"68%",
        fontSize: 20, 
        fontWeight: "bold",
        color: "#4D1A70"
    },

    titulo:{    
        flexDirection:'row',
        paddingTop:'20%' 
    },

    tituloL:{
        width:"33%"
    },

    tituloC:{
        width:"33%",
        alignItems:"center"
    },

    txtPorcentaje:{
        fontSize: 20, 
        fontWeight: "bold",
        color: "#4D1A70"
    },

    tituloR:{
        width:"33%",
        alignItems:"center" 
    },

    txtReplica:{
        fontSize: 20, 
        fontWeight: "bold",
        color: "#4D1A70"
    },

    pisos:{
        flexDirection:"row",
        paddingTop:"4%",
        paddingLeft:"5%",
        paddingRight:"7%",
        flex:5
    },

    pisosL:{
        width:"33%"
    },

    pisosC:{
        width:"33%",
        borderColor:"#4D1A70",
        borderRadius: 10,
        marginRight:"1%",
        marginLeft:"1%",
        borderWidth: 1,
        paddingLeft: 6
    },

    pisosR:{
        marginLeft:"1%",
        marginRight:"1%",
        width:"33%",
        borderColor:"#4D1A70",
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 6
    },

    btn_finalizar:{
        width:120,
        height:45,
        backgroundColor: "#4D1A70",
        borderRadius: 15,
        marginTop:'8%',
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center"
    },

    txtbtn_finalizar:{
        color:'#FBBA00',
        fontSize: 20,
        fontWeight:'bold'
    }
})




//Funcion Principal Pisos
export default function PisosScreen({navigation}) {

    const [values, setValues] = useState({
        porcentaje: "",
        replica: ""
    }) 

     //Recibe Pisos y crea Array
    const inputs = Array(parseInt(cant_pisos1)).fill()

      //Esta funcion actualiza y toma lo que esta en la caja de texto
      function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    const Enviar = () =>{
    
        fetch('http://10.10.18.14:4000/obtiene_pisos', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({porcentaje:values.porcentaje, replica:values.replica})
        })
        .then(resp => resp.json())
        .catch(error => console.log(error))
    }
    
   

    //Front
    return (
        <View style={styles.view}>
            <ImageBackground source={require('../Img/fondo_config_bot.png')} style={styles.fondo}>
                <View>
                    <View style={styles.containerConf} >
                        <TouchableOpacity style={styles.iconreturn}>
                            <FontAwesome5 name="angle-double-left" size={20} color={"#4D1A70"} onPress={()=> navigation.navigate("Configuracion_bot")}  />
                        </TouchableOpacity>
                            <Text style={styles.txtconf} >
                                CONFIGURACION PISOS
                            </Text>
                    </View> 
                </View>

                <View style={styles.titulo}>
                    <View style={styles.tituloL}>
                        <Text ></Text>  
                    </View>
                                
                    <View style={styles.tituloC}>
                        <Text style={styles.txtPorcentaje}>Porcentaje</Text>  
                    </View>                    
                    <View style={styles.tituloR}>
                        <Text style={styles.txtReplica}>Replica</Text> 
                    </View>
                </View> 

                <ScrollView>
                    <View>
                        {inputs.map((inp,index) => {
                            return  <View style={styles.pisos}>
                                        <View key={index.toString()} style={styles.pisosL}>
                                            <Text style={styles.txtconf}>Piso {index +1}</Text> 
                                        </View>
                                        <View key={index.toString()} style={styles.pisosC}>
                                            <TextInput  color="black" placeholder = " % " placeholderTextColor="rgba(0, 0, 0, 0.28)"  keyboardType="numeric" onChangeText={text => handleChange(text, "porcentaje"+index)}   />
                                        </View>
                                        <View key={index.toString()} style={styles.pisosR}>
                                            <TextInput  color="black" placeholder = " #" placeholderTextColor="rgba(0, 0, 0, 0.28)"  keyboardType="numeric" onChangeText={text => handleChange(text, "replica"+index)}   />
                                        </View>

                                    </View>
                                    } )}

                                    <View>
                                        <TouchableOpacity style={styles.btn_finalizar}  onPress={() => Enviar()}>
                                            <Text  style={styles.txtbtn_finalizar}>
                                                Enviar
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                        
                    </View>     
                </ScrollView>                      
            </ImageBackground>
        </View>
    )
}













