var isOpenRule = 0;
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

var leftShow = false;
var rightShow = false;


document.querySelector(".left-btn").onclick = function () {
  document.querySelector(".left-raido").style.display = "block"
  leftShow = true
}


document.querySelector(".right-btn").onclick = function () {
  document.querySelector(".right-raido").style.display = "block"
  rightShow = true;
}

document.querySelector(".left-raido").onclick = function () {
  document.querySelector(".left-raido").style.display = "none"
  leftShow = false
}

document.querySelector(".right-raido").onclick = function () {
  document.querySelector(".right-raido").style.display = "none"
  rightShow = false
}

document.querySelector(".close").onclick = function () {
  document.querySelector(".bg").style.display = "none"
}


document.querySelector(".arrbtn").onclick = function () {
  if (leftShow && rightShow) {
    document.querySelector(".bg").style.display = "none"
    leftShow = false
    rightShow = false
    document.querySelector(".left-raido").style.display = "none"
    document.querySelector(".right-raido").style.display = "none"

    isOpenRule = 1
    localStorage.setItem("isOpenRule", isOpenRule)
  } else {
    alert("")
  }
}


document.querySelector(".handle3").onclick = function () {
  document.querySelector(".automatic_login_ns").style.display = "none"
  document.querySelector(".login_inp").style.display = "block"
}

document.querySelector(".login_logo_inp .back_ns").onclick = function () {
  document.querySelector(".automatic_login_ns").style.display = "block"
  document.querySelector(".login_inp").style.display = "none"
}

document.querySelector(".forget_password_ns").onclick = function () {
  document.querySelector(".forget_password").style.display = "block"
  document.querySelector(".login_inp").style.display = "none"
}

document.querySelector(".login_logo_forget .back_ns").onclick = function () {
  document.querySelector(".forget_password").style.display = "none"
  document.querySelector(".login_inp").style.display = "block"
}
document.querySelector(".click_registered_ns").onclick = function () {
  document.querySelector(".login_inp").style.display = "none"
  document.querySelector(".login_zc").style.display = "block"
}

document.querySelector(".login_logo_zc .back_ns").onclick = function () {
  document.querySelector(".login_zc").style.display = "none"
  document.querySelector(".login_inp").style.display = "block"
}

document.querySelector(".account_management_ns").onclick = function () {
  document.querySelector(".login_inp").style.display = "none"
  document.querySelector(".account_management").style.display = "block"
}

document.querySelector(".login_logo_account .back_ns").onclick = function () {
  document.querySelector(".login_inp").style.display = "block"
  document.querySelector(".account_management").style.display = "none"
}

document.querySelector(".login_logo_changePass .back_ns").onclick = function () {
  document.querySelector(".account_changePass").style.display = "none"
  document.querySelector(".account_management").style.display = "block"
}
document.querySelector(".login_logo_play .back_ns").onclick = function () {
  document.querySelector(".account_play").style.display = "none"
  document.querySelector(".account_management").style.display = "block"
}
document.querySelector(".login_logo_fb .back_ns").onclick = function () {
  document.querySelector(".account_fb").style.display = "none"
  document.querySelector(".account_management").style.display = "block"
}
document.querySelector(".account1_ns").onclick = function () {
  document.querySelector(".account_management").style.display = "none"
  document.querySelector(".account_changePass").style.display = "block"
}
document.querySelector(".account2_ns").onclick = function () {
  document.querySelector(".account_management").style.display = "none"
  document.querySelector(".account_play").style.display = "block"
}
document.querySelector(".account3_ns").onclick = function () {
  document.querySelector(".account_management").style.display = "none"
  document.querySelector(".account_fb").style.display = "block"
}
document.querySelector(".sel-down").onclick = function () {
  document.querySelector(".down_list").style.display = "block"
  document.querySelector(".sel-down").style.display = "none"
  document.querySelector(".sel-up").style.display = "block"
}
document.querySelector(".sel-up").onclick = function () {
  document.querySelector(".down_list").style.display = "none"
  document.querySelector(".sel-down").style.display = "block"
  document.querySelector(".sel-up").style.display = "none"
}
var elementList = document.querySelectorAll(".login_username_ns")
var clearList = document.querySelectorAll(".clear_ns")
var showList = document.querySelectorAll(".show_ns")

for (let i = 0; i < elementList.length; i++) {
  let index = i
  elementList[index].addEventListener("keyup", function (e) {
    var val = elementList[index].value
    var elemtNode = elementList[index].nextElementSibling

    if (val !== "") {
      elemtNode.style.display = "block"
    } else if (val === "") {
      elemtNode.style.display = "none"
    }
  })
}

clearList.forEach((item, index) => {
  item.onclick = function () {
    item.previousElementSibling.value = ""
    item.style.display = "none"
  }
})

showList.forEach((item, index) => {
  item.onclick = function () {
    var pass = item.previousElementSibling
    var img = item.children[0]
    var ret = item.previousElementSibling.getAttribute("type")
    if (ret === "password") {
      pass.setAttribute("type", "text")
      img.setAttribute("src", "//awscdnfsmdmxkrone.hfxj35e.com/gc_file/webLogin/login/img/ear.png")
    } else {
      pass.setAttribute("type", "password")
      img.setAttribute("src", "//awscdnfsmdmxkrone.hfxj35e.com/gc_file/webLogin/login/img/ear_blue.png")
    }
  }
})

var getFbLoginData = JSON.parse(localStorage.getItem("fbLoginData"));
var getPtLoginData = JSON.parse(localStorage.getItem("ptLoginData"));
var getTryLoginData = JSON.parse(localStorage.getItem("tryLoginData"));

if (
  getFbLoginData.length === 0 &&
  getPtLoginData.length === 0 &&
  getTryLoginData.length === 0
) {
  document.querySelector(".down_list").style.display = "none"
} else if (getFbLoginData && getPtLoginData && getTryLoginData) {

  var arrData = [...getPtLoginData, ...getFbLoginData, ...getTryLoginData];
  arrData.sort(compare("time"));
  document.querySelector(".sel-title").innerText = arrData[arrData.length - 1].name
  document.querySelector(".sel-img").classList.add(arrData[arrData.length - 1].icon)

  var str = "";
  for (let i = 0; i < arrData.length; i++) {
    let index = i;
    str += ` <li class="item${index}">
                          <span class="item-img iconfont ${arrData[index].icon}"></span>
                          <span class="item-title">${arrData[index].name}</span>
                          <span class="item-down iconfont icon-shanchu" onclick=clearItem(${index})></span>
                 </li>`;
  }
  document.querySelector(".down_list ul").innerHTML = str
}

function clearItem(ch) {
  var index = ch
  if (arrData[index].type === "fb") {
    if (window.confirm("삭제 하시겠습니까")) {
      console.log(getFbLoginData[index]);
      let delData = getFbLoginData.indexOf(arrData[index]);
      getFbLoginData.splice(delData, 1);
      localStorage.setItem("fbLoginData", JSON.stringify(getFbLoginData));
      localStorage.removeItem("FbLogin");

      if (getFbLoginData.length === 0) {
        getFbLoginData = [];
        if (getPtLoginData.length > 0 && getTryLoginData.length > 0) {
          console.log(getPtLoginData);
          arrData = [...getPtLoginData, ...getTryLoginData];
          str = "";

          document.querySelector(".sel-title").innerText = getPtLoginData[0].name
          document.querySelector(".sel-img").classList.remove("icon-Facebook")
          document.querySelector(".sel-img").classList.add(getPtLoginData[0].icon)

          arrData.forEach(function (item, index) {
            console.log(item);
            str += ` <li class="item${index}">
                                          <span class="item-img iconfont ${item.icon}"></span>
                                          <span class="item-title">${item.name}</span>
                                          <span class="item-down iconfont icon-shanchu" onclick=clearItem(${index})></span>
                              </li>`;
          });
          document.querySelector(".down_list ul").innerHTML = str
        } else if (
          getPtLoginData.length > 0 &&
          getTryLoginData.length === 0
        ) {
          console.log(getPtLoginData);
          arrData = [...getPtLoginData];
          str = "";

          document.querySelector(".sel-title").innerText = getPtLoginData[0].name
          document.querySelector(".sel-img").classList.remove("icon-Facebook")
          document.querySelector(".sel-img").classList.add(getPtLoginData[0].icon)

          arrData.forEach(function (item, index) {
            console.log(item);
            str += ` <li class="item${index}">
                                          <span class="item-img iconfont ${item.icon}"></span>
                                          <span class="item-title">${item.name}</span>
                                          <span class="item-down iconfont icon-shanchu" onclick=clearItem(${index})></span>
                              </li>`;
          });
          document.querySelector(".down_list ul").innerHTML = str
        } else if (
          getPtLoginData.length === 0 &&
          getTryLoginData.length > 0
        ) {
          console.log(getPtLoginData);
          arrData = [...getTryLoginData];
          str = "";

          document.querySelector(".sel-title").innerText = getTryLoginData[0].name
          document.querySelector(".sel-img").classList.remove("icon-Facebook")
          document.querySelector(".sel-img").classList.add(getTryLoginData[0].icon)

          arrData.forEach(function (item, index) {
            console.log(item);
            str += ` <li class="item${index}">
                                          <span class="item-img iconfont ${item.icon}"></span>
                                          <span class="item-title">${item.name}</span>
                                          <span class="item-down iconfont icon-shanchu" onclick=clearItem(${index})></span>
                              </li>`;
          });
          document.querySelector(".down_list ul").innerHTML = str
        } else {
          document.querySelector(".down_list ul").innerHTML = ""
          document.querySelector(".sel-title").innerText = ""
          document.querySelector(".sel-img").classList.remove("icon-Facebook")

        }
      }

      document.querySelector(".down_list").style.display = "none"
      document.querySelector(".sel-up").style.display = "none"
      document.querySelector(".sel-down").style.display = "block"
    }
  } else if (arrData[index].type === "pt") {
    if (window.confirm("삭제 하시겠습니까")) {
      let selData = getPtLoginData.indexOf(arrData[index]);
      getPtLoginData.splice(selData, 1);
      localStorage.setItem("ptLoginData", JSON.stringify(getPtLoginData));
      console.log(getPtLoginData)
      console.log(itemList)
      if (getPtLoginData.length === 0) {
        getPtLoginData = [];
        console.log(getFbLoginData);
        str = "";
        if (getFbLoginData.length > 0 && getTryLoginData.length > 0) {
          arrData = [...getFbLoginData, ...getTryLoginData];

          document.querySelector(".sel-title").innerText = arrData[0].name
          document.querySelector(".sel-img").classList.remove("icon-people")
          document.querySelector(".sel-img").classList.add(arrData[0].icon)
          arrData.forEach(function (item, index) {
            console.log(item);
            str += ` <li class="item${index}">
                                          <span class="item-img iconfont ${item.icon}"></span>
                                          <span class="item-title">${item.name}</span>
                                          <span class="item-down iconfont icon-shanchu" onclick=clearItem(${index})></span>
                              </li>`;
          });
          document.querySelector(".down_list ul").innerHTML = str
        } else if (
          getFbLoginData.length > 0 &&
          getTryLoginData.length === 0
        ) {
          arrData = [...getFbLoginData, ...getTryLoginData];

          document.querySelector(".sel-title").innerText = arrData[0].name
          document.querySelector(".sel-img").classList.remove("icon-people")
          document.querySelector(".sel-img").classList.add(arrData[0].icon)
          str = "";
          str += ` <li class="item${index}">
                                          <span class="item-img iconfont ${arrData[0].icon}"></span>
                                          <span class="item-title">${arrData[0].name}</span>
                                          <span class="item-down iconfont icon-shanchu" onclick=clearItem(${index})></span>
                              </li>`;
          document.querySelector(".down_list ul").innerHTML = str
        } else if (
          getFbLoginData.length === 0 &&
          getTryLoginData.length > 0
        ) {
          arrData = [...getFbLoginData, ...getTryLoginData];

          document.querySelector(".sel-title").innerText = arrData[0].name
          document.querySelector(".sel-img").classList.remove("icon-people")
          document.querySelector(".sel-img").classList.add(arrData[0].icon)
          str = "";
          str += ` <li class="item${index}">
                                          <span class="item-img iconfont ${arrData[0].icon}"></span>
                                          <span class="item-title">${arrData[0].name}</span>
                                          <span class="item-down iconfont icon-shanchu" onclick=clearItem(${index})></span>
                              </li>`;
          document.querySelector(".down_list ul").innerHTML = str
        } else {

          document.querySelector(".down_list ul").innerHTML = ""
          document.querySelector(".sel-title").innerText = ""
          document.querySelector(".sel-img").classList.remove("icon-people")
        }
      } else {
        console.log("1");
        if (
          getFbLoginData.length > 0 &&
          getPtLoginData &&
          getTryLoginData.length > 0
        ) {
          str = "";
          arrData = [
            ...getPtLoginData,
            ...getFbLoginData,
            ...getTryLoginData,
          ];
          document.querySelector(".sel-title").innerText = arrData[0].name
          document.querySelector(".sel-img").classList.remove("icon-people")
          document.querySelector(".sel-img").classList.add(arrData[0].icon)

          arrData.forEach(function (item, index) {
            str += ` <li class="item${index}">
                                      <span class="item-img iconfont ${item.icon}"></span>
                                      <span class="item-title">${item.name}</span>
                                      <span class="item-down iconfont icon-shanchu" onclick=clearItem(${index})></span>
                                  </li>`;
          });
          document.querySelector(".down_list ul").innerHTML = str
        } else if (
          getFbLoginData.length === 0 &&
          getPtLoginData &&
          getTryLoginData.length > 0
        ) {
          str = "";
          arrData = [...getPtLoginData, ...getTryLoginData];

          document.querySelector(".sel-title").innerText = arrData[0].name
          document.querySelector(".sel-img").classList.remove("icon-people")
          document.querySelector(".sel-img").classList.add(arrData[0].icon)
          arrData.forEach(function (item, index) {
            str += ` <li class="item${index}">
                                      <span class="item-img iconfont ${item.icon}"></span>
                                      <span class="item-title">${item.name}</span>
                                      <span class="item-down iconfont icon-shanchu" onclick=clearItem(${index})></span>
                                  </li>`;
          });
          document.querySelector(".down_list ul").innerHTML = str
        } else if (
          getFbLoginData.length > 0 &&
          getPtLoginData &&
          getTryLoginData.length === 0
        ) {
          str = "";
          arrData = [...getPtLoginData, ...getFbLoginData];

          document.querySelector(".sel-title").innerText = arrData[0].name
          document.querySelector(".sel-img").classList.remove("icon-people")
          document.querySelector(".sel-img").classList.add(arrData[0].icon)
          arrData.forEach(function (item, index) {
            str += ` <li class="item${index}">
                                      <span class="item-img iconfont ${item.icon}"></span>
                                      <span class="item-title">${item.name}</span>
                                      <span class="item-down iconfont icon-shanchu" onclick=clearItem(${index})></span>
                                  </li>`;
          });
          document.querySelector(".down_list ul").innerHTML = str
        } else if (
          getFbLoginData.length === 0 &&
          getPtLoginData &&
          getTryLoginData.length === 0
        ) {
          console.log("2");
          str = "";
          arrData = [...getPtLoginData];

          document.querySelector(".sel-title").innerText = arrData[0].name
          document.querySelector(".sel-img").classList.remove("icon-people")
          document.querySelector(".sel-img").classList.add(arrData[0].icon)
          arrData.forEach(function (item, index) {
            console.log(index);
            str += ` <li class="item${index}">
                                      <span class="item-img iconfont ${item.icon}"></span>
                                      <span class="item-title">${item.name}</span>
                                      <span class="item-down iconfont icon-shanchu" onclick=clearItem(${index})></span>
                                    </li>`;
          });
          document.querySelector(".down_list ul").innerHTML = str
        }
      }

      document.querySelector(".down_list").style.display = "none"
      document.querySelector(".sel-up").style.display = "none"
      document.querySelector(".sel-down").style.display = "block"
    }
  } else if (arrData[index].type === "player") {
    if (window.confirm("삭제 하시겠습니까")) {
      console.log(getTryLoginData[index]);
      console.log(itemList)
      let tryDelData = getTryLoginData.indexOf(arrData[index]);
      getTryLoginData.splice(tryDelData, 1);
      localStorage.setItem("tryLoginData", JSON.stringify(getTryLoginData));
      localStorage.removeItem("FirstLogin");

      if (getTryLoginData.length === 0) {
        itemList = document.querySelectorAll(".item-down")
        getTryLoginData = [];
        if (getPtLoginData.length > 0 && getFbLoginData.length > 0) {
          console.log(getPtLoginData);
          arrData = [...getPtLoginData, ...getFbLoginData];
          str = "";

          document.querySelector(".sel-title").innerText = arrData[0].name
          document.querySelector(".sel-img").classList.remove("icon-people")
          document.querySelector(".sel-img").classList.add(arrData[0].icon)

          arrData.forEach(function (item, index) {
            console.log(item);
            str += ` <li class="item${index}">
                                          <span class="item-img iconfont ${item.icon}"></span>
                                          <span class="item-title">${item.name}</span>
                                          <span class="item-down iconfont icon-shanchu" onclick=clearItem(${index})></span>
                              </li>`;
          });

          $(".down_list ul").html(str);
        } else if (getPtLoginData.length > 0 && getFbLoginData.length === 0) {
          console.log(getPtLoginData);
          arrData = [...getPtLoginData];
          str = "";

          document.querySelector(".sel-title").innerText = arrData[0].name
          document.querySelector(".sel-img").classList.remove("icon-people")
          document.querySelector(".sel-img").classList.add(arrData[0].icon)

          arrData.forEach(function (item, index) {
            console.log(item);
            str += ` <li class="item${index}">
                                          <span class="item-img iconfont ${item.icon}"></span>
                                          <span class="item-title">${item.name}</span>
                                          <span class="item-down iconfont icon-shanchu" onclick=clearItem(${index})></span>
                              </li>`;
          });

          document.querySelector(".down_list ul").innerHTML = str
        } else if (getPtLoginData.length === 0 && getFbLoginData.length > 0) {
          console.log(getPtLoginData);
          arrData = [...getFbLoginData];
          str = "";

          document.querySelector(".sel-title").innerText = arrData[0].name
          document.querySelector(".sel-img").classList.remove("icon-people")
          document.querySelector(".sel-img").classList.add(arrData[0].icon)

          arrData.forEach(function (item, index) {
            console.log(item);
            str += ` <li class="item${index}">
                                          <span class="item-img iconfont ${item.icon}"></span>
                                          <span class="item-title">${item.name}</span>
                                          <span class="item-down iconfont icon-shanchu" onclick=clearItem(${index})></span>
                              </li>`;
          });

          document.querySelector(".down_list ul").innerHTML = str
        } else {
          document.querySelector(".down_list ul").innerHTML = ""
          document.querySelector(".sel-title").innerText = ""
          document.querySelector(".sel-img").classList.remove("icon-94")
        }
      }
      document.querySelector(".down_list").style.display = "none"
      document.querySelector(".sel-up").style.display = "none"
      document.querySelector(".sel-down").style.display = "block"
    }
  }
}

var gamedata = JSON.parse(localStorage.getItem("gameData"));
var itemList = document.querySelectorAll(".item-down")
var itemTitleList = document.querySelectorAll(".item-title")

itemTitleList.forEach((item, index) => {
  item.onclick = function () {
    if (arrData[index].type === "fb") {
      document.querySelector(".sel-title").innerText = arrData[index].name
      document.querySelector(".sel-img").classList.remove("icon-people","icon-94")
      document.querySelector(".sel-img").classList.add(arrData[index].icon)
      document.querySelector(".down_list").style.display = "none"
      document.querySelector(".sel-up").style.display = "none"
      document.querySelector(".sel-down").style.display = "block"
    } else if (arrData[index].type === "pt") {
      document.querySelector(".sel-title").innerText = arrData[index].name
      document.querySelector(".sel-img").classList.remove("icon-Facebook","icon-94")
      document.querySelector(".sel-img").classList.add(arrData[index].icon)
      document.querySelector(".down_list").style.display = "none"
      document.querySelector(".sel-up").style.display = "none"
      document.querySelector(".sel-down").style.display = "block"
    } else if (arrData[index].type === "player") {
      document.querySelector(".sel-title").innerText = arrData[index].name
      document.querySelector(".sel-img").classList.remove("icon-Facebook","icon-people")
      document.querySelector(".sel-img").classList.add(arrData[index].icon)
      document.querySelector(".down_list").style.display = "none"
      document.querySelector(".sel-up").style.display = "none"
      document.querySelector(".sel-down").style.display = "block"
    }
  }
})

document.querySelector("#enter_game_ns").onclick = function () {
  var username = document.querySelector(".sel-title").innerText
  console.log(username);
  console.log(isClick);

  if (isClick) {
    for (let ch = 0; ch < arrData.length; ch++) {
      let chindex = ch;
      if (arrData[chindex].type === "pt") {
        if (arrData[chindex].name === username) {
          sendAjax({
            url: Api.userLogin_api,
            type: "POST",
            data: {
              username: arrData[chindex].name,
              password: arrData[chindex].password,
              siteCode: "damoregame",
              t: "1487665362664",
              ck: "7e1d4d53a5d436be64a26dbbca1c511e",
              ismobile: "yes",
              language: gamedata.language,
              gameCode: gamedata.gameCode,
              packageName: gamedata.packageName,
            },
            dataType: "jsonp",
            beforeSend: function (e) {
              document.querySelector(".loading").style.display = "block"
              document.querySelector(".showad").style.display = "block"
              isClick = false;
            },
            success: function (res) {
              document.querySelector(".loading").style.display = "none"
              document.querySelector(".showad").style.display = "none"
              afterClick();
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
                    packageVersion: gamedata.packageVersion,
                  },
                  dataType: "jsonp",
                  success: function (res) {
                    console.log(res);
                    var timer = new Date().getTime();
                    arrData[chindex].time = timer;

                    getPtLoginData.forEach(function (item, index) {
                      if (item.name === arrData[chindex].name) {
                        item = arrData[chindex];
                      }
                    });
                    localStorage.setItem(
                      "ptLoginData",
                      JSON.stringify(getPtLoginData)
                    );
                    sendData = JSON.stringify(res);
                    loginCallback(sendData);
                  },
                });
              } else {
                alert(res.msg);
              }
            },
          });
        }
      } else if (arrData[chindex].type === "fb") {
        if (arrData[chindex].name === username) {
          var getGameData = JSON.parse(localStorage.getItem("gameData"));
          sendAjax({
            url: Api.fbuserLoginForMobile_api,
            type: "POST",
            data: {
              access_token: arrData[chindex].accessToken,
              language: getGameData.language,
              gameCode: getGameData.gameCode,
              packageName: getGameData.packageName,
              os: getGameData.os,
              appid: appid,
              tag: "website",
            },
            dataType: "jsonp",
            beforeSend: function beforeSend(e) {
              document.querySelector(".loading").style.display = "block"
              document.querySelector(".showad").style.display = "block"
            },
            success: function success(data) {
              document.querySelector(".loading").style.display = "none"
              document.querySelector(".showad").style.display = "none"
              document.querySelector(".quitLogion").style.display = "none"
              if (data.code == "6004") {
                sendAjax({
                  url: Api.userPartnerLogin_api,
                  type: "POST",
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
                    os: getGameData.os,
                  },
                  dataType: "jsonp",
                  jsonp: "callback",
                  success: function success(res) {
                    if (res.code == "1400") {
                      sessionID = res.sessionID;
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
                          packageVersion: packageVersion_str,
                        },
                        dataType: "jsonp",
                        success: function success(res) {
                          console.log(res);
                          var timer = new Date().getTime();
                          arrData[chindex].time = timer;
                          localStorage.setItem(
                            "fbLoginData",
                            JSON.stringify([arrData[chindex]])
                          );
                          sendData = JSON.stringify(res);
                          loginCallback(sendData);
                        },
                      });
                    } else {
                      alert(res.msg);
                    }
                  },
                  error: function error() {},
                });
              } else {
                alert(data.msg);
              }
            },
            error: function error() {},
          });
        }
      } else if (arrData[chindex].typename === "Player") {
        if (arrData[chindex].name === username) {
          sendAjax({
            type: "POST",
            url: Api.userFastLogin_api,
            data: {
              isFirst: "no",
              id: arrData[chindex].id,
              siteCode: arrData[chindex].siteCode,
              t: arrData[chindex].t,
              ps: arrData[chindex].ps,
              imeiNum: generateUUID(),
              xuhaoNum: generateUUID(),
              language: gamedata.language,
              gameCode: gamedata.gameCode,
              packageName: gamedata.packageName,
              os: gamedata.os,
            },
            dataType: "jsonp",
            beforeSend: function (e) {
              document.querySelector(".loading").style.display = "block"
              document.querySelector(".showad").style.display = "block"
              isClick = false;
            },
            success: function (res) {
              console.log(res);
              document.querySelector(".loading").style.display = "none"
              document.querySelector(".showad").style.display = "none"
              afterClick();
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
                    packageVersion: gamedata.packageVersion,
                  },
                  dataType: "jsonp",
                  beforeSend: function (e) {
                    document.querySelector(".loading").style.display = "block"
                    document.querySelector(".showad").style.display = "block"
                  },
                  success: function (res) {
                    document.querySelector(".loading").style.display = "none"
                    document.querySelector(".showad").style.display = "none"
                    var timer = new Date().getTime();
                    arrData[chindex].time = timer;
                    localStorage.setItem(
                      "tryLoginData",
                      JSON.stringify([arrData[chindex]])
                    );
                    sendData = JSON.stringify(res);
                    loginCallback(sendData);
                  },
                });
              }
            },
          });
        }
      }
    }
  }
}

document.querySelector(".toRule").onclick = function () {
  document.querySelector(".bg").style.display = "block"
}