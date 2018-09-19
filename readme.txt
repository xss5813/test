//cordova plugin: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/index.html

拉下项目后，在项目根目录执行以下命令
   ionic cordova prepare
   npm i
   ionic cordova platform rm ios
   ionic build ios
   ionic cordova platform add ios


   //https://www.npmjs.com/package/cordova-plugin-wechat-v3   微信小程序插件

   
   // File 上传
   ionic cordova plugin add cordova-plugin-file-transfer
   npm install --save @ionic-native/file-transfer

   //file 预览
   ionic cordova plugin add cordova-plugin-file-opener2
   npm install --save @ionic-native/file-opener

    //ios 开启权限 info.plist
   <key>NSAppleMusicUsageDescription</key>
    <string>App需要您的同意,才能访问媒体资料库</string>
    <key>NSBluetoothPeripheralUsageDescription</key>
    <string>App需要您的同意,才能访问蓝牙</string>
    <key>NSCalendarsUsageDescription</key>
    <string>App需要您的同意,才能访问日历</string>
    <key>NSCameraUsageDescription</key>
    <string>App需要您的同意,才能访问相机</string>
    <key>NSHealthShareUsageDescription</key>
    <string>App需要您的同意才能访问健康</string>
    <key>NSHealthUpdateUsageDescription</key>
    <string>App需要您的同意才能访问健康更新</string>
    <key>NSLocationAlwaysUsageDescription</key>
    <string>App需要您的同意,才能始终访问位置</string>
    <key>NSLocationUsageDescription</key>
    <string>App需要您的同意,才能访问位置</string>
    <key>NSLocationWhenInUseUsageDescription</key>
    <string>App需要您的同意,才能在使用期间访问位置</string>
    <key>NSMicrophoneUsageDescription</key>
    <string>App需要您的同意,才能访问麦克风</string>
    <key>NSMotionUsageDescription</key>
    <string>App需要您的同意,才能访问运动与健身</string>
    <key>NSPhotoLibraryUsageDescription</key>
    <string>App需要您的同意,才能访问相册</string>
    <key>NSRemindersUsageDescription</key>
    <string>App需要您的同意,才能访问提醒事项</string>

    // config.xml中widget元素下加入 (注意：config.xml 中的注释会在生成平台代码时被删除)
    <edit-config target="NSCameraUsageDescription" file="*-Info.plist" mode="merge">
        <string>App需要您的同意,才能访问相机</string>
    </edit-config>
  
  // 安装ionic pro依赖
  cordova plugin add cordova-plugin-ionic --save --variable APP_ID="abcd1234" --variable CHANNEL_NAME="Master" --variable UPDATE_METHOD="background"
  
//自定义cordova插件
 1. $plugman create --name MyPlugin --plugin_id com.plugin.myPlugin --plugin_version 0.0.1

2。$plugman platform add --platform_name ios

3。$sudo plugman createpackagejson (插件路径)

4。 $ionic plugin add (你拿到的插件路径)。
