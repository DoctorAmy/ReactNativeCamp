/****************************
    Copyright (C) 2022 Master. All Rights Reserved
****************************/

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import StorageUtils from '../sourcecode/storage/StorageUtils';

export default class TestHome extends Component {

    storageTest() {
        StorageUtils.add("ip", "192.168.3.1");

        StorageUtils.get("ip").then((data) => {
            console.log("get ip is " + data);
        });

        StorageUtils.gatAllKeys().then((data) => {
            console.log("gatAllKeys is " + data);
        });

        StorageUtils.remove("ip");

        StorageUtils.gatAllKeys().then((data) => {
            console.log("gatAllKeys is " + data);
        });

        StorageUtils.add("port", "8080");

        StorageUtils.get("port").then((data) => {
            console.log("get port is " + data);
        });

        StorageUtils.gatAllKeys().then((data) => {
            console.log("gatAllKeys is " + data);
        });

        StorageUtils.clear();

        StorageUtils.gatAllKeys().then((data) => {
            console.log("gatAllKeys is " + data);
        });
    }

    componentDidMount() {
        this.storageTest();
    }

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