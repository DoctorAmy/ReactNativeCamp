/* Copyright (C) 2022 DoctorAmy. All Rights Reserved */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import StorgeLogin from '../sourcecode/storage/StorageLogin';
import Logo from "../resource/images/team/team_01.svg";

/*
 * 调试页面
 * @auther DoctorAmy
 * @since 2022-10-23
 */
export default class TestHome extends Component {

    storageTest() {
        StorgeLogin.saveUsernameAndPswd("DoctorAmy","123456");

        StorgeLogin.getUserInfo((data)=>{
            console.log("getUserInfo data is" + JSON.stringify(data));
            let userName = data.userName;
            console.log("getUserInfo data userName is " + userName);
            let password = data.password;
            console.log("getUserInfo data password is " + password);
        });
    }

    componentDidMount() {
        this.storageTest();
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo style={styles.logImage}/>
                <Text style={styles.hello}>Hello, World</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:""
    },
    logImage :{
        width:200,
        height:150
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});