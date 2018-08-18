import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Opcao from './Opcao';
import Escolha from './Escolha';

const PEDRA = require( '../img/rock.png' );
const PAPEL = require( '../img/paper.png' );
const TESOURA = require( '../img/scissors.png' );

export default class App extends Component {

  constructor ( props ) {
    super( props );
    this.state = {
      arrEscolhas: [ PEDRA, PAPEL, TESOURA ],
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: 'Faça sua escolha...',
    };
  }

  jokenpo ( escolhaUsuario ) {
    const RANDONNUM = Math.floor( Math.random() * 3 );
    let resultado = '';
    let arrResultados = [ 'Jogo empatado!', 'Você perdeu!', 'Você ganhou!' ];

    if ( escolhaUsuario == RANDONNUM ) {
      resultado = arrResultados[ 0 ];
    }
    else if ( escolhaUsuario == 0 && RANDONNUM == 1 ) {
      resultado = arrResultados[ 1 ];
    }
    else if ( escolhaUsuario == 1 && RANDONNUM == 2 ) {
      resultado = arrResultados[ 1 ];
    }
    else if ( escolhaUsuario == 2 && RANDONNUM == 0 ) {
      resultado = arrResultados[ 1 ];
    }
    else {
      resultado = arrResultados[ 2 ];
    }

    this.setState( {
      escolhaUsuario: this.state.arrEscolhas[ escolhaUsuario ],
      escolhaComputador: this.state.arrEscolhas[ RANDONNUM ],
      resultado: resultado,
    } );
  }

  render () {
    return (
      <View style={ css.main }>

        <Escolha titulo='Escolha do computador: ' escolha={ this.state.escolhaComputador } />
        <Escolha titulo='Escolha do jogador: ' escolha={ this.state.escolhaUsuario } />

        <Text style={ css.resultado }>{ this.state.resultado }</Text>

        <View style={ css.escolhasContainer }>
          <Opcao titulo={ require( '../img/rock.png' ) } onPress={ () => { this.jokenpo( 0 ) } } />
          <Opcao titulo={ require( '../img/paper.png' ) } onPress={ () => { this.jokenpo( 1 ) } } />
          <Opcao titulo={ require( '../img/scissors.png' ) } onPress={ () => { this.jokenpo( 2 ) } } />
        </View>

      </View >
    );
  }
}

const css = StyleSheet.create( {
  main: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'rgb( 254, 234, 1 )',
    justifyContent: 'space-around',
  },
  escolhasContainer: {
    flexDirection: 'row',
  },
  resultado: {
    height: 50,
    fontSize: 30,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  }
} );