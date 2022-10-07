/****************************
    Copyright (C) 2022 Master. All Rights Reserved
****************************/

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class TestHome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hello}>Hello, World</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});