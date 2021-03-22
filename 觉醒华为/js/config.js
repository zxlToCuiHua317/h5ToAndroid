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
var hwtryLoginData = [];
var ptData = {};
var fbdata = {};
var trydata = {};
var hwTrydata = {};
var sessionID;
var isFirstLogin = 0;
var isFirstHWLogin = 0;
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
var gethwtryLoginData_c = "hwtryLoginData";

var appid = "675136089792905";
var redirect_url = 'https://awscdnfkdjxkrone.txxadth.com/gc_file/webLogin/login_hw/index.html';

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

function quickSolt(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let left = [];
    let right = []
    let current = arr.splice(0, 1)

    for (let i = 0; i < arr.length; i++) {
        if (current < arr[i]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSolt(left).concat(current, quickSolt(right))
}

function sendAjax(config) {
    config = {
        type: config.type || "GET",
        url: config.url || "",
        data: config.data || {},
        dataType: config.dataType || "text",
        async: config.async || true,
        beforeSend: config.beforeSend || function () {},
        success: config.success || function () {},
        error: config.error || function () {}
    }
    config.beforeSend()
    var str = objectToString(config.data)
    var xhr, timer;
    xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Micorsoft.XMLHTTP")

    if (config.type.toLowerCase() === "get") {
        xhr.open(config.type, config.url + "?" + str, config.async)
        xhr.send()
    } else {
        xhr.open(config.type, config.url, config.async)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send(str)
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                config.success(xhr.response)
            } else {
                config.error()
            }
        }
    }

    timer = setInterval(function () {
        clearInterval(timer)
        xhr.abort()
    }, 5000)
}

function objectToString(data) {
    data = data || {}
    data._ = Math.random()
    var res = []
    for (var key in data) {
        res.push(encodeURIComponent(key) + "=" + encodeURIComponent(data(key)))
    }
    return res.join("&")
}