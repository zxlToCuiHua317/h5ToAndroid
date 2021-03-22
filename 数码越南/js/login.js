$(function () {
    if (arrData != undefined && arrData.length > 0) {
        var autoLogin = arrData[arrData.length - 1]
        $(".title_name").text(autoLogin.name)
        $(".quitLogion").show()
        $(".loading").show()
        $(".showad").show()

        timer = setTimeout(function () {
            switch (autoLogin.type) {
                case "pt":
                    $.ajax({
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
                        dataType: "jsonp",
                        beforeSend: function (e) {
                            $(".loading").show()
                            $(".showad").show()
                        },
                        success: function (res) {
                            $(".loading").hide()
                            $(".showad").hide()
                            $(".quitLogion").hide()
                            if (res.code === "1000") {
                                //成功
                                sessionID = res.sessionID;
                                $.ajax({
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
                                        packageVersion: gamedata.packageVersion,
                                        onid:gameData.onid
                                    },
                                    dataType: "jsonp",
                                    success: function (res) {
                                        $(".quitLogion").hide()
                                        $(".loading").hide()
                                        $(".showad").hide()
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
                    $.ajax({
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
                        dataType: 'jsonp',
                        beforeSend: function (e) {
                            $(".loading").show()
                            $(".showad").show()
                        },
                        success: function (data) {
                            $(".loading").hide()
                            $(".showad").hide()
                            $(".quitLogion").hide()
                            if (data.code == "6004") {
                                $.ajax({
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
                                    dataType: 'jsonp',
                                    jsonp: 'callback',
                                    success: function (res) {
                                        if (res.code == "1400") {

                                            sessionID = res.sessionID
                                            $.ajax({
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
                                                    packageVersion: packageVersion_str,
                                                    onid:onid
                                                },
                                                dataType: "jsonp",
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
                    $.ajax({
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
                        dataType: "jsonp",
                        beforeSend: function (e) {
                            $(".loading").show()
                            $(".showad").show()
                        },
                        success: function (res) {
                            console.log(res)
                            $(".loading").hide()
                            $(".showad").hide()
                            $(".quitLogion").hide()

                            if (res.code === "1400") {

                                sessionID = res.sessionID;
                                $.ajax({
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
                                        packageVersion: gamedata.packageVersion,
                                        onid:gameData.onid
                                    },
                                    dataType: "jsonp",
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
    $(".quit_btn").click(function () {
        $(".quitLogion").hide()
        $(".loading").hide()
        $(".showad").hide()
        clearTimeout(timer)
    })
})


var getDataForPt = JSON.parse(localStorage.getItem(getptLoginData_c))

if (getDataForPt != null) {
    ptLoginData = getDataForPt
}


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

if (GetQueryString("gameCode")) {
    var gameData = {
        gameCode: gameCode_str,
        serverCode: serverCode_str,
        siteCode: siteCode_str,
        isIPGame: isIPGame_str,
        packageName: packageName_str,
        language: language_str,
        os: os_str,
        packageVersion: packageVersion_str,
        onid:onid
    }
    console.log(gameData)
    var Data = JSON.stringify(gameData)
    localStorage.setItem("gameData", JSON.stringify(gameData))
}


function login_mobile() {
    var username = $("#login_username_ns").val()
    var password = $("#login_userpassword_ns").val()

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

    $.ajax({
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
        dataType: "jsonp",
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
                $.ajax({
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
                        packageVersion: packageVersion_str,
                        onid:onid
                    },
                    dataType: "jsonp",
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

$(".login_button_ns").click(function () {

    if (isClick) {
        login_mobile()
    }
})

$(".retrieve_password_ns").click(function () {

    if (isClick) {
        forgetPassWord()
    }
})

$(".registered_button_ns").click(function () {

    if (isClick) {
        userRegister()
    }
})

$(".changePass_button_ns").click(function () {

    if (isClick) {
        userChangePassword()
    }
})

$(".fb_button_ns").click(function () {

    if (isClick) {
        userUpgradeAccount()
    }
})

$(".play_button_ns").click(function () {

    if (isClick) {
        tryUpgradeAccount()
    }
})

$(".handle2").click(function () {

    if (isClick) {
        userTryToGame()
    }
})

$(".fbLogin").click(function () {
    if (isClick) {
        isFbLogin = localStorage.getItem("FbLogin")
        if (isFbLogin === null) {
            window.location.replace("https://www.facebook.com/v5.0/dialog/oauth?client_id=" + appid + "&redirect_uri=" + redirect_url + "&state=10fc2285672a76a9d2d369c35d252dbf&scope=public_profile")
        } else if (isFbLogin != null && isFbLogin > 0) {
            var getFbLoginData = JSON.parse(localStorage.getItem(getfbLoginData_c))
            getLogin(getFbLoginData[0].accessToken)
        }
    }
})

function forgetPassWord() {

    var username = $("#retrieve_username_ns").val()
    var email = $("#retrieve_email_ns").val()

    username = formatting.StrTrim(username);
    username = formatting.filterHTML(username);

    if (!formatting.isEmail(email)) {
        Check.check_login_email()
        return;
    }

    if (username && email) {
        $.ajax({
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
            dataType: "jsonp",
            beforeSend: function (e) {
                isClick = false
                $(".loading").show()
                $(".showad").show()
            },
            success: function (res) {
                $(".loading").hide()
                $(".showad").hide()
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
    var registered_username = $("#registered_username_ns").val()
    var registered_userpassword = $("#registered_userpassword_ns").val()
    var registered_repeatpassword = $("#registered_repeatpassword_ns").val()
    var registered_email = $("#registered_email_ns").val()

    console.log(registered_username, registered_userpassword, registered_repeatpassword, registered_email)

    if (registered_username && registered_userpassword && registered_repeatpassword && registered_email) {
        $.ajax({
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
            dataType: "jsonp",
            beforeSend: function (e) {
                isClick = false
                $(".loading").show()
                $(".showad").show()
            },
            success: function (res) {
                afterClick()
                $(".loading").hide()
                $(".showad").hide()
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

                    $.ajax({
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
                            packageVersion: packageVersion_str,
                            onid:onid
                        },
                        dataType: "jsonp",
                        beforeSend: function (e) {
                            $(".showad").show()
                            $(".loading").show()
                        },
                        success: function (res) {
                            $(".showad").hide()
                            $(".loading").hide()
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

        $.ajax({
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
            dataType: "jsonp",
            beforeSend: function (e) {
                isClick = false
                console.log(isClick)
                $(".loading").show()
                $(".showad").show()
            },
            success: function (res) {
                afterClick()
                $(".loading").hide()
                $(".showad").hide()
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

                    $.ajax({
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
                            packageVersion: packageVersion_str,
                            onid:onid
                        },
                        dataType: "jsonp",
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
        $.ajax({
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
            dataType: "jsonp",
            beforeSend: function (e) {
                isClick = false
                console.log(isClick)
                $(".loading").show()
                $(".showad").show()
            },
            success: function (res) {
                console.log(res)
                $(".loading").hide()
                $(".showad").hide()
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
                    $.ajax({
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
                            packageVersion: packageVersion_str,
                            onid:onid
                        },
                        dataType: "jsonp",
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
                }
            }
        })
    }
}

function userChangePassword() {
    var changePass_phone = $("#changePass_phone_ns").val()
    var changePass_userpassword = $("#changePass_userpassword_ns").val()
    var changePass_newpassword = $("#changePass_newpassword_ns").val()
    var changePass_repeatpassword = $("#changePass_repeatpassword_ns").val()

    console.log(changePass_phone, changePass_userpassword, changePass_newpassword, changePass_repeatpassword)

    if (changePass_phone && changePass_userpassword && changePass_newpassword && changePass_repeatpassword) {
        $.ajax({
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
            dataType: "jsonp",
            beforeSend: function (e) {
                $(".loading").show()
                $(".showad").show()
                isClick = false
            },
            success: function (res) {
                $(".loading").show()
                $(".showad").show()
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
    var fb_phone = $("#fb_username_ns").val()
    var fb_userpassword = $("#fb_userpassword_ns").val()
    var fb_repeatpassword = $("#fb_repeatpassword_ns").val()
    var fb_email = $("#fb_email_ns").val()

    var getGameData = JSON.parse(localStorage.getItem("gameData"))
    var getfbData = JSON.parse(localStorage.getItem(getfbLoginData_c))
    console.log(getfbData)

    if (fb_phone && fb_userpassword && fb_repeatpassword && fb_email) {

        $.ajax({
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
            dataType: 'jsonp',
            beforeSend: function (e) {
                isClick = false
                $(".loading").show()
                $(".showad").show()
            },
            success: function (data) {
                afterClick()
                $(".loading").hide()
                $(".showad").hide()
                if (data.code == "6004") {
                    $.ajax({
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
                        dataType: 'jsonp',
                        jsonp: 'callback',
                        success: function (res) {
                            if (res.code == "1400") {

                                sessionID = res.sessionID
                                $.ajax({
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
                                    dataType: "jsonp",
                                    beforeSend: function (e) {
                                        $(".loading").show()
                                        $(".showad").show()
                                        isClick = false
                                    },
                                    success: function (res) {
                                        $(".loading").hide()
                                        $(".showad").hide()
                                        afterClick()
                                        console.log(res)
                                        if (res.code === "1110") {
                                            $.ajax({
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
                                                dataType: "jsonp",
                                                beforeSend: function (e) {
                                                    $(".loading").show()
                                                    $(".showad").show()
                                                },
                                                success: function (res) {
                                                    $(".loading").hide()
                                                    $(".showad").hide()
                                                    if (res.code === "1000") {

                                                        //成功
                                                        sessionID = res.sessionID;
                                                        $.ajax({
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
                                                                packageVersion: packageVersion_str,
                                                                onid:onid
                                                            },
                                                            dataType: "jsonp",
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
    var play_phone = $("#play_username_ns").val()
    var play_userpassword = $("#play_userpassword_ns").val()
    var play_repeatpassword = $("#play_repeatpassword_ns").val()
    var play_email = $("#play_email_ns").val()

    var getGameData = JSON.parse(localStorage.getItem("gameData"))
    var tryToGameData = JSON.parse(localStorage.getItem("tryToGameData"))

    if (play_phone && play_userpassword && play_repeatpassword && play_email) {

        $.ajax({
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
            dataType: "jsonp",
            beforeSend: function (e) {
                $(".loading").show()
                $(".showad").show()
                isClick = false
            },
            success: function (res) {
                console.log(res)
                $(".loading").hide()
                $(".showad").hide()
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
                    $.ajax({
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
                        dataType: "jsonp",
                        beforeSend: function (e) {
                            $(".loading").show()
                            $(".showad").show()
                        },
                        success: function (data) {
                            $(".loading").hide()
                            $(".showad").hide()
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

                                $.ajax({
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
                                    dataType: "jsonp",
                                    beforeSend: function (e) {
                                        $(".loading").show()
                                        $(".showad").show()
                                    },
                                    success: function (res) {
                                        $(".loading").hide()
                                        $(".showad").hide()
                                        if (res.code === "1000") {

                                            //成功
                                            sessionID = res.sessionID;
                                            $.ajax({
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
                                                    packageVersion: packageVersion_str,
                                                    onid:onid
                                                },
                                                dataType: "jsonp",
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
    $.ajax({
        url: "//gc-flzkr.fjvzmgame.com/baseFacebook/login.do",
        type: "POST",
        data: {
            fbAppID: appid,
            redirectUrl: redirect_url,
            code: ch,
        },
        dataType: "jsonp",
        success: function (res) {
            console.log(res);
            accessToken = res.access_token;
            if (res.code === "1000") {
                $.ajax({
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
    $.ajax({
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
        dataType: 'jsonp',
        beforeSend: function (e) {
            isClick = false
            $(".quitLogion").hide();
            $(".loading").hide();
            $(".showad").hide();
            clearTimeout(timer);
            $(".loading").show()
            $(".showad").show()
        },
        success: function (data) {
            afterClick()
            $(".loading").hide()
            $(".showad").hide()
            if (data.code == "6004") {
                $.ajax({
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
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    success: function (res) {
                        if (res.code == "1400") {

                            sessionID = res.sessionID
                            $.ajax({
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
                                    packageVersion: packageVersion_str,
                                    onid:onid
                                },
                                dataType: "jsonp",
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