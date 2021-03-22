var getfbLoginData = JSON.parse(localStorage.getItem(getfbLoginData_c))
if (getfbLoginData === null) {
    localStorage.setItem(getfbLoginData_c, "[]")
}
var getptLoginData = JSON.parse(localStorage.getItem(getptLoginData_c))
if (getptLoginData === null) {
    localStorage.setItem(getptLoginData_c, "[]")
}
var gettryLoginData = JSON.parse(localStorage.getItem(gettryLoginData_c))
if (gettryLoginData === null) {
    localStorage.setItem(gettryLoginData_c, "[]")
}
var getFbLoginData = JSON.parse(localStorage.getItem("fbLoginData"));
var getPtLoginData = JSON.parse(localStorage.getItem("ptLoginData"));
var getTryLoginData = JSON.parse(localStorage.getItem("tryLoginData"));
var arrData = [...getPtLoginData, ...getFbLoginData, ...getTryLoginData];
if (arrData != undefined && arrData.length > 0) {
    var autoLogin = arrData[arrData.length - 1]
    document.querySelector(".title_name").innerText = autoLogin.name
    document.querySelector(".quitLogion").style.display = "block"
    document.querySelector(".loading").style.display = "block"
    document.querySelector(".showad").style.display = "block"

    timer = setTimeout(function () {
        switch (autoLogin.type) {
            case "pt":
                sendAjax({
                    url: Api.userLogin_api,
                    type: "POST",
                    data: {
                        username: autoLogin.name,
                        password: autoLogin.password,
                        siteCode: "damoregame",
                        t: "1487665362664",
                        ck: "7e1d4d53a5d436be64a26dbbca1c511e",
                        ismobile: "yes",
                        language: gamedata.language,
                        gameCode: gamedata.gameCode,
                        packageName: gamedata.packageName
                    },
                    dataType: 'json',
                    beforeSend: function (e) {
                        document.querySelector(".loading").style.display = "block"
                        document.querySelector(".showad").style.display = "block"
                    },
                    success: function (res) {
                        document.querySelector(".loading").style.display = "none"
                        document.querySelector(".showad").style.display = "none"
                        document.querySelector(".quitLogion").style.display = "none"
                        if (res.code === "1000") {
                            //成功
                            sessionID = res.sessionID;
                            sendAjax({
                                type: "POST",
                                url: Api.userMobileAuth_api,
                                data: {
                                    sitecode: gamedata.siteCode,
                                    type: res.type,
                                    os: gamedata.os,
                                    SessionID_LP: res.sessionID,
                                    language: gamedata.language,
                                    gameCode: gamedata.gameCode,
                                    packageName: gamedata.packageName,
                                    packageVersion: gamedata.packageVersion
                                },
                                dataType: 'json',
                                success: function (res) {
                                    console.log(res)
                                    document.querySelector(".loading").style.display = "none"
                                    document.querySelector(".showad").style.display = "none"
                                    document.querySelector(".quitLogion").style.display = "none"
                                    sendData = JSON.stringify(res);
                                    loginCallback(sendData);
                                }
                            })
                        } else {
                            alert(res.msg)
                        }
                    }
                })
                break;
            case "fb":
                var getGameData = JSON.parse(localStorage.getItem("gameData"))
                console.log(getGameData)
                sendAjax({
                    url: Api.fbuserLoginForMobile_api,
                    type: 'POST',
                    data: {
                        access_token: autoLogin.accessToken,
                        language: getGameData.language,
                        gameCode: getGameData.gameCode,
                        packageName: getGameData.packageName,
                        os: getGameData.os,
                        appid: appid,
                        tag: "website"
                    },
                    dataType: 'json',
                    beforeSend: function (e) {
                        document.querySelector(".loading").style.display = "block"
                        document.querySelector(".showad").style.display = "block"
                    },
                    success: function (data) {
                        document.querySelector(".loading").style.display = "none"
                        document.querySelector(".showad").style.display = "none"
                        document.querySelector(".quitLogion").style.display = "none"
                        if (data.code == "6004") {
                            sendAjax({
                                url: Api.userPartnerLogin_api,
                                type: 'POST',
                                data: {
                                    siteUsername: data.siteUsername,
                                    sitecode: data.sitecode,
                                    password: data.password,
                                    time: data.time,
                                    email: data.email,
                                    fbname: data.fbname,
                                    language: getGameData.language,
                                    gameCode: getGameData.gameCode,
                                    packageName: getGameData.packageName,
                                    os: getGameData.os
                                },
                                dataType: 'json',
                                jsonp: 'callback',
                                success: function (res) {
                                    if (res.code == "1400") {

                                        sessionID = res.sessionID
                                        sendAjax({
                                            type: "POST",
                                            url: Api.userMobileAuth_api,
                                            data: {
                                                sitecode: getGameData.siteCode,
                                                type: res.type,
                                                os: getGameData.os,
                                                SessionID_LP: res.sessionID,
                                                language: getGameData.language,
                                                gameCode: getGameData.gameCode,
                                                packageName: getGameData.packageName,
                                                packageVersion: packageVersion_str
                                            },
                                            dataType: 'json',
                                            success: function (res) {
                                                console.log(res)
                                                sendData = JSON.stringify(res);
                                                loginCallback(sendData);
                                            }
                                        })
                                    } else {
                                        alert(res.msg);
                                    }
                                },
                                error: function () {}
                            });

                        } else {
                            alert(data.msg);
                        }
                    },
                    error: function () {}
                });
                break;
            case "player":
                sendAjax({
                    type: "POST",
                    url: Api.userFastLogin_api,
                    data: {
                        isFirst: "no",
                        id: autoLogin.id,
                        siteCode: autoLogin.siteCode,
                        t: autoLogin.t,
                        ps: autoLogin.ps,
                        imeiNum: generateUUID(),
                        xuhaoNum: generateUUID(),
                        language: gamedata.language,
                        gameCode: gamedata.gameCode,
                        packageName: gamedata.packageName,
                        os: gamedata.os
                    },
                    dataType: 'json',
                    beforeSend: function (e) {
                        document.querySelector(".loading").style.display = "block"
                        document.querySelector(".showad").style.display = "block"
                    },
                    success: function (res) {
                        console.log(res)
                        document.querySelector(".loading").style.display = "none"
                        document.querySelector(".showad").style.display = "none"
                        document.querySelector(".quitLogion").style.display = "none"

                        if (res.code === "1400") {

                            sessionID = res.sessionID;
                            sendAjax({
                                type: "POST",
                                url: Api.userMobileAuth_api,
                                data: {
                                    sitecode: gamedata.siteCode,
                                    type: res.type,
                                    os: gamedata.os,
                                    SessionID_LP: res.sessionID,
                                    language: gamedata.language,
                                    gameCode: gamedata.gameCode,
                                    packageName: gamedata.packageName,
                                    packageVersion: gamedata.packageVersion
                                },
                                dataType: 'json',
                                success: function (res) {
                                    console.log(res)
                                    sendData = JSON.stringify(res);
                                    loginCallback(sendData);
                                }
                            })
                        }
                    },
                    error: function (err) {
                        console.log(err)
                    }
                })
                break;
        }
    }, 5000)
}

document.querySelector(".quit_btn").onclick = function () {
    document.querySelector(".quitLogion").style.display = "none"
    document.querySelector(".loading").style.display = "none"
    document.querySelector(".showad").style.display = "none"
    clearTimeout(timer)
}

var getDataForPt = JSON.parse(localStorage.getItem(getptLoginData_c))

if (getDataForPt != null) {
    ptLoginData = getDataForPt
}


if (GetQueryString("gameCode")) {
    var gameData = {
        gameCode: gameCode_str,
        serverCode: serverCode_str,
        siteCode: siteCode_str,
        isIPGame: isIPGame_str,
        packageName: packageName_str,
        language: language_str,
        os: os_str,
        packageVersion: packageVersion_str
    }
    console.log(gameData)
    var Data = JSON.stringify(gameData)
    localStorage.setItem("gameData", JSON.stringify(gameData))
}


function login_mobile() {
    var username = document.querySelector("#login_username_ns").value
    var password = document.querySelector("#login_userpassword_ns").value

    username = formatting.StrTrim(username);
    username = formatting.filterHTML(username);
    password = formatting.StrTrim(password);

    if (formatting.isEmptyString(username)) {
        Check.check_login_username()
        return;
    }
    if (formatting.isEmptyString(password)) {
        Check.check_login_password()
        return;
    }
    if (!formatting.isNumAndChar(username) || username.length < 3 || username.length > 32) {
        Check.check_login_checkaccount()
        return;
    }
    if (password.length < 6 || password.length > 20) {
        Check.check_login_checkapassword()
        return;
    }

    sendAjax({
        url: Api.userLogin_api,
        type: "POST",
        data: {
            username,
            password,
            siteCode: "damoregame",
            t: "1487665362664",
            ck: "7e1d4d53a5d436be64a26dbbca1c511e",
            ismobile: "yes",
            language: language_str,
            gameCode: gameCode_str,
            packageName: packageName_str
        },
        dataType: 'json',
        beforeSend: function (e) {
            isClick = false
            $(".loading").show()
            $(".showad").show()
        },
        success: function (res) {
            afterClick()
            $(".loading").hide()
            $(".showad").hide()
            if (res.code === "1000") {
                var time = new Date().getTime()
                ptData = {
                    name: username,
                    password,
                    typename: "회원 로그인",
                    type: "pt",
                    icon: "icon-people",
                    time: time
                }

                if (!(Array.isArray(ptLoginData) && ptLoginData.length === 0)) {

                    for (let its = 0; its < ptLoginData.length; its++) {
                        let tindex = its
                        console.log(ptLoginData[tindex])
                        ptLoginData.push(ptData)

                        var obj = {};
                        ptLoginData = ptLoginData.reduce(function (item, next) {

                            obj[next.name] ? '' : obj[next.name] = true && item.push(next);
                            return item;
                        }, []);
                        console.log(ptLoginData)

                    }
                } else {
                    ptLoginData.push(ptData)
                }

                localStorage.setItem(getptLoginData_c, JSON.stringify(ptLoginData) || "[]")

                //成功
                sessionID = res.sessionID;
                sendAjax({
                    type: "POST",
                    url: Api.userMobileAuth_api,
                    data: {
                        sitecode: siteCode_str,
                        type: res.type,
                        os: os_str,
                        SessionID_LP: res.sessionID,
                        language: language_str,
                        gameCode: gameCode_str,
                        packageName: packageName_str,
                        packageVersion: packageVersion_str
                    },
                    dataType: 'json',
                    beforeSend: function (e) {
                        $(".loading").show()
                        $(".showad").show()
                    },
                    success: function (res) {
                        $(".loading").hide()
                        $(".showad").hide()
                        console.log(res)
                        sendData = JSON.stringify(res);
                        loginCallback(sendData);
                    }
                })
            } else {
                alert(res.msg)
            }
        }
    })
}

document.querySelector(".login_button_ns").onclick = function () {
    if (isClick) {
        login_mobile()
    }
}

document.querySelector(".retrieve_password_ns").onclick = function () {
    if (isClick) {
        forgetPassWord()
    }
}

document.querySelector(".registered_button_ns").onclick = function () {
    if (isClick) {
        userRegister()
    }
}

document.querySelector(".changePass_button_ns").onclick = function () {
    if (isClick) {
        userChangePassword()
    }
}

document.querySelector(".fb_button_ns").onclick = function () {
    if (isClick) {
        userUpgradeAccount()
    }
}

document.querySelector(".play_button_ns").onclick = function () {
    if (isClick) {
        tryUpgradeAccount()
    }
}

document.querySelector(".handle2").onclick = function () {
    if (isClick) {
        userTryToGame()
    }
}

document.querySelector(".fbLogin").onclick = function () {
    if (isClick) {
        isFbLogin = localStorage.getItem("FbLogin")
        if (isFbLogin === null) {
            window.location.replace("https://www.facebook.com/v5.0/dialog/oauth?client_id=" + appid + "&redirect_uri=" + redirect_url + "&state=10fc2285672a76a9d2d369c35d252dbf&scope=public_profile")
        } else if (isFbLogin != null && isFbLogin > 0) {
            var getFbLoginData = JSON.parse(localStorage.getItem(getfbLoginData_c))
            getLogin(getFbLoginData[0].accessToken)
        }
    }
}


function forgetPassWord() {

    var username = document.querySelector("#retrieve_username_ns").value
    var email = document.querySelector("#retrieve_email_ns").value

    username = formatting.StrTrim(username);
    username = formatting.filterHTML(username);

    if (!formatting.isEmail(email)) {
        Check.check_login_email()
        return;
    }

    if (username && email) {
        sendAjax({
            type: "POST",
            url: Api.getPasswdStep1_api,
            data: {
                username,
                email,
                isIPGame: isIPGame_str,
                language: language_str,
                gameCode: gameCode_str,
                packageName: packageName_str,
                os: os_str
            },
            dataType: 'json',
            beforeSend: function (e) {
                isClick = false
                document.querySelector(".loading").style.display = "block"
                document.querySelector(".showad").style.display = "block"
            },
            success: function (res) {
                document.querySelector(".loading").style.display = "none"
                document.querySelector(".showad").style.display = "none"
                afterClick()
                console.log(res)
                if (res.code === "1020") {
                    alert(res.msg)
                } else {
                    alert(res.msg)
                }

            }
        })
    } else {
        Check.check_login_username()
    }
}

function userRegister() {
    var registered_username = document.querySelector("#registered_username_ns").value
    var registered_userpassword = document.querySelector("#registered_userpassword_ns").value
    var registered_repeatpassword = document.querySelector("#registered_repeatpassword_ns").value
    var registered_email = document.querySelector("#registered_email_ns").value

    console.log(registered_username, registered_userpassword, registered_repeatpassword, registered_email)

    if (registered_username && registered_userpassword && registered_repeatpassword && registered_email) {
        sendAjax({
            type: "POST",
            url: Api.userRegister_api,
            data: {
                username: registered_username,
                password: registered_userpassword,
                repassword: registered_repeatpassword,
                email: registered_email,
                os: os_str,
                language: language_str,
                gameCode: gameCode_str,
                packageName: packageName_str
            },
            dataType: 'json',
            beforeSend: function (e) {
                isClick = false
                document.querySelector(".loading").style.display = "block"
                document.querySelector(".showad").style.display = "block"
            },
            success: function (res) {
                afterClick()
                document.querySelector(".loading").style.display = "block"
                document.querySelector(".showad").style.display = "block"
                console.log(res)
                if (res.code === "1100") {
                    var timer = new Date().getTime()
                    ptData = {
                        name: registered_username,
                        password: registered_userpassword,
                        typename: "회원 로그인",
                        type: "pt",
                        icon: "icon-people",
                        time: timer
                    }
                    ptLoginData.push(ptData)
                    localStorage.setItem(getptLoginData_c, JSON.stringify(ptLoginData))

                    sendAjax({
                        type: "POST",
                        url: Api.userMobileAuth_api,
                        data: {
                            sitecode: siteCode_str,
                            type: res.type,
                            os: os_str,
                            SessionID_LP: res.sessionID,
                            language: language_str,
                            gameCode: gameCode_str,
                            packageName: packageName_str,
                            packageVersion: packageVersion_str
                        },
                        dataType: 'json',
                        beforeSend: function (e) {
                            document.querySelector(".showad").style.display = "block"
                            document.querySelector(".loading").style.display = "block"
                        },
                        success: function (res) {
                            document.querySelector(".showad").style.display = "none"
                            document.querySelector(".loading").style.display = "none"
                            console.log(res)
                            sendData = JSON.stringify(res);
                            loginCallback(sendData);
                        }
                    })
                } else {
                    alert(res.msg)
                }
            }
        })
    } else {
        Check.check_login_username()
    }
}

function userTryToGame() {
    isFirstLogin = localStorage.getItem("FirstLogin")
    console.log(isFirstLogin)
    console.log(isClick)

    if (isFirstLogin === null) {
        console.log("--------->翠花")

        sendAjax({
            type: "POST",
            url: Api.userFastLogin_api,
            data: {
                isFirst: "yes",
                imeiNum: generateUUID(),
                xuhaoNum: generateUUID(),
                language: language_str,
                gameCode: gameCode_str,
                packageName: packageName_str,
                os: os_str
            },
            dataType: 'json',
            beforeSend: function (e) {
                isClick = false
                console.log(isClick)
                document.querySelector(".loading").style.display = "block"
                document.querySelector(".showad").style.display = "block"
            },
            success: function (res) {
                afterClick()
                document.querySelector(".loading").style.display = "none"
                document.querySelector(".showad").style.display = "none"
                console.log(res)

                if (res.code === "1400") {
                    var tryToGameData = {
                        id: res.id,
                        siteCode: res.siteCode,
                        t: res.t,
                        ps: res.ps
                    }
                    sessionID = res.sessionID;

                    localStorage.setItem("tryToGameData", JSON.stringify(tryToGameData))
                    isFirstLogin = 1
                    localStorage.setItem("FirstLogin", isFirstLogin)
                    var time = new Date().getTime()
                    trydata = {
                        name: res.id,
                        id: res.id,
                        type: "player",
                        icon: "icon-94",
                        siteCode: res.siteCode,
                        t: res.t,
                        ps: res.ps,
                        typename: "Player",
                        time
                    }

                    tryLoginData.push(trydata)
                    localStorage.setItem(gettryLoginData_c, JSON.stringify(tryLoginData) || "[]")

                    sendAjax({
                        type: "POST",
                        url: Api.userMobileAuth_api,
                        data: {
                            sitecode: siteCode_str,
                            type: res.type,
                            os: os_str,
                            SessionID_LP: res.sessionID,
                            language: language_str,
                            gameCode: gameCode_str,
                            packageName: packageName_str,
                            packageVersion: packageVersion_str
                        },
                        dataType: 'json',
                        success: function (res) {
                            console.log(res)
                            sendData = JSON.stringify(res);
                            loginCallback(sendData);
                        }
                    })
                }
            }
        })
    } else if (isFirstLogin != null && isFirstLogin > 0) {
        tryToGameData = JSON.parse(localStorage.getItem("tryToGameData"))
        console.log(tryToGameData)
        sendAjax({
            type: "POST",
            url: Api.userFastLogin_api,
            data: {
                isFirst: "no",
                id: tryToGameData.id,
                siteCode: tryToGameData.siteCode,
                t: tryToGameData.t,
                ps: tryToGameData.ps,
                imeiNum: generateUUID(),
                xuhaoNum: generateUUID(),
                language: language_str,
                gameCode: gameCode_str,
                packageName: packageName_str,
                os: os_str
            },
            dataType: 'json',
            beforeSend: function (e) {
                isClick = false
                console.log(isClick)
                document.querySelector(".loading").style.display = "block"
                document.querySelector(".showad").style.display = "block"
            },
            success: function (res) {
                console.log(res)
                $(".loading").hide()
                $(".showad").hide()
                document.querySelector(".loading").style.display = "none"
                document.querySelector(".showad").style.display = "none"
                afterClick()
                console.log(isClick)
                if (res.code === "1400") {
                    tryToGameData = {
                        id: res.id,
                        siteCode: res.siteCode,
                        t: res.t,
                        ps: res.ps
                    }
                    sessionID = res.sessionID;

                    localStorage.setItem("tryToGameData", JSON.stringify(tryToGameData))
                    sendAjax({
                        type: "POST",
                        url: Api.userMobileAuth_api,
                        data: {
                            sitecode: siteCode_str,
                            type: res.type,
                            os: os_str,
                            SessionID_LP: res.sessionID,
                            language: language_str,
                            gameCode: gameCode_str,
                            packageName: packageName_str,
                            packageVersion: packageVersion_str
                        },
                        dataType: 'json',
                        beforeSend: function (e) {
                            $(".loading").show()
                            $(".showad").show()
                            document.querySelector(".loading").style.display = "block"
                            document.querySelector(".showad").style.display = "block"
                        },
                        success: function (res) {
                            document.querySelector(".loading").style.display = "none"
                            document.querySelector(".showad").style.display = "none"
                            console.log(res)
                            sendData = JSON.stringify(res);
                            loginCallback(sendData);
                        }
                    })
                }
            }
        })
    }
}

function userChangePassword() {
    var changePass_phone = document.querySelector("#changePass_phone_ns").value
    var changePass_userpassword = document.querySelector("#changePass_userpassword_ns").value
    var changePass_newpassword = document.querySelector("#changePass_newpassword_ns").value
    var changePass_repeatpassword = document.querySelector("#changePass_repeatpassword_ns").value

    console.log(changePass_phone, changePass_userpassword, changePass_newpassword, changePass_repeatpassword)

    if (changePass_phone && changePass_userpassword && changePass_newpassword && changePass_repeatpassword) {
        sendAjax({
            type: "POST",
            url: Api.userChangePassword_api,
            data: {
                password: changePass_userpassword,
                newpassword: changePass_newpassword,
                renewpassword: changePass_repeatpassword,
                username: changePass_phone,
                language: language_str,
                gameCode: gameCode_str,
                packageName: packageName_str,
                os: os_str
            },
            dataType: 'json',
            beforeSend: function (e) {
                document.querySelector(".loading").style.display = "block"
                document.querySelector(".showad").style.display = "block"
                isClick = false
            },
            success: function (res) {
                document.querySelector(".loading").style.display = "none"
                document.querySelector(".showad").style.display = "none"
                afterClick()
                console.log(res)
                if (res.code === "1009") {
                    alert(res.msg)
                } else {
                    alert(res.msg)
                }
            }
        })
    } else {
        Check.check_login_username()
    }
}

function userUpgradeAccount() {
    var fb_phone = document.querySelector("#fb_username_ns").value
    var fb_userpassword = document.querySelector("#fb_userpassword_ns").value
    var fb_repeatpassword = document.querySelector("#fb_repeatpassword_ns").value
    var fb_email = document.querySelector("#fb_email_ns").value

    var getGameData = JSON.parse(localStorage.getItem("gameData"))
    var getfbData = JSON.parse(localStorage.getItem(getfbLoginData_c))
    console.log(getfbData)

    if (fb_phone && fb_userpassword && fb_repeatpassword && fb_email) {

        sendAjax({
            url: Api.fbuserLoginForMobile_api,
            type: 'POST',
            data: {
                access_token: getfbData[0].accessToken,
                language: getGameData.language,
                gameCode: getGameData.gameCode,
                packageName: getGameData.packageName,
                os: getGameData.os,
                appid: appid,
                tag: "website"
            },
            dataType: 'json',
            beforeSend: function (e) {
                isClick = false
                document.querySelector(".loading").style.display = "block"
                document.querySelector(".showad").style.display = "block"
            },
            success: function (data) {
                afterClick()
                document.querySelector(".loading").style.display = "none"
                document.querySelector(".showad").style.display = "none"
                if (data.code == "6004") {
                    sendAjax({
                        url: Api.userPartnerLogin_api,
                        type: 'POST',
                        data: {
                            siteUsername: data.siteUsername,
                            sitecode: data.sitecode,
                            password: data.password,
                            time: data.time,
                            email: data.email,
                            fbname: data.fbname,
                            language: getGameData.language,
                            gameCode: getGameData.gameCode,
                            packageName: getGameData.packageName,
                            os: getGameData.os
                        },
                        dataType: 'json',
                        success: function (res) {
                            if (res.code == "1400") {

                                sessionID = res.sessionID
                                sendAjax({
                                    type: "POST",
                                    url: Api.userUpgradeAccount_api,
                                    data: {
                                        username: fb_phone,
                                        password: fb_userpassword,
                                        repassword: fb_repeatpassword,
                                        email: fb_email,
                                        SessionID_LP: sessionID,
                                        language: getGameData.language,
                                        gameCode: getGameData.gameCode,
                                        packageName: getGameData.packageName,
                                        os: getGameData.os
                                    },
                                    dataType: 'json',
                                    beforeSend: function (e) {
                                        document.querySelector(".loading").style.display = "block"
                                        document.querySelector(".showad").style.display = "block"
                                        isClick = false
                                    },
                                    success: function (res) {
                                        document.querySelector(".loading").style.display = "none"
                                        document.querySelector(".showad").style.display = "none"
                                        afterClick()
                                        console.log(res)
                                        if (res.code === "1110") {
                                            sendAjax({
                                                url: Api.userLogin_api,
                                                type: "POST",
                                                data: {
                                                    username: fb_phone,
                                                    password: fb_userpassword,
                                                    siteCode: "damoregame",
                                                    t: "1487665362664",
                                                    ck: "7e1d4d53a5d436be64a26dbbca1c511e",
                                                    ismobile: "yes",
                                                    language: language_str,
                                                    gameCode: gameCode_str,
                                                    packageName: packageName_str
                                                },
                                                dataType: 'json',
                                                beforeSend: function (e) {
                                                    document.querySelector(".loading").style.display = "block"
                                                    document.querySelector(".showad").style.display = "block"
                                                },
                                                success: function (res) {
                                                    document.querySelector(".loading").style.display = "none"
                                                    document.querySelector(".showad").style.display = "none"
                                                    if (res.code === "1000") {

                                                        //成功
                                                        sessionID = res.sessionID;
                                                        sendAjax({
                                                            type: "POST",
                                                            url: Api.userMobileAuth_api,
                                                            data: {
                                                                sitecode: siteCode_str,
                                                                type: res.type,
                                                                os: os_str,
                                                                SessionID_LP: res.sessionID,
                                                                language: language_str,
                                                                gameCode: gameCode_str,
                                                                packageName: packageName_str,
                                                                packageVersion: packageVersion_str
                                                            },
                                                            dataType: 'json',
                                                            beforeSend: function (e) {
                                                                document.querySelector(".loading").style.display = "block"
                                                                document.querySelector(".showad").style.display = "block"
                                                            },
                                                            success: function (res) {
                                                                document.querySelector(".loading").style.display = "none"
                                                                document.querySelector(".showad").style.display = "none"

                                                                console.log(res)
                                                                sendData = JSON.stringify(res);
                                                                loginCallback(sendData);
                                                            }
                                                        })
                                                    } else {
                                                        alert(res.msg)
                                                    }
                                                }
                                            })
                                        } else {
                                            alert(res.msg)
                                        }
                                    }
                                })
                            } else {
                                alert(res.msg);
                            }
                        }
                    });
                } else {
                    alert(data.msg);
                }
            }
        });


    } else {
        Check.check_login_username()
    }
}

function tryUpgradeAccount() {
    var play_phone = document.querySelector("#play_username_ns").value
    var play_userpassword = document.querySelector("#play_userpassword_ns").value
    var play_repeatpassword = document.querySelector("#play_repeatpassword_ns").value
    var play_email = document.querySelector("#play_email_ns").value

    var getGameData = JSON.parse(localStorage.getItem("gameData"))
    var tryToGameData = JSON.parse(localStorage.getItem("tryToGameData"))

    if (play_phone && play_userpassword && play_repeatpassword && play_email) {

        sendAjax({
            type: "POST",
            url: Api.userFastLogin_api,
            data: {
                isFirst: "no",
                id: tryToGameData.id,
                siteCode: tryToGameData.siteCode,
                t: tryToGameData.t,
                ps: tryToGameData.ps,
                imeiNum: generateUUID(),
                xuhaoNum: generateUUID(),
                language: language_str,
                gameCode: gameCode_str,
                packageName: packageName_str,
                os: os_str
            },
            dataType: 'json',
            beforeSend: function (e) {
                document.querySelector(".loading").style.display = "block"
                document.querySelector(".showad").style.display = "block"
                isClick = false
            },
            success: function (res) {
                console.log(res)
                document.querySelector(".loading").style.display = "none"
                document.querySelector(".showad").style.display = "none"
                afterClick()
                if (res.code === "1400") {
                    tryToGameData = {
                        id: res.id,
                        siteCode: res.siteCode,
                        t: res.t,
                        ps: res.ps
                    }
                    console.log(tryToGameData)
                    sessionID = res.sessionID;

                    localStorage.setItem("tryToGameData", JSON.stringify(tryToGameData))
                    sendAjax({
                        type: "POST",
                        url: Api.userUpgradeAccount_api,
                        data: {
                            username: play_phone,
                            password: play_userpassword,
                            repassword: play_repeatpassword,
                            email: play_email,
                            SessionID_LP: sessionID,
                            language: getGameData.language,
                            gameCode: getGameData.gameCode,
                            packageName: getGameData.packageName,
                            os: getGameData.os
                        },
                        dataType: 'json',
                        beforeSend: function (e) {
                            document.querySelector(".loading").style.display = "block"
                            document.querySelector(".showad").style.display = "block"
                        },
                        success: function (data) {
                            document.querySelector(".loading").style.display = "none"
                            document.querySelector(".showad").style.display = "none"
                            console.log(data)
                            if (data.code === "1110") {
                                trydata = {
                                    name: play_phone,
                                    type: "player",
                                    icon: "icon-94",
                                    siteCode: res.siteCode,
                                    t: res.t,
                                    ps: res.ps,
                                    id: res.id,
                                    typename: "Player"
                                }
                                tryLoginData = []
                                tryLoginData.push(trydata)
                                localStorage.setItem(gettryLoginData_c, JSON.stringify(tryLoginData))

                                sendAjax({
                                    url: Api.userLogin_api,
                                    type: "POST",
                                    data: {
                                        username: play_phone,
                                        password: play_userpassword,
                                        siteCode: "damoregame",
                                        t: "1487665362664",
                                        ck: "7e1d4d53a5d436be64a26dbbca1c511e",
                                        ismobile: "yes",
                                        language: language_str,
                                        gameCode: gameCode_str,
                                        packageName: packageName_str
                                    },
                                    dataType: 'json',
                                    beforeSend: function (e) {
                                        document.querySelector(".loading").style.display = "block"
                                        document.querySelector(".showad").style.display = "block"
                                    },
                                    success: function (res) {
                                        document.querySelector(".loading").style.display = "none"
                                        document.querySelector(".showad").style.display = "none"
                                        if (res.code === "1000") {

                                            //成功
                                            sessionID = res.sessionID;
                                            sendAjax({
                                                type: "POST",
                                                url: Api.userMobileAuth_api,
                                                data: {
                                                    sitecode: siteCode_str,
                                                    type: res.type,
                                                    os: os_str,
                                                    SessionID_LP: res.sessionID,
                                                    language: language_str,
                                                    gameCode: gameCode_str,
                                                    packageName: packageName_str,
                                                    packageVersion: packageVersion_str
                                                },
                                                dataType: 'json',
                                                beforeSend: function (e) {
                                                    document.querySelector(".loading").style.display = "block"
                                                    document.querySelector(".showad").style.display = "block"
                                                },
                                                success: function (res) {
                                                    document.querySelector(".loading").style.display = "none"
                                                    document.querySelector(".showad").style.display = "none"
                                                    console.log(res)
                                                    sendData = JSON.stringify(res);
                                                    loginCallback(sendData);
                                                }
                                            })
                                        } else {
                                            alert(res.msg)
                                        }
                                    }
                                })
                            } else {
                                alert(data.msg)
                            }
                        }
                    })
                }
            }
        })
    } else {
        Check.check_login_username()
    }
}


function loginCallback(data) {

    console.log(data)
    window.Callback.loginCallback(true, data);
}




var FBID = 0;
var accessToken = 0;
var FBName = "";

let name = "code";

if (name) {
    ch = GetQueryString(name);
    if (ch) {
        getMakeLogin()
    }
}

//fb登錄
function getMakeLogin() {
    sendAjax({
        url: "//gc-flzkr.fjvzmgame.com/baseFacebook/login.do",
        type: "POST",
        data: {
            fbAppID: appid,
            redirectUrl: redirect_url,
            code: ch,
        },
        dataType: 'json',
        success: function (res) {
            console.log(res);
            accessToken = res.access_token;
            if (res.code === "1000") {
                sendAjax({
                    url: "https://graph.facebook.com/v5.0/me?access_token=" +
                        res.access_token +
                        "",
                    type: "GET",
                    data: {},
                    dataType: "json",
                    success: function (result) {
                        console.log(result);
                        FBID = result.id;
                        FBName = result.name;
                        accessToken = res.access_token
                        isFbLogin = 1
                        localStorage.setItem("FbLogin", isFbLogin)
                        if (res.code === "1000") {
                            getLogin(accessToken)
                            var time = new Date().getTime()
                            fbdata = {
                                typename: "FackBook",
                                name: FBName,
                                accessToken,
                                type: "fb",
                                time,
                                icon: "icon-Facebook"
                            }

                            fbLoginData.push(fbdata)
                            localStorage.setItem(getfbLoginData_c, JSON.stringify(fbLoginData) || "[]")
                        }
                    }
                });
            }
        }
    });
}

function getLogin(accessToken) {
    var getGameData = JSON.parse(localStorage.getItem("gameData"))
    console.log(getGameData)
    sendAjax({
        url: Api.fbuserLoginForMobile_api,
        type: 'POST',
        data: {
            access_token: accessToken,
            language: getGameData.language,
            gameCode: getGameData.gameCode,
            packageName: getGameData.packageName,
            os: getGameData.os,
            appid: appid,
            tag: "website"
        },
        dataType: 'json',
        beforeSend: function (e) {
            isClick = false
            document.querySelector(".quitLogion").style.display = "none"
            document.querySelector(".loading").style.display = "none"
            document.querySelector(".showad").style.display = "none"
            clearTimeout(timer);
            document.querySelector(".loading").style.display = "block"
            document.querySelector(".showad").style.display = "block"
        },
        success: function (data) {
            afterClick()
            document.querySelector(".loading").style.display = "none"
            document.querySelector(".showad").style.display = "none"
            if (data.code == "6004") {
                sendAjax({
                    url: Api.userPartnerLogin_api,
                    type: 'POST',
                    data: {
                        siteUsername: data.siteUsername,
                        sitecode: data.sitecode,
                        password: data.password,
                        time: data.time,
                        email: data.email,
                        fbname: data.fbname,
                        language: getGameData.language,
                        gameCode: getGameData.gameCode,
                        packageName: getGameData.packageName,
                        os: getGameData.os
                    },
                    dataType: 'json',
                    jsonp: 'callback',
                    success: function (res) {
                        if (res.code == "1400") {

                            sessionID = res.sessionID
                            sendAjax({
                                type: "POST",
                                url: Api.userMobileAuth_api,
                                data: {
                                    sitecode: getGameData.siteCode,
                                    type: res.type,
                                    os: getGameData.os,
                                    SessionID_LP: res.sessionID,
                                    language: getGameData.language,
                                    gameCode: getGameData.gameCode,
                                    packageName: getGameData.packageName,
                                    packageVersion: packageVersion_str
                                },
                                dataType: 'json',
                                success: function (res) {
                                    console.log(res)
                                    sendData = JSON.stringify(res);
                                    loginCallback(sendData);
                                }
                            })
                        } else {
                            alert(res.msg);
                        }
                    },
                    error: function () {}
                });

            } else {
                alert(data.msg);
            }
        },
        error: function () {}
    });
}


// 当不使用jq时 请求方式
function sendAjax(config) {
    /**
        type:请求类型 默认为 get
        url:请求路径,
        data:需要传递给服务器端的参数,
        dataType:需要服务端 返回的数据格式,默认为 text
        async:请求是否 异步，默认为 异步
        timeout:请求时间 默认为五秒 五秒后通过xhr.abort()中断请求
        beforeSend:在请求结果返回前的动作,可以提升用户体验
        success:请求成功后返回的结果
        error:请求失败后返回的结果
    */
    config = {
        type: config.type || "get",
        url: config.url || "",
        data: config.data || {},
        dataType: config.dataType || "text",
        async: config.async || true,
        timeout: config.timeout || 5000,
        beforeSend: config.beforeSend || function () {},
        success: config.success || function () {},
        error: config.error || function () {}
    }
    // 将对象类型的数据转化为 字符串格式
    var str = objectToString(config.data)
    // 获取浏览器请求对象
    var xhr, timer;
    // 在请求结果返回前动作
    config.beforeSend()
    xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Micorsoft.XMLHTTP")
    // 要求服务器返回的数据格式
    xhr.responseType = config.dataType
    // 将请求类型 转化为小写格式
    // get请求参数直接拼接在 url 后面
    // post请求在xhr.send()里传递参数
    if (config.type.toLowerCase() === "get") {
        xhr.open(config.type, config.url + "?" + str, config.async)
        xhr.send()
    } else {
        xhr.open(config.type, config.url, config.async)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send(str)
    }
    // 请求过程中的状态
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            clearInterval(timer)
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                config.success(JSON.parse(xhr.response))
            } else {
                config.error(xhr)
            }
        }
    }

    timer = setInterval(function () {
        clearInterval(timer)
        xhr.abort()
    }, config.timeout)
}

// 将对象转化为字符串
function objectToString(data) {
    var data = data || {}
    data.jq_random = Math.random()
    var res = []
    for (key in data) {
        res.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    }
    return res.join("&")
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