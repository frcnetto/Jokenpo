import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image } from "react-native";

export default class Opcao extends Component {
    constructor ( props ) {
        super( props );
    }
    render () {
        return (
            <TouchableOpacity style={ css.escolha } onPress={ () => { this.props.onPress() } }>
                <Image
                    style={ css.titulo }
                    source={ this.props.titulo } />
            </TouchableOpacity>
        );
    }
}

const css = StyleSheet.create( {
    escolha: {
        height: 100,
        flex: 1,
        marginBottom: 20,
        justifyContent: 'center',
    },
    titulo: {
        width: 110,
        height: 110,
        alignSelf: 'center',
    }
} );