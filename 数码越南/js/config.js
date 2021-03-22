let gameCode_str = GetQueryString("gameCode")
let serverCode_str = GetQueryString("serverCode")
let packageVersion_str = GetQueryString("packageVersion")
let siteCode_str = GetQueryString("siteCode")
let isIPGame_str = GetQueryString("isIPGame")
let packageName_str = GetQueryString("packageName")
let language_str = GetQueryString("language")
let os_str = GetQueryString("os")
let onid = GetQueryString("onid")

var fbLoginData = []
var ptLoginData = []
var tryLoginData = []
var ptData = {}
var fbdata = {}
var trydata = {}
var sessionID
var isFirstLogin = 0;
var isFbLogin = 0;
var isClick = true;
var timer;


var getfbLoginData_c = "fbLoginData"
var getptLoginData_c = "ptLoginData"
var gettryLoginData_c = "tryLoginData"


appid = "3318000948257756"
redirect_url = 'https://awscdnfsmdmxkrone.hfxj35e.com/gc_file/webLogin/login/index.html'



//生成uuid
function generateUUID() {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

//五秒后才能再次点击
function afterClick() {
    setTimeout(() => {
        isClick = true
    }, 5000);
}

//sort

function compare(arr){
    return (m,n) => {
        var a = m[arr]
        var b = n[arr]
        return a - b
    }
}


//获取URL参数
function GetQueryString(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\&$');
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}