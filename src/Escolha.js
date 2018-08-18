import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default class Escolha extends Component {
    constructor ( props ) {
        super( props );
    }
    render () {
        return (
            ( this.props.escolha ) ?
                < View style={ css.escolhaContainer } >
                    <Text style={ css.centralizaItem }>{ this.props.titulo }</Text>
                    <Image style={ css.img } source={ this.props.escolha } />
                </View >
                : < View style={ css.escolhaContainer } />
        );
    }
}

const css = StyleSheet.create( {
    escolhaContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 180,
    },
    centralizaItem: {
        textAlign: 'center',
    },
    img: {
        width: 150,
        height: 150,
        alignSelf: 'center',
    }
} );