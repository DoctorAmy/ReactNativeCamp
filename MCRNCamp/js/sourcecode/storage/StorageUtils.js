/* Copyright (C) 2022 Master. All Rights Reserved */

import { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/*
 * 数据库存取管理类
 * @auther Tom
 * @since 2022-10-19
 */

export default class StorageUtils extends Component {
    static async add(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
            console.log('add sucess');
        } catch (e) {
            console.log("add error is " + e);
        }
    }

    static async remove(key) {
        try {
            await AsyncStorage.removeItem(key)
            console.log('remove sucess');
        } catch (e) {
            console.log("remove error is " + e);
        }
    }

    static async get(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                console.log('get sucess value exist');
                return value;
            } else {
                console.log('get sucess value is null');
                return null;
            }
        } catch (e) {
            console.log("get error is " + e);
            return null;
        }
    }

    static async gatAllKeys() {
        try {
            let allKeys = await AsyncStorage.getAllKeys();
            return allKeys;
        } catch (e) {
            console.log("get error is " + e);
            return [];
        }
    }

    static async clear() {
        try {
            await AsyncStorage.clear();
            console.log('clear sucess');
        } catch (e) {
            console.log("clear error is " + e);
        }
    }
}
