/* Copyright (C) 2022 DoctorAmy. All Rights Reserved */

import { Component } from "react";
import { PASSWORD_KEY, USERINFO_KEY, USERNAME_KEY } from "./StorageDefines";
import StorageUtils from "./StorageUtils";


/*
 * 登录信息数据库存取
 * @auther DoctorAmy
 * @since 2022-10-22
 */

export default class StorgeLogin extends Component {
    static saveUsernameAndPswd(userName,password) {
        let userInfo = {
            [USERNAME_KEY]:userName,
            [PASSWORD_KEY]:password
        };
        StorageUtils.add(USERINFO_KEY,JSON.stringify(userInfo));
    }

    static getUserInfo(callback) {
        StorageUtils.get(USERINFO_KEY).then((data) => {
            try {
                const result = JSON.parse(data);
                callback(result);

            } catch (error) {
                callback(undefined);
            }
        });
    }
}