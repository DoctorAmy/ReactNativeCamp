# ReactNativeCamp For Android
 ReactNativeCamp ForFor Android




#环境安装
1.下载node.js
    https://nodejs.org/zh-cn/download/releases/

2.切换回官方源可使用 
    npx nrm use npm

3.Yarn是 Facebook 提供的替代 npm 的工具，可以加速 node 模块的下载。
    npm install -g yarn

4. 下载AndroidStudio & Android SDK &Android Virtual Device
    https://developer.android.google.cn/studio/

5. 配置 ANDROID_HOME 环境变量
    控制面板 -> 系统和安全 -> 系统 -> 高级系统设置 -> 高级 -> 环境变量 -> 新建

6. 把一些工具目录添加到环境变量 Path
    打开控制面板 -> 系统和安全 -> 系统 -> 高级系统设置 -> 高级 -> 环境变量，选中Path变量，然后点击编辑
    %ANDROID_SDK_ROOT%\platform-tools
    %ANDROID_SDK_ROOT%\emulator
    %ANDROID_SDK_ROOT%\tools
    %ANDROID_SDK_ROOT%\tools\bin

7. 你可以使用--version参数（注意是两个杠）创建指定版本的项目。注意版本号必须精确到两个小数点。
    npx react-native init AwesomeProject --version 0.68.1






#命令行初始化工程报错

#运行 : npx react-native init AwesomeProject

#报错: TypeError: cli.init is not a function
    TypeError: cli.init is not a function
        at run (D:\Software\NodeJs\node_global\node_modules\react-native-cli\index.js:302:7)
        at createProject (D:\Software\NodeJs\node_global\node_modules\react-native-cli\index.js:249:3)
        at init (D:\Software\NodeJs\node_global\node_modules\react-native-cli\index.js:200:5)
        at Object.<anonymous> (D:\Software\NodeJs\node_global\node_modules\react-native-cli\index.js:153:7)
        at Module._compile (internal/modules/cjs/loader.js:1085:14)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
        at Module.load (internal/modules/cjs/loader.js:950:32)
        at Function.Module._load (internal/modules/cjs/loader.js:790:12)
        at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:75:12)
        at internal/main/run_main_module.js:17:47

#解决办法: 指定react_native版本
    npx react-native init AwesomeProject --version 0.68.1