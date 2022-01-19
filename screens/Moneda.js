//Pantalla de Moneda

//Importaciones
import React,{useState,useEffect} from 'react' 
import { StyleSheet, Text, View , TextInput, ImageBackground, TouchableOpacity,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {FontAwesome5} from '@expo/vector-icons';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import "firebase/auth";
import firebase from 'firebase/app';

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

    IntroMoneda :{
        flexDirection:"row",
        paddingTop:"18%"
    },

    texCoin:{
        width:"64%",
        height:"30%",
        borderRadius: 25,
        borderColor:"#4D1A70",
        paddingLeft: 8,
        justifyContent:"center",
        alignContent:"center",
        borderWidth: 1,
        marginLeft:6
    },

    iconsearch:{
        width : "22%",
        alignItems:"center",
        paddingRight:"10%",
        alignItems:"center",
        padding:"2%"
    },

    menuNav:{
        width:"25%",
        alignItems:"center",
        position:"relative",
        zIndex:2
    },

    contMoneda:{
        flex:1,
        marginTop:"-8%",
        width:'100%'
    },

    titulos: {
        bottom: '5%',
        flexDirection: 'row',
        width: '100%',
        height:'5%',
        marginTop:"-10%"
    },

    txtNmoneda: {
        width: '45%',
        marginLeft: '2%',
        fontWeight: 'bold',
        fontSize: 18
    },

    txtPmoneda: {
        width: '50%',
        fontWeight: 'bold',
        fontSize: 18    
    },

    lista: {
        flexDirection: 'row'
    },

    txtMoneda: {
        width:"40%",
        fontSize: 15,
        margin: 10
    },

    txtPrecio: {
       width:"28%",
       fontSize: 15,
       margin: 10
    },

    ContainerOperar: {
    width:"33%",
    fontSize: 15,
    margin: 10,
    color:"blue"
    },

    textOperar:{
        color:"rgba(225, 177, 0, 1)",
        fontSize:15
    }
})

//Funcion principal Monedas
export default function Moneda({navigation}) {

    //Variable para visibilidad
    const [visible, setVisible] = React.useState(false);

    //Variable Menu
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    //Variable para la data de las monedas
    const [data,setData]=useState([{}])

    //UseEffect
    useEffect ( () =>{
        fetch("http://10.10.18.13:4000/monedas").then(
            res => res.json()
        ).then(
            data =>{
                setData(data)
                //console.log(data);
                }   
            )
    },[])

    //Funcion CerrarSesion
    const CerrarSesion = () => {
        firebase.auth().signOut() 
        navigation.navigate("Inicio")   
    }

    //Funcion Operar
    const Operar = (num) => {
        fetch('http://10.10.18.14:4000/obtener_moneda', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({moneda:data.monedas[num].symbol})
        })
        .then(resp => resp.json())
        .catch(error => console.log(error))         
        navigation.navigate("Configuracion_bot")   
        }
    
    //Front
    return (
        <View style={styles.view}>
            <ImageBackground source={require('../Img/fondo_config_bot.png')} style={styles.fondo}>
                <View style = {styles.IntroMoneda}>
                    <View style={styles.texCoin} >
                        <TextInput  placeholder='BUSCAR COIN' placeholderTextColor={"rgba(0, 0, 0, 0.28)"}/>
                    </View>   
                    <TouchableOpacity style={styles.iconsearch}>
                        <Icon name="search" size={25} color={"#4D1A70"} onPress={()=> navigation.navigate("Configuracion_bot")}  />
                    </TouchableOpacity>

                    <Provider>
                        <View style={styles.menuNav }>
                            <Menu 
                                visible={visible} 
                                onDismiss={closeMenu} 
                                anchor={
                                    <Button onPress={openMenu}>
                                        <FontAwesome5 name="bars" size={20} color="#4D1A70"/>
                                    </Button>}>

                                    <Menu.Item onPress={() => navigation.navigate("Configuracion_bot")} title="Configuracion"/>
                                    <Divider/>
                                    <Menu.Item onPress={() => CerrarSesion() } title="Cerrar sesion"/>
                                    <Divider/>
                                    <Menu.Item onPress={() => navigation.navigate("Balance")} title="Balance"/>            
                            </Menu>
                        </View>
                    </Provider>
                </View>

                <View style={styles.titulos}>
                    <Text style={styles.txtNmoneda}>
                        Nombre
                    </Text>
                    <Text style={styles.txtPmoneda}>
                        Precio
                    </Text>
                </View>

                <View style={styles.contMoneda} >
                    <ScrollView> 
                        {(typeof data.monedas ==="undefined")?(
                            <Text >Loading....</Text>
                        ) :(
                            data.monedas.map((item,index) =>(
                                <View style={styles.lista} >      
                                    <Text style={styles.txtMoneda}>{item["symbol"]}</Text> 
                                    <Text style={styles.txtPrecio}>{item["price"]}</Text>

                                    <TouchableOpacity style={styles.ContainerOperar} onPress={() => Operar(index) }>
                                        <Text style={styles.textOperar} >Operar</Text>
                                    </TouchableOpacity>        
                                </View>
                            ))
                            )}
                            
                    </ScrollView>      
                </View>          
            </ImageBackground>
        </View>
    )
}
 
 

