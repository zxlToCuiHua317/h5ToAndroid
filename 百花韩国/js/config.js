"use strict";

var gameCode_str = GetQueryString("gameCode");
var serverCode_str = GetQueryString("serverCode");
var packageVersion_str = GetQueryString("packageVersion");
var siteCode_str = GetQueryString("siteCode");
var isIPGame_str = GetQueryString("isIPGame");
var packageName_str = GetQueryString("packageName");
var language_str = GetQueryString("language");
var os_str = GetQueryString("os");

var fbLoginData = [];
var ptLoginData = [];
var tryLoginData = [];
var ptData = {};
var fbdata = {};
var trydata = {};
var sessionID;
var isFirstLogin = 0;
var isFbLogin = 0;
var isClick = true;
var sendData;
var ch;
var str;
var getLanguage;
var timer;
var tryToGameData;

var getfbLoginData_c = "fbLoginData";
var getptLoginData_c = "ptLoginData";
var gettryLoginData_c = "tryLoginData";

var appid = "1066260223867834";
var redirect_url = 'https://awscdnfbhkrone.hqeaotr.com/gc_file/webLogin/login/index.html';

//生成uuid
function generateUUID() {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
    return uuid;
}

//五秒后才能再次点击
function afterClick() {
    setTimeout(function () {
        isClick = true;
    }, 5000);
}

//sort

function compare(arr) {
    return function (m, n) {
        var a = m[arr];
        var b = n[arr];
        return a - b;
    };
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