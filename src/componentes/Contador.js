import React, {Component} from 'react';
import {View , Text , TouchableHighlight} from 'react-native';

export default class Contador extends Component{
    //Esse maldito state serve para mudar o numero ou valor , diferente do props que é só dados de leitura
    state = { 
        //state é igual ao propriedade numero chamado no contador renderizado
        numero : this.props.numero
    }
    //Funcao incrementa
    maisUm = ()=>{
        this.setState({ numero: this.state.numero + 1 })
    }
    //Funcao zera
    limpar = ()=>{
        this.setState({numero: 0})
    }

    render(){
        return(
            <View>
                <Text style={{fontSize:40}}>{this.state.numero}</Text>
                {/* //Cria uma area tocavel */}
                <TouchableHighlight onPress={this.maisUm} onLongPress={this.limpar} >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}