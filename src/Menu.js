import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './componentes/Simples';
import ParImpar from './componentes/Parimpar';
import Contador from './componentes/Contador';


//Cria um menu lateral swipe
export default createDrawerNavigator({
    Contador : {
        screen:() => <Contador numero={8222} />
    },
    Simples : {
        screen: ()=> 
        <Simples texto="Flexivel!!"/>,
        navigationOptions: {title:'Simples'}
    },
    ParImpar: {
        screen:()=> 
        <ParImpar numero={30} />,
        //Titulo do menu
        navigationOptions: {title:'Par ou Impar'}
    }
    //Tamanho do menu 300px
},{drawerWidth:300})