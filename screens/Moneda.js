import React from 'react'
import { StyleSheet, Text, View , TextInput, ImageBackground, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {FontAwesome5} from '@expo/vector-icons';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import "firebase/auth";
import firebase from 'firebase/app';



export default function Moneda({navigation}) {
  

        const [visible, setVisible] = React.useState(false);
      
        const openMenu = () => setVisible(true);
      
        const closeMenu = () => setVisible(false);


        const CerrarSesion = () => {
            firebase.auth().signOut() 
            navigation.navigate("Inicio")   
        }
      
    

  
    const styles = StyleSheet.create({

        view: {
            width: '100%',
            height: '100%',
            flex: 1,  
        },
        fondo:{
    
            height:'100%',
            width: '100%',
            resizeMode:'contain',
            alignItems:'center',    
                
      
        },

        IntroMoneda :{
            flexDirection:"row",
            paddingTop:"18%",
           
            
        },
        texCoin:{
            
            width:"65%",
            height:"30%",
            borderRadius: 25,
            backgroundColor:"#4D1A70",
            alignItems:"center",
            justifyContent:"center",
            textAlign:"center",
            
           
        },

        iconsearch:{

            width : "25%",
            alignItems:"center",
            paddingRight:"10%",
            alignItems:"center",
            padding:"2%"
            
            

            
         

        },

        menuNav:{
            width:"25%",
            alignItems:"center",
            
           

        }

        
    });  
    
    

    return (
        <View style={styles.view}>
            <ImageBackground source={require('../Img/fondo_config_bot.png')} style={styles.fondo}>
            <View style = {styles.IntroMoneda}>
                        <View style={styles.texCoin} >
                            <TextInput  placeholder='BUSCAR COIN' placeholderTextColor={'white'}/>
                        </View>   
                        <View style={styles.iconsearch}>
                            <Icon name="search" size={25} color={"#4D1A70"}   />
                        </View>
                       
            
                <Provider>
                        <View
                            style={styles.menuNav}>
                            <Menu
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor={<Button onPress={openMenu}>
                                        <FontAwesome5 name="bars" size={20} color="#4D1A70"  />
                                    </Button>}>
                            
                            <Menu.Item onPress={() => navigation.navigate("Configuracion_bot")} title="Configuracion" />
                            <Divider/>
                            <Menu.Item onPress={() => navigation.navigate("Api")} title="Api" />
                            <Divider/>
                            <Menu.Item onPress={() => CerrarSesion() } title="Cerrar sesion"  />
                            </Menu>
                        </View>
                    </Provider>
            </View>
                  
                      
            </ImageBackground>

        </View>
    )
}
 
 

