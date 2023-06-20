function navigatorInfo(){
    let appName = navigator.appCodeName;
    let appVerison = navigator.appVersion;

    console.log(`Name: ${appName}`)
    console.log(`Version: ${appVerison}`)
}

navigatorInfo()