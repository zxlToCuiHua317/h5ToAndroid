"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isOpenRule = 0;
$(function () {
    var getisOpenRule = localStorage.getItem("isOpenRule");
    console.log(getisOpenRule);
    if (getisOpenRule === null) {
        isOpenRule = 0;
    } else {
        isOpenRule = getisOpenRule;
    }

    switch (isOpenRule) {
        case 1:
            break;
        case 0:
            $(".bg").show();
            break;
    }
});

var leftShow = false;
$(".left-btn").click(function () {
    $(".left-raido").show();
    leftShow = true;
});

$(".left-raido").click(function () {
    $(".left-raido").hide();
    leftShow = false;
});

$(".close").click(function () {
    $(".bg").hide();
});
$(".arrbtn").click(function () {
    if (leftShow) {
        $(".bg").hide();
        leftShow = false;
        $(".left-raido").hide();

        isOpenRule = 1;
        localStorage.setItem("isOpenRule", isOpenRule);
    } else {
        alert(language.KR.lp_register_code_agreerule);
    }
});

$(".handle3").click(function () {
    $(".automatic_login_ns").hide();
    $(".login_inp").show();
});

$(".login_logo_inp .back_ns").click(function () {
    $(".automatic_login_ns").show();
    $(".login_inp").hide();
});
$(".forget_password_ns").click(function () {
    $(".forget_password").show();
    $(".login_inp").hide();
});
$(".login_logo_forget .back_ns").click(function () {
    $(".forget_password").hide();
    $(".login_inp").show();
});
$(".click_registered_ns").click(function () {
    $(".login_inp").hide();
    $(".login_zc").show();
});
$(".login_logo_zc .back_ns").click(function () {
    $(".login_zc").hide();
    $(".login_inp").show();
});
$(".account_management_ns").click(function () {
    $(".login_inp").hide();
    $(".account_management").show();
});
$(".login_logo_account .back_ns").click(function () {
    $(".login_inp").show();
    $(".account_management").hide();
});

$(".login_logo_changePass .back_ns").click(function () {
    $(".account_changePass").hide();
    $(".account_management").show();
});
$(".login_logo_play .back_ns").click(function () {
    $(".account_play").hide();
    $(".account_management").show();
});
$(".login_logo_fb .back_ns").click(function () {
    $(".account_fb").hide();
    $(".account_management").show();
});
$(".account1_ns").click(function () {
    $(".account_management").hide();
    $(".account_changePass").show();
});
$(".account2_ns").click(function () {
    $(".account_management").hide();
    $(".account_play").show();
});
$(".account3_ns").click(function () {
    $(".account_management").hide();
    $(".account_fb").show();
});

$(".sel-down").click(function () {
    $(".down_list").fadeIn(500);
    $(".sel-down").hide();
    $(".sel-up").show();
});

$(".sel-up").click(function () {
    $(".down_list").fadeOut(500);
    $(".sel-down").show();
    $(".sel-up").hide();
});

$('.login_username_ns').on('focus keyup', function () {
    var val = $(this).val();
    if (val != '') {
        $(this).next().show();
    } else if (val == '') {
        $(this).next().hide();
    }
});

$('.clear_ns').click(function () {
    clearUser(this);
});

function clearUser(obj) {
    var pass = $(obj).prev();
    pass.val('');
}
$('.show_ns').click(function () {
    showPass(this);
});

function showPass(obj) {
    var pass = $(obj).prev();
    var temp = pass.val();
    var img = $(obj).children();
    var ret = pass.attr("type");
    if (ret == 'password') {
        pass.attr("type", "text");
        img.attr("src", "//awscdnflzkrone.fjvzmgame.com/gc_file/webLogin/login/img/ear.png");
    } else {
        pass.attr("type", "password");
        img.attr("src", "//awscdnflzkrone.fjvzmgame.com/gc_file/webLogin/login/img/ear_blue.png");
    }
    pass.val(temp);
}

$(".item").click(function () {
    $(".down_list").hide();
    $(".sel-down").show();
    $(".sel-up").hide();
});

var getFbLoginData = JSON.parse(localStorage.getItem("fbLoginData"));
var getPtLoginData = JSON.parse(localStorage.getItem("ptLoginData"));
var getTryLoginData = JSON.parse(localStorage.getItem("tryLoginData"));

console.log(getTryLoginData);
if (getFbLoginData.length === 0 && getPtLoginData.length === 0 && getTryLoginData.length === 0) {
    $(".down_list").hide();
} else if (getFbLoginData && getPtLoginData && getTryLoginData) {
    console.log("三个数组都有");
    var arrData = [].concat(_toConsumableArray(getPtLoginData), _toConsumableArray(getFbLoginData), _toConsumableArray(getTryLoginData));
    arrData.sort(compare("time"));
    console.log(arrData);
    $(".sel-title").text(arrData[arrData.length - 1].name);
    $(".sel-img").addClass(arrData[arrData.length - 1].icon);
    var str = "";
    arrData.forEach(function (item, index) {
        str += " <li class=\"item" + index + "\">\n                            <span class=\"item-img iconfont " + item.icon + "\"></span>\n                            <span class=\"item-title\">" + item.name + "</span>\n                            <span class=\"item-down iconfont icon-shanchu\"></span>\n                   </li>";
    });
    $(".down_list ul").html(str);
}

var gamedata = JSON.parse(localStorage.getItem("gameData"));

$("ul").on("click", ".item-down", function () {
    var index = $(this).parent().index();
    console.log(arrData);
    if (arrData[index].type === "fb") {
        if (window.confirm("삭제 하시겠습니까")) {
            console.log(getFbLoginData[index]);
            var delData = getFbLoginData.indexOf(arrData[index]);
            getFbLoginData.splice(delData, 1);
            localStorage.setItem("fbLoginData", JSON.stringify(getFbLoginData));
            localStorage.removeItem("FbLogin");

            if (getFbLoginData.length === 0) {
                getFbLoginData = [];
                if (getPtLoginData.length > 0 && getTryLoginData.length > 0) {
                    console.log(getPtLoginData);
                    arrData = [].concat(_toConsumableArray(getPtLoginData), _toConsumableArray(getTryLoginData));
                    str = "";

                    $(".sel-title").text(getPtLoginData[0].name);
                    $(".sel-img").removeClass("icon-Facebook").addClass(getPtLoginData[0].icon);

                    arrData.forEach(function (item, index) {
                        console.log(item);
                        str += " <li class=\"item" + index + "\">\n                                            <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                            <span class=\"item-title\">" + item.name + "</span>\n                                            <span class=\"item-down iconfont icon-shanchu\"></span>\n                                </li>";
                    });

                    $(".down_list ul").html(str);
                } else if (getPtLoginData.length > 0 && getTryLoginData.length === 0) {
                    console.log(getPtLoginData);
                    arrData = [].concat(_toConsumableArray(getPtLoginData));
                    str = "";

                    $(".sel-title").text(getPtLoginData[0].name);
                    $(".sel-img").removeClass("icon-Facebook").addClass(getPtLoginData[0].icon);

                    arrData.forEach(function (item, index) {
                        console.log(item);
                        str += " <li class=\"item" + index + "\">\n                                            <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                            <span class=\"item-title\">" + item.name + "</span>\n                                            <span class=\"item-down iconfont icon-shanchu\"></span>\n                                </li>";
                    });

                    $(".down_list ul").html(str);
                } else if (getPtLoginData.length === 0 && getTryLoginData.length > 0) {
                    console.log(getPtLoginData);
                    arrData = [].concat(_toConsumableArray(getTryLoginData));
                    str = "";

                    $(".sel-title").text(getTryLoginData[0].name);
                    $(".sel-img").removeClass("icon-Facebook").addClass(getTryLoginData[0].icon);

                    arrData.forEach(function (item, index) {
                        console.log(item);
                        str += " <li class=\"item" + index + "\">\n                                            <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                            <span class=\"item-title\">" + item.name + "</span>\n                                            <span class=\"item-down iconfont icon-shanchu\"></span>\n                                </li>";
                    });

                    $(".down_list ul").html(str);
                } else {
                    $(".down_list ul").html("");
                    $(".sel-title").text("");
                    $(".sel-img").removeClass("icon-Facebook");
                }
            }
            $(".down_list").hide();
            $(".sel-up").hide();
            $(".sel-down").show();
        }
    } else if (arrData[index].type === "pt") {
        if (window.confirm("삭제 하시겠습니까")) {
            console.log(arrData[index]);
            var selData = getPtLoginData.indexOf(arrData[index]);
            getPtLoginData.splice(selData, 1);
            localStorage.setItem("ptLoginData", JSON.stringify(getPtLoginData));
            console.log(arrData);
            console.log(getPtLoginData);
            // location.reload(true)
            if (getPtLoginData.length === 0) {
                getPtLoginData = [];
                console.log(getFbLoginData);
                str = "";
                if (getFbLoginData.length > 0 && getTryLoginData.length > 0) {
                    arrData = [].concat(_toConsumableArray(getFbLoginData), _toConsumableArray(getTryLoginData));
                    $(".sel-title").text(arrData[0].name);
                    $(".sel-img").removeClass("icon-people").addClass(arrData[0].icon);

                    arrData.forEach(function (item, index) {
                        console.log(item);
                        str += " <li class=\"item" + index + "\">\n                                            <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                            <span class=\"item-title\">" + item.name + "</span>\n                                            <span class=\"item-down iconfont icon-shanchu\"></span>\n                                </li>";
                    });

                    $(".down_list ul").html(str);
                } else if (getFbLoginData.length > 0 && getTryLoginData.length === 0) {
                    arrData = [].concat(_toConsumableArray(getFbLoginData), _toConsumableArray(getTryLoginData));
                    $(".sel-title").text(arrData[0].name);
                    $(".sel-img").removeClass("icon-people").addClass(arrData[0].icon);
                    str = "";
                    str += " <li class=\"item" + index + "\">\n                                            <span class=\"item-img iconfont " + arrData[0].icon + "\"></span>\n                                            <span class=\"item-title\">" + arrData[0].name + "</span>\n                                            <span class=\"item-down iconfont icon-shanchu\"></span>\n                                </li>";
                    $(".down_list ul").html(str);
                } else if (getFbLoginData.length === 0 && getTryLoginData.length > 0) {
                    arrData = [].concat(_toConsumableArray(getFbLoginData), _toConsumableArray(getTryLoginData));
                    $(".sel-title").text(arrData[0].name);
                    $(".sel-img").removeClass("icon-people").addClass(arrData[0].icon);
                    str = "";
                    str += " <li class=\"item" + index + "\">\n                                            <span class=\"item-img iconfont " + arrData[0].icon + "\"></span>\n                                            <span class=\"item-title\">" + arrData[0].name + "</span>\n                                            <span class=\"item-down iconfont icon-shanchu\"></span>\n                                </li>";
                    $(".down_list ul").html(str);
                } else {
                    $(".down_list ul").html("");
                    $(".sel-title").text("");
                    $(".sel-img").removeClass("icon-people");
                }
            } else {
                console.log("1");
                if (getFbLoginData.length > 0 && getPtLoginData && getTryLoginData.length > 0) {
                    str = "";
                    arrData = [].concat(_toConsumableArray(getPtLoginData), _toConsumableArray(getFbLoginData), _toConsumableArray(getTryLoginData));
                    $(".sel-title").text(arrData[0].name);
                    $(".sel-img").removeClass("icon-people").addClass(arrData[0].icon);
                    arrData.forEach(function (item, index) {
                        str += " <li class=\"item" + index + "\">\n                                        <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                        <span class=\"item-title\">" + item.name + "</span>\n                                        <span class=\"item-down iconfont icon-shanchu\"></span>\n                                    </li>";
                    });
                    $(".down_list ul").html(str);
                } else if (getFbLoginData.length === 0 && getPtLoginData && getTryLoginData.length > 0) {
                    str = "";
                    arrData = [].concat(_toConsumableArray(getPtLoginData), _toConsumableArray(getTryLoginData));
                    $(".sel-title").text(arrData[0].name);
                    $(".sel-img").removeClass("icon-people").addClass(arrData[0].icon);
                    arrData.forEach(function (item, index) {
                        str += " <li class=\"item" + index + "\">\n                                        <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                        <span class=\"item-title\">" + item.name + "</span>\n                                        <span class=\"item-down iconfont icon-shanchu\"></span>\n                                    </li>";
                    });
                    $(".down_list ul").html(str);
                } else if (getFbLoginData.length > 0 && getPtLoginData && getTryLoginData.length === 0) {
                    str = "";
                    arrData = [].concat(_toConsumableArray(getPtLoginData), _toConsumableArray(getFbLoginData));
                    $(".sel-title").text(arrData[0].name);
                    $(".sel-img").removeClass("icon-people").addClass(arrData[0].icon);
                    arrData.forEach(function (item, index) {
                        str += " <li class=\"item" + index + "\">\n                                        <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                        <span class=\"item-title\">" + item.name + "</span>\n                                        <span class=\"item-down iconfont icon-shanchu\"></span>\n                                    </li>";
                    });
                    $(".down_list ul").html(str);
                } else if (getFbLoginData.length === 0 && getPtLoginData && getTryLoginData.length === 0) {
                    console.log("2");
                    str = "";
                    arrData = [].concat(_toConsumableArray(getPtLoginData));

                    $(".sel-title").text(arrData[0].name);
                    $(".sel-img").removeClass("icon-people").addClass(arrData[0].icon);
                    arrData.forEach(function (item, index) {
                        console.log(index);
                        str += " <li class=\"item" + index + "\">\n                                        <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                        <span class=\"item-title\">" + item.name + "</span>\n                                        <span class=\"item-down iconfont icon-shanchu\"></span>\n                                      </li>";
                    });
                    $(".down_list ul").html(str);
                }
            }
            $(".down_list").hide();
            $(".sel-up").hide();
            $(".sel-down").show();
        }
    } else if (arrData[index].type === "player") {
        if (window.confirm("삭제 하시겠습니까")) {
            console.log(getTryLoginData[index]);

            var tryDelData = getTryLoginData.indexOf(arrData[index]);
            getTryLoginData.splice(tryDelData, 1);
            localStorage.setItem("tryLoginData", JSON.stringify(getTryLoginData));
            localStorage.removeItem("FirstLogin");

            if (getTryLoginData.length === 0) {
                getTryLoginData = [];
                if (getPtLoginData.length > 0 && getFbLoginData.length > 0) {
                    console.log(getPtLoginData);
                    arrData = [].concat(_toConsumableArray(getPtLoginData), _toConsumableArray(getFbLoginData));
                    str = "";

                    $(".sel-title").text(getPtLoginData[0].name);
                    $(".sel-img").removeClass("icon-people").addClass(getPtLoginData[0].icon);

                    arrData.forEach(function (item, index) {
                        console.log(item);
                        str += " <li class=\"item" + index + "\">\n                                            <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                            <span class=\"item-title\">" + item.name + "</span>\n                                            <span class=\"item-down iconfont icon-shanchu\"></span>\n                                </li>";
                    });

                    $(".down_list ul").html(str);
                } else if (getPtLoginData.length > 0 && getFbLoginData.length === 0) {
                    console.log(getPtLoginData);
                    arrData = [].concat(_toConsumableArray(getPtLoginData));
                    str = "";

                    $(".sel-title").text(getPtLoginData[0].name);
                    $(".sel-img").removeClass("icon-people").addClass(getPtLoginData[0].icon);

                    arrData.forEach(function (item, index) {
                        console.log(item);
                        str += " <li class=\"item" + index + "\">\n                                            <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                            <span class=\"item-title\">" + item.name + "</span>\n                                            <span class=\"item-down iconfont icon-shanchu\"></span>\n                                </li>";
                    });

                    $(".down_list ul").html(str);
                } else if (getPtLoginData.length === 0 && getFbLoginData.length > 0) {
                    console.log(getPtLoginData);
                    arrData = [].concat(_toConsumableArray(getFbLoginData));
                    str = "";

                    $(".sel-title").text(getFbLoginData[0].name);
                    $(".sel-img").removeClass("icon-people").addClass(getFbLoginData[0].icon);

                    arrData.forEach(function (item, index) {
                        console.log(item);
                        str += " <li class=\"item" + index + "\">\n                                            <span class=\"item-img iconfont " + item.icon + "\"></span>\n                                            <span class=\"item-title\">" + item.name + "</span>\n                                            <span class=\"item-down iconfont icon-shanchu\"></span>\n                                </li>";
                    });

                    $(".down_list ul").html(str);
                } else {
                    $(".down_list ul").html("");
                    $(".sel-title").text("");
                    $(".sel-img").removeClass("icon-94");
                }
            }
            $(".down_list").hide();
            $(".sel-up").hide();
            $(".sel-down").show();
        }
    }
});

$("ul").on("click", ".item-title", function () {
    var indexs = $(this).parent().index();
    if (arrData[indexs].type === "fb") {
        $(".sel-title").text(arrData[indexs].name);
        $(".sel-img").removeClass("icon-people icon-94").addClass(arrData[indexs].icon);
        $(".down_list").hide();
        $(".sel-up").hide();
        $(".sel-down").show();
    } else if (arrData[indexs].type === "pt") {
        $(".sel-title").text(arrData[indexs].name);
        $(".sel-img").removeClass("icon-Facebook icon-94").addClass(arrData[indexs].icon);
        $(".down_list").hide();
        $(".sel-up").hide();
        $(".sel-down").show();
    } else if (arrData[indexs].type === "player") {
        $(".sel-title").text(arrData[indexs].name);
        $(".sel-img").removeClass("icon-Facebook icon-people").addClass(arrData[indexs].icon);
        $(".down_list").hide();
        $(".sel-up").hide();
        $(".sel-down").show();
    }
});

$("#enter_game_ns").click(function () {

    var username = $(".sel-title").text();
    console.log(username);
    console.log(isClick);

    if (isClick) {
        arrData.forEach(function (item, index) {
            if (item.type === "pt") {
                if (item.name === username) {
                    $.ajax({
                        url: Api.userLogin_api,
                        type: "POST",
                        data: {
                            username: item.name,
                            password: item.password,
                            siteCode: "damoregame",
                            t: "1487665362664",
                            ck: "7e1d4d53a5d436be64a26dbbca1c511e",
                            ismobile: "yes",
                            language: gamedata.language,
                            gameCode: gamedata.gameCode,
                            packageName: gamedata.packageName
                        },
                        dataType: "jsonp",
                        beforeSend: function beforeSend(e) {
                            $(".loading").show();
                            $(".showad").show();
                            isClick = false;
                        },
                        success: function success(res) {
                            $(".loading").hide();
                            $(".showad").hide();
                            afterClick();
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
                                        packageVersion: gamedata.packageVersion
                                    },
                                    dataType: "jsonp",
                                    success: function success(res) {
                                        console.log(res);
                                        var timer = new Date().getTime();
                                        item.time = timer;

                                        if (getPtLoginData[chindex].name === item.name) {
                                            getPtLoginData[chindex] = arrData[chindex];
                                        }
                                        localStorage.setItem("ptLoginData", JSON.stringify(getPtLoginData));
                                        sendData = JSON.stringify(res);
                                        loginCallback(sendData);
                                    }
                                });
                            } else {
                                alert(res.msg);
                            }
                        }
                    });
                }
            } else if (item.type === "fb") {
                if (item.name === username) {
                    getLogin(item.accessToken);
                }
            } else if (item.typename === "Player") {
                if (item.name === username) {
                    $.ajax({
                        type: "POST",
                        url: Api.userFastLogin_api,
                        data: {
                            isFirst: "no",
                            id: item.id,
                            siteCode: item.siteCode,
                            t: item.t,
                            ps: item.ps,
                            imeiNum: generateUUID(),
                            xuhaoNum: generateUUID(),
                            language: gamedata.language,
                            gameCode: gamedata.gameCode,
                            packageName: gamedata.packageName,
                            os: gamedata.os
                        },
                        dataType: "jsonp",
                        beforeSend: function beforeSend(e) {
                            $(".loading").show();
                            $(".showad").show();
                            isClick = false;
                        },
                        success: function success(res) {
                            console.log(res);
                            $(".loading").show();
                            $(".showad").show();
                            afterClick();
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
                                        packageVersion: gamedata.packageVersion
                                    },
                                    dataType: "jsonp",
                                    beforeSend: function beforeSend(e) {
                                        $(".loading").show();
                                        $(".showad").show();
                                    },
                                    success: function success(res) {
                                        $(".loading").hide();
                                        $(".showad").hide();
                                        var timer = new Date().getTime();
                                        item.time = timer;
                                        localStorage.setItem("tryLoginData", JSON.stringify([item]));
                                        sendData = JSON.stringify(res);
                                        loginCallback(sendData);
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    }
});

$(".toRule").click(function () {
    $(".bg").show();
});