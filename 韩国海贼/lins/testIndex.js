"use strict";

(function (window, document) {
    function Pay(config) {
        Pay.prototype.config = {
            gameCode: null,
            serverCode: null,
            //合作商渠道
            siteCode: null,
            packageName: null,
            language: null,
            mateLanguage: null,
            os: null,
            glevel: null,
            param: null,
            itemCode: null,
            passport: null,
            t: null,
            ck: null,
            //网址
            api_URL: null,
            appid: null
        };

        var j = void 0;
        Object.assign(this.config, config);
        this.getSessionID_LP();
    };

    Pay.prototype = {
        constructor: Pay,
        init: function init() {
            // this.createElement()
            this.openElse();
        },
        createElement: function createElement() {
            var pay = document.createElement("DIV");
            pay.classList.add("main");
            pay.innerHTML = "\n            <div class=\"pay-box\">\n                <div class=\"nav-main\">\n                    <div class=\"title\">\n                        <div class=\"back\">\n                            <svg t=\"1574929273942\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\"\n                                xmlns=\"http://www.w3.org/2000/svg\" p-id=\"7528\" width=\"48\" height=\"48\">\n                                <path\n                                    d=\"M368.19 869.765c-14.367 0-26.051-11.684-26.051-26.05s11.684-26.051 26.05-26.051h225.977c176.737 0 223.437-145.475 223.437-222.397 0-83.313-28.934-223.084-222.74-223.084H242.533L377.76 507.418a25.861 25.861 0 0 1 7.623 18.406 25.907 25.907 0 0 1-7.623 18.432 25.892 25.892 0 0 1-18.422 7.634 26.127 26.127 0 0 1-18.412-7.619l-178.99-179a26.092 26.092 0 0 1 0-36.838l166.57-166.574a25.882 25.882 0 0 1 18.421-7.63c6.958 0 13.502 2.71 18.422 7.63a26.086 26.086 0 0 1 0 36.838L243.963 320.082h350.894c100.854 0 175.939 32.824 223.186 97.556 42.675 58.496 51.645 128.886 51.656 177.634 0 110.34-73.38 274.493-275.533 274.493H368.189z\"\n                                    fill=\"#bfbfbf\" p-id=\"7529\"></path>\n                            </svg>\n                        </div>\n                        <div class=\"gameName\">\n                            <span class=\"gname\"></span><span class=\"sgame\"></span>\n                        </div>\n                    </div>\n                    <div class=\"middle\">\n                        <div class=\"appPay\">" + Pay.prototype.config.mateLanguage.TW_Language.officialPay + "</div>\n                        <div class=\"otherPay\">" + Pay.prototype.config.mateLanguage.TW_Language.otherPay + "</div>\n                    </div>\n                    <div class=\"fotter\">\n                        <div class=\"affimBuy\">\n                            <input type=\"button\" value=\"confirm\" class=\"buy\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"pay-main\">\n                    <div class=\"pay-title\">\n                        <div class=\"pay-back\">\n                            <svg t=\"1574929273942\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\"\n                                xmlns=\"http://www.w3.org/2000/svg\" p-id=\"7528\" width=\"48\" height=\"48\">\n                                <path\n                                    d=\"M368.19 869.765c-14.367 0-26.051-11.684-26.051-26.05s11.684-26.051 26.05-26.051h225.977c176.737 0 223.437-145.475 223.437-222.397 0-83.313-28.934-223.084-222.74-223.084H242.533L377.76 507.418a25.861 25.861 0 0 1 7.623 18.406 25.907 25.907 0 0 1-7.623 18.432 25.892 25.892 0 0 1-18.422 7.634 26.127 26.127 0 0 1-18.412-7.619l-178.99-179a26.092 26.092 0 0 1 0-36.838l166.57-166.574a25.882 25.882 0 0 1 18.421-7.63c6.958 0 13.502 2.71 18.422 7.63a26.086 26.086 0 0 1 0 36.838L243.963 320.082h350.894c100.854 0 175.939 32.824 223.186 97.556 42.675 58.496 51.645 128.886 51.656 177.634 0 110.34-73.38 274.493-275.533 274.493H368.189z\"\n                                    fill=\"#bfbfbf\" p-id=\"7529\"></path>\n                            </svg>\n                        </div>\n                        <div class=\"pay-gameName\">\n                            <span class=\"pay-gname\"></span>\n                            <span class=\"spay-game\"></span>\n                        </div>\n    \n                    </div>\n                    <div class=\"pay-middle\">\n                        <div class=\"pay-orderNum\">" + Pay.prototype.config.mateLanguage.TW_Language.account + ": <span class=\"username\"></span> </div>\n                        <div class=\"pay-selfNum\">" + Pay.prototype.config.mateLanguage.TW_Language.point + ": <span class=\"point\"></span></div>\n                        <div class=\"pay-orderContent\">\n                            <div class=\"pay-o-info\">\n                                <div class=\"pay-o-title\">\n                                    <a href=\"#\" class=\"pay-o-title-a\"></a>\n                                </div>\n    \n                                <div class=\"pay-o-center\"></div>\n                                <div class=\"pay-o-tip\">\n                                " + Pay.prototype.config.mateLanguage.TW_Language.insufficientTip + "\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"pay-fotter\">\n                        <div class=\"pay-affimBuy\">\n                            <input type=\"button\" value=\"" + Pay.prototype.config.mateLanguage.TW_Language.get_Point + "\" class=\"pay-buy\">\n                            <input type=\"button\" value=\"" + Pay.prototype.config.mateLanguage.TW_Language.exchange + "\" class=\"exchangeBuy\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"buyPonit\">\n                <div class=\"nav\">\n                    <div class=\"nav-back\">\n                        <svg t=\"1574929273942\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\"\n                            xmlns=\"http://www.w3.org/2000/svg\" p-id=\"7528\" width=\"48\" height=\"48\">\n                            <path\n                                d=\"M368.19 869.765c-14.367 0-26.051-11.684-26.051-26.05s11.684-26.051 26.05-26.051h225.977c176.737 0 223.437-145.475 223.437-222.397 0-83.313-28.934-223.084-222.74-223.084H242.533L377.76 507.418a25.861 25.861 0 0 1 7.623 18.406 25.907 25.907 0 0 1-7.623 18.432 25.892 25.892 0 0 1-18.422 7.634 26.127 26.127 0 0 1-18.412-7.619l-178.99-179a26.092 26.092 0 0 1 0-36.838l166.57-166.574a25.882 25.882 0 0 1 18.421-7.63c6.958 0 13.502 2.71 18.422 7.63a26.086 26.086 0 0 1 0 36.838L243.963 320.082h350.894c100.854 0 175.939 32.824 223.186 97.556 42.675 58.496 51.645 128.886 51.656 177.634 0 110.34-73.38 274.493-275.533 274.493H368.189z\"\n                                fill=\"#bfbfbf\" p-id=\"7529\"></path>\n                        </svg>\n                    </div>\n                    <div class=\"nav-title\">\n                        <h3>" + Pay.prototype.config.mateLanguage.TW_Language.buyPoint + "</h3>\n                    </div>\n                </div>\n                <div class=\"contant\">\n                    <div class=\"contant-title\">\n                    " + Pay.prototype.config.mateLanguage.TW_Language.username + ":<span class=\"username\"></span>\n                    </div>\n                    <div class=\"contant-point\">\n                    " + Pay.prototype.config.mateLanguage.TW_Language.point + ":<span class=\"userPoint\"></span>\n                    </div>\n                </div>\n                <div class=\"selectDit\">\n                    <ul>\n                        <li class=\"s1\"></li>\n                        <li class=\"MolPin\"></li>\n                        <li class=\"Mol\"></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"excPoint\">\n                <div class=\"ex-nav\">\n                    <div class=\"ex-nav-back\">\n                        <svg t=\"1574929273942\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\"\n                            xmlns=\"http://www.w3.org/2000/svg\" p-id=\"7528\" width=\"48\" height=\"48\">\n                            <path\n                                d=\"M368.19 869.765c-14.367 0-26.051-11.684-26.051-26.05s11.684-26.051 26.05-26.051h225.977c176.737 0 223.437-145.475 223.437-222.397 0-83.313-28.934-223.084-222.74-223.084H242.533L377.76 507.418a25.861 25.861 0 0 1 7.623 18.406 25.907 25.907 0 0 1-7.623 18.432 25.892 25.892 0 0 1-18.422 7.634 26.127 26.127 0 0 1-18.412-7.619l-178.99-179a26.092 26.092 0 0 1 0-36.838l166.57-166.574a25.882 25.882 0 0 1 18.421-7.63c6.958 0 13.502 2.71 18.422 7.63a26.086 26.086 0 0 1 0 36.838L243.963 320.082h350.894c100.854 0 175.939 32.824 223.186 97.556 42.675 58.496 51.645 128.886 51.656 177.634 0 110.34-73.38 274.493-275.533 274.493H368.189z\"\n                                fill=\"#bfbfbf\" p-id=\"7529\"></path>\n                        </svg>\n                    </div>\n                    <div class=\"ex-nav-title\">\n                        <h3>" + Pay.prototype.config.mateLanguage.TW_Language.buyPoint + "</h3>\n                    </div>\n                </div>\n                <div class=\"ex-contant\">\n    \n                </div>\n            </div>\n            <div class=\"excPoint_Sel\">\n                <div class=\"Selex-nav\">\n                    <div class=\"Selex-nav-back\">\n                        <svg t=\"1574929273942\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\"\n                            xmlns=\"http://www.w3.org/2000/svg\" p-id=\"7528\" width=\"48\" height=\"48\">\n                            <path\n                                d=\"M368.19 869.765c-14.367 0-26.051-11.684-26.051-26.05s11.684-26.051 26.05-26.051h225.977c176.737 0 223.437-145.475 223.437-222.397 0-83.313-28.934-223.084-222.74-223.084H242.533L377.76 507.418a25.861 25.861 0 0 1 7.623 18.406 25.907 25.907 0 0 1-7.623 18.432 25.892 25.892 0 0 1-18.422 7.634 26.127 26.127 0 0 1-18.412-7.619l-178.99-179a26.092 26.092 0 0 1 0-36.838l166.57-166.574a25.882 25.882 0 0 1 18.421-7.63c6.958 0 13.502 2.71 18.422 7.63a26.086 26.086 0 0 1 0 36.838L243.963 320.082h350.894c100.854 0 175.939 32.824 223.186 97.556 42.675 58.496 51.645 128.886 51.656 177.634 0 110.34-73.38 274.493-275.533 274.493H368.189z\"\n                                fill=\"#bfbfbf\" p-id=\"7529\"></path>\n                        </svg>\n                    </div>\n                    <div class=\"Selex-nav-title\">\n                        <h3>" + Pay.prototype.config.mateLanguage.TW_Language.buyPoint + "</h3>\n                    </div>\n                </div>\n                <div class=\"Selex-contant\">\n    \n                </div>\n            </div>\n            <div class=\"load-container\">\n                <div class=\"boxLoading\"></div>\n            </div>\n            <div class=\"showad\"></div>\n            ";
            document.body.appendChild(pay)[2];
            this.handleClick();
        },
        handleClick: function handleClick() {
            var a = payConfig.PointCard();
            var b = payConfig.MyCard();
            var bank = payConfig.bankDitch();
            var phone = payConfig.phoneDitch();
            var creditCard = payConfig.creditCardDitch();
            var platform = FBInstant.getPlatform(); // 'IOS'

            if (platform === "IOS") {
                $(".appPay").hide();
            }

            var that = this;

            $(".otherPay").click(function () {
                $(".pay-main").show();
                $(".nav-main").hide();
                that.getUserInfo();
                that.getGameInfo();
            });

            $(".appPay").click(function () {
                Pay.prototype.FBPay();
            });

            $(".pay-back").click(function () {
                $(".pay-main").hide();
                $(".nav-main").show();
            });
            $(".nav-back").click(function () {
                $(".buyPonit").hide();
                $(".pay-box").show();
            });

            $(".ex-nav-back").click(function () {
                $(".excPoint").hide();
                $(".buyPonit").show();
            });
            $(".Selex-nav-back").click(function () {
                $(".Selex-contant ul").html("");
                $(".excPoint_Sel").hide();
                $(".excPoint").show();
            });

            $(".pay-buy").click(function () {
                if (j) {
                    $(".buyPonit").show();
                    $(".pay-box").hide();
                }
            });

            $(".exchangeBuy").click(function () {
                if (j) {
                    $.ajax({
                        url: "//" + that.config.api_URL.payUrl + "/GameParam/saveParams.do?",
                        type: "POST",
                        data: {
                            passport: passport,
                            gameCode: that.config.gameCode,
                            serverCode: that.config.serverCode,
                            param: that.config.param,
                            siteCode: that.config.siteCode,
                            tag: "website",
                            language: that.config.language,
                            os: that.config.os,
                            packageName: that.config.packageName
                        },
                        dataType: "jsonp",
                        success: function success(resl) {
                            if (resl.code === 3) {
                                $.ajax({
                                    type: "POST",
                                    url: "//" + that.config.api_URL.appsUrl + "/pay/chargeToGame.do",
                                    data: {
                                        gameCode: that.config.gameCode,
                                        serverCode: that.config.serverCode,
                                        lpoint: lpoint,
                                        SessionID_LP: j,
                                        language: that.config.language,
                                        packageName: that.config.packageName,
                                        os: that.config.os,
                                        itemCode: that.config.itemCode,
                                        roleid: that.config.passport
                                    },
                                    dataType: "jsonp",
                                    beforeSend: function beforeSend(e) {
                                        $(".load-container").show();
                                        $(".showad").show();
                                    },
                                    success: function success(result) {
                                        $(".load-container").hide();
                                        $(".showad").hide();

                                        if (result.code === "3000") {
                                            $(".main").remove();
                                        } else {
                                            alert(result.msg);
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
            });

            $(".MolPin").click(function () {
                window.location.href = "https://" + that.config.api_URL.payUrl + "/mol/initMolPin.do?passport=" + that.config.passport + "&siteCode=" + that.config.siteCode + "&gameCode=" + that.config.gameCode + "&serverCode=" + that.config.serverCode + "&device_information=7107f089ef707cd,HM NOTE 1S,WIFI,4.4.4,android&payTag=payGpointAndLpoint&payGameLpoint=0&packageName=" + that.config.packageName + "&language=" + that.config.language + "&os=" + that.config.os;
            });
            $(".Mol").click(function () {

                $.ajax({
                    type: "POST",
                    url: "//" + that.config.api_URL.appsmobileUrl + "/dist/mobile_store_cashFlow_items.do",
                    data: {
                        cashFlow: "Mol",
                        gameCode: that.config.gameCode,
                        serverCode: that.config.serverCode,
                        paymentType: "",
                        payTag: "payGpointAndLpoint",
                        packageName: that.config.packageName,
                        language: that.config.language,
                        os: that.config.os
                    },
                    dataType: "jsonp",
                    success: function success(res) {
                        var payUlMol_item = document.createElement("ul");
                        if (res.code === "003") {

                            for (var mol = 0; mol < res.cashFlowItemArray.length; mol++) {
                                var molList = mol;
                                payUlMol_item.innerHTML += "<li class=\"Mol_pay" + molList + "\">\n                                    <a href=\"#\">\n                                    <div class=\"b_link\">\n                                        " + res.cashFlowItemArray[molList].amount + res.cashFlowItemArray[molList].currency + "= <span style=\"color: #0198F8\">" + res.cashFlowItemArray[molList].lpoint + res.cashFlowItemArray[molList].coinname + "\n                                    </div>\n                                    <span class=\"r_icon\"></span>\n                                    </a>\n                                </li>";
                            }

                            $(".ex-contant").html(payUlMol_item);
                            $(".excPoint").show();
                            $(".buyPonit").hide();

                            var _loop = function _loop(molItem) {
                                var molItemIndex = molItem;

                                $(".Mol_pay" + molItemIndex).click(function () {

                                    window.location.href = "https://" + that.config.api_URL.payUrl + "/mol/initMol.do?passport=" + that.config.passport + "&lpoint=" + res.cashFlowItemArray[molItemIndex].lpoint + "&siteCode=" + that.config.siteCode + "&gameCode=" + that.config.gameCode + "&serverCode=" + that.config.serverCode + "&device_information=7107f089ef707cd,HM NOTE 1S,WIFI,4.4.4,android&payTag=payGpointAndLpoint&payGameLpoint=0&packageName=" + that.config.packageName + "&language=" + that.config.language + "&os=" + that.config.os;
                                });
                            };

                            for (var molItem = 0; molItem < res.cashFlowItemArray.length; molItem++) {
                                _loop(molItem);
                            }
                        }
                    }
                });
            });

            $(".back").click(function () {
                $(".main").remove();
            });

            var _loop2 = function _loop2(i) {
                var index = i;
                $(".s" + index).click(function () {
                    var payUl_item = document.createElement("ul");
                    var ga_item = document.createElement("ul");
                    var point_Div = document.createElement("DIV");

                    switch (index) {
                        case 1:
                            // point_Div.innerHTML += `
                            //     <div class="point_code">
                            //         <span>${that.config.mateLanguage.TW_Language.codeNum}:</span> <input type="text" id="inpCode" placeholder="${that.config.mateLanguage.TW_Language.codeDes}">
                            //     </div>
                            //     <div class="point_pass">
                            //         <span>${that.config.mateLanguage.TW_Language.codePass}:</span> <input type="password" name="" id="inpPass" placeholder="${that.config.mateLanguage.TW_Language.codePassDes}">
                            //         <span class="icon_open iconfont icon-yanjing"></span>
                            //         <span class="close iconfont icon-biyan"></span>
                            //     </div>
                            //     <div class="coinPay">
                            //         <input type="button" value="${that.config.mateLanguage.TW_Language.exchange}" id="coinBtn">
                            //     </div>
                            // `
                            for (var s = 0; s < a.ItemList.length; s++) {
                                var indexs = s;
                                payUl_item.innerHTML += "<li class=\"PointCard_pay" + indexs + "\">\n                                            <a href=\"#\">\n                                    <div class=\"b_link\">\n                                        " + a.ItemList[indexs].Amount + a.ItemList[indexs].Currency + "= <span style=\"color: #0198F8\">" + a.ItemList[indexs].Amount + "L\u9EDE\n                                    </div>\n                                <span class=\"r_icon\"></span>\n                            </a>\n                        </li>";
                            }
                            break;
                        case 2:
                            for (var d = 0; d < b.ItemList.length; d++) {
                                var indexss = d;
                                payUl_item.innerHTML += "<li class=\"MyCard_pay" + indexss + "\">\n                                            <a href=\"#\">\n                                    <div class=\"b_link\">\n                                        " + b.ItemList[indexss].Amount + b.ItemList[indexss].Currency + "= <span style=\"color: #0198F8\">" + b.ItemList[indexss].Amount + that.config.mateLanguage.TW_Language.L_Point + "\n                                    </div>\n                                <span class=\"r_icon\"></span>\n                            </a>\n                        </li>";
                            }
                            break;
                        case 3:
                            for (var _b = 0; _b < bank.length; _b++) {
                                var bindex = _b;
                                payUl_item.innerHTML += "<li class=\"Bank_pay" + bindex + " " + bank[bindex].PaymentType + "\">\n                                                    <a href=\"#\">\n                                                <div class=\"b_link\">\n                                                 " + bank[bindex].PaymentTypeDesc + "\n                                                 </div>\n                                            <span class=\"r_icon\"></span>\n                                             </a>\n                                            </li>";
                            }
                            break;
                        case 4:
                            for (var p = 0; p < phone.length; p++) {
                                var pindex = p;
                                payUl_item.innerHTML += "<li class=\"phone_pay" + pindex + " " + phone[pindex].PaymentType + "\">\n                                                    <a href=\"#\">\n                                                <div class=\"b_link\">\n                                                 " + phone[pindex].PaymentTypeDesc + "\n                                                 </div>\n                                            <span class=\"r_icon\"></span>\n                                             </a>\n                                            </li>";
                            }
                            break;
                        case 5:
                            for (var cr = 0; cr < creditCard.length; cr++) {
                                var crindex = cr;
                                payUl_item.innerHTML += "<li class=\"creditCard_pay" + crindex + " " + creditCard[crindex].PaymentType + "\">\n                                                    <a href=\"#\">\n                                                <div class=\"b_link\">\n                                                 " + creditCard[crindex].PaymentTypeDesc + "\n                                                 </div>\n                                            <span class=\"r_icon\"></span>\n                                             </a>\n                                            </li>";
                            }
                            break;
                    }

                    $(".ex-contant").html(payUl_item);
                    $(".excPoint").show();
                    $(".buyPonit").hide();

                    var _loop3 = function _loop3(z) {
                        var zindex = z;
                        $(".Bank_pay" + zindex).click(function () {
                            var itemList = bank[zindex].ItemList;
                            for (var x = 0; x < itemList.length; x++) {
                                var xindex = x;
                                ga_item.innerHTML += "<li class=\"Bank_ga" + xindex + "\">\n                                                    <a href=\"#\">\n                                                <div class=\"b_link\">\n                                                    " + itemList[xindex].Amount + itemList[xindex].Currency + "= <span style=\"color: #0198F8\">" + itemList[xindex].Amount + that.config.mateLanguage.TW_Language.point_pt + "\n                                                 </div>\n                                            <span class=\"r_icon\"></span>\n                                        </a>\n                                    </li>";
                            }
                            $(".Selex-contant").html(ga_item);
                            $(".excPoint_Sel").show();
                            $(".excPoint").hide();

                            var _loop8 = function _loop8(bn) {
                                var bnindex = bn;
                                $(".Bank_ga" + bnindex).click(function () {
                                    $.ajax({
                                        url: "//" + that.config.api_URL.payUrl + "/GameParam/saveParams.do?",
                                        type: "POST",
                                        data: {
                                            passport: passport,
                                            gameCode: that.config.gameCode,
                                            serverCode: that.config.serverCode,
                                            param: that.config.param,
                                            siteCode: that.config.siteCode,
                                            tag: "website",
                                            language: that.config.language,
                                            os: that.config.os,
                                            packageName: that.config.packageName
                                        },
                                        dataType: "jsonp",
                                        success: function success(resl) {
                                            if (resl.code === 3) {
                                                $.ajax({
                                                    type: "POST",
                                                    url: "//" + that.config.api_URL.payUrl + "/mcSDKStrore/mycardConvertMobile.do?",
                                                    data: {
                                                        lpoint: itemList[bnindex].Amount,
                                                        siteCode: that.config.siteCode,
                                                        passport: passport,
                                                        gameCode: that.config.gameCode,
                                                        language: that.config.language,
                                                        os: that.config.os,
                                                        packageName: that.config.packageName,
                                                        currency: itemList[bnindex].Currency
                                                    },
                                                    dataType: "jsonp",
                                                    success: function success(data) {
                                                        if (data.code === "004") {
                                                            $.ajax({
                                                                type: "POST",
                                                                url: "//" + that.config.api_URL.payUrl + "/mcSDKStrore/getMycardAuthCode.do?",
                                                                data: {
                                                                    lpoint: data.lpoint,
                                                                    siteCode: data.siteCode,
                                                                    passport: data.passport,
                                                                    t: data.t,
                                                                    ck: data.ck,
                                                                    paymentType: bank[zindex].PaymentType,
                                                                    itemCode: itemList[bnindex].ItemCode,
                                                                    packageName: that.config.packageName,
                                                                    payType: "paytolpoint",
                                                                    gameCode: that.config.gameCode,
                                                                    serverCode: that.config.serverCode,
                                                                    payGameLpoint: 0,
                                                                    language: that.config.language,
                                                                    os: that.config.os,
                                                                    isWeb: 2,
                                                                    currency: itemList[bnindex].Currency
                                                                },
                                                                dataType: "jsonp",
                                                                success: function success(res) {
                                                                    if (res.code === "011") {
                                                                        window.location.href = res.url;
                                                                        // window.open(res.url)
                                                                    } else {
                                                                        alert(res.msg);
                                                                    }
                                                                }
                                                            });
                                                        }
                                                    }
                                                });
                                            }
                                        }
                                    });
                                });
                            };

                            for (var bn = 0; bn < itemList.length; bn++) {
                                _loop8(bn);
                            }
                        });
                    };

                    for (var z = 0; z < bank.length; z++) {
                        _loop3(z);
                    }

                    var _loop4 = function _loop4(h) {
                        var hindex = h;
                        $(".phone_pay" + hindex).click(function () {
                            var itemList = phone[hindex].ItemList;
                            for (var ch = 0; ch < itemList.length; ch++) {
                                var chindex = ch;
                                ga_item.innerHTML += "<li class=\"phone_ga" + chindex + "\">\n                                                    <a href=\"#\">\n                                                <div class=\"b_link\">\n                                                    " + itemList[chindex].Amount + itemList[chindex].Currency + "= <span style=\"color: #0198F8\">" + itemList[chindex].Amount + that.config.mateLanguage.TW_Language.point_pt + "\n                                                 </div>\n                                            <span class=\"r_icon\"></span>\n                                        </a>\n                                    </li>";
                            }
                            $(".Selex-contant").html(ga_item);
                            $(".excPoint_Sel").show();
                            $(".excPoint").hide();

                            var _loop9 = function _loop9(ph) {
                                var phindex = ph;
                                $(".phone_ga" + phindex).click(function () {
                                    $.ajax({
                                        url: "//" + that.config.api_URL.payUrl + "/GameParam/saveParams.do?",
                                        type: "POST",
                                        data: {
                                            passport: passport,
                                            gameCode: that.config.gameCode,
                                            serverCode: that.config.serverCode,
                                            param: that.config.param,
                                            siteCode: that.config.siteCode,
                                            tag: "website",
                                            language: that.config.language,
                                            os: that.config.os,
                                            packageName: that.config.packageName
                                        },
                                        dataType: "jsonp",
                                        success: function success(resl) {
                                            if (resl.code === 3) {
                                                $.ajax({
                                                    type: "POST",
                                                    url: "//" + that.config.api_URL.payUrl + "/mcSDKStrore/mycardConvertMobile.do?",
                                                    data: {
                                                        lpoint: itemList[phindex].Amount,
                                                        siteCode: that.config.siteCode,
                                                        passport: passport,
                                                        gameCode: that.config.gameCode,
                                                        language: that.config.language,
                                                        os: that.config.os,
                                                        packageName: that.config.packageName,
                                                        currency: itemList[phindex].Currency
                                                    },
                                                    dataType: "jsonp",
                                                    success: function success(data) {
                                                        if (data.code === "004") {
                                                            $.ajax({
                                                                type: "POST",
                                                                url: "//" + that.config.api_URL.payUrl + "/mcSDKStrore/getMycardAuthCode.do?",
                                                                data: {
                                                                    lpoint: data.lpoint,
                                                                    siteCode: data.siteCode,
                                                                    passport: data.passport,
                                                                    t: data.t,
                                                                    ck: data.ck,
                                                                    paymentType: phone[hindex].PaymentType,
                                                                    itemCode: itemList[phindex].ItemCode,
                                                                    packageName: that.config.packageName,
                                                                    payType: "paytolpoint",
                                                                    gameCode: that.config.gameCode,
                                                                    serverCode: that.config.serverCode,
                                                                    payGameLpoint: 0,
                                                                    language: that.config.language,
                                                                    os: that.config.os,
                                                                    isWeb: 2,
                                                                    currency: itemList[phindex].Currency
                                                                },
                                                                dataType: "jsonp",
                                                                success: function success(res) {
                                                                    if (res.code === "011") {
                                                                        window.location.href = res.url;
                                                                    } else {
                                                                        alert(res.msg);
                                                                    }
                                                                }
                                                            });
                                                        }
                                                    }
                                                });
                                            }
                                        }
                                    });
                                });
                            };

                            for (var ph = 0; ph < itemList.length; ph++) {
                                _loop9(ph);
                            }
                        });
                    };

                    for (var h = 0; h < phone.length; h++) {
                        _loop4(h);
                    }

                    var _loop5 = function _loop5(l) {
                        var lindex = l;
                        $(".creditCard_pay" + lindex).click(function () {
                            var itemLists = creditCard[lindex].ItemList;
                            for (var ll = 0; ll < itemLists.length; ll++) {
                                var llindex = ll;
                                ga_item.innerHTML += "<li class=\"creditCard_ga" + llindex + "\">\n                                                    <a href=\"#\">\n                                                <div class=\"b_link\">\n                                                    " + itemLists[llindex].Amount + itemLists[llindex].Currency + "= <span style=\"color: #0198F8\">" + itemLists[llindex].Amount + that.config.mateLanguage.TW_Language.point_pt + "\n                                                 </div>\n                                            <span class=\"r_icon\"></span>\n                                        </a>\n                                    </li>";
                            }
                            $(".Selex-contant").html(ga_item);
                            $(".excPoint_Sel").show();
                            $(".excPoint").hide();

                            var _loop10 = function _loop10(cc) {
                                var ccindex = cc;
                                $(".creditCard_ga" + ccindex).click(function () {
                                    $.ajax({
                                        url: "//" + that.config.api_URL.payUrl + "/GameParam/saveParams.do?",
                                        type: "POST",
                                        data: {
                                            passport: passport,
                                            gameCode: that.config.gameCode,
                                            serverCode: that.config.serverCode,
                                            param: that.config.param,
                                            siteCode: that.config.siteCode,
                                            tag: "website",
                                            language: that.config.language,
                                            os: that.config.os,
                                            packageName: that.config.packageName
                                        },
                                        dataType: "jsonp",
                                        success: function success(resl) {
                                            if (resl.code === 3) {
                                                $.ajax({
                                                    type: "POST",
                                                    url: "//" + that.config.api_URL.payUrl + "/mcSDKStrore/mycardConvertMobile.do?",
                                                    data: {
                                                        lpoint: itemLists[ccindex].Amount,
                                                        siteCode: that.config.siteCode,
                                                        passport: passport,
                                                        gameCode: that.config.gameCode,
                                                        language: that.config.language,
                                                        os: that.config.os,
                                                        packageName: that.config.packageName,
                                                        currency: itemLists[ccindex].Currency
                                                    },
                                                    dataType: "jsonp",
                                                    success: function success(data) {
                                                        if (data.code === "004") {
                                                            $.ajax({
                                                                type: "POST",
                                                                url: "//" + that.config.api_URL.payUrl + "/mcSDKStrore/getMycardAuthCode.do?",
                                                                data: {
                                                                    lpoint: data.lpoint,
                                                                    siteCode: data.siteCode,
                                                                    passport: data.passport,
                                                                    t: data.t,
                                                                    ck: data.ck,
                                                                    paymentType: creditCard[lindex].PaymentType,
                                                                    itemCode: itemLists[ccindex].ItemCode,
                                                                    packageName: that.config.packageName,
                                                                    payType: "paytolpoint",
                                                                    gameCode: that.config.gameCode,
                                                                    serverCode: that.config.serverCode,
                                                                    payGameLpoint: 0,
                                                                    language: that.config.language,
                                                                    os: that.config.os,
                                                                    isWeb: 2,
                                                                    currency: itemLists[ccindex].Currency
                                                                },
                                                                dataType: "jsonp",
                                                                success: function success(res) {
                                                                    if (res.code === "011") {
                                                                        window.location.href = res.url;
                                                                    } else {
                                                                        alert(res.msg);
                                                                    }
                                                                }
                                                            });
                                                        }
                                                    }
                                                });
                                            }
                                        }
                                    });
                                });
                            };

                            for (var cc = 0; cc < itemLists.length; cc++) {
                                _loop10(cc);
                            }
                        });
                    };

                    for (var l = 0; l < creditCard.length; l++) {
                        _loop5(l);
                    }

                    var _loop6 = function _loop6(po) {
                        var poindex = po;
                        var authCode = void 0;
                        $(".PointCard_pay" + poindex).click(function () {

                            $.ajax({
                                type: "POST",
                                url: "//" + that.config.api_URL.payUrl + "/mcSDKStrore/mycardConvertMobile.do?",
                                data: {
                                    lpoint: a.ItemList[poindex].Amount,
                                    siteCode: that.config.siteCode,
                                    passport: passport,
                                    gameCode: that.config.gameCode,
                                    language: that.config.language,
                                    os: that.config.os,
                                    packageName: that.config.packageName,
                                    currency: a.ItemList[poindex].Currency
                                },
                                dataType: "jsonp",
                                success: function success(res) {
                                    if (res.code === "004") {
                                        $.ajax({
                                            type: "POST",
                                            url: "//" + that.config.api_URL.payUrl + "/mcSDKStrore/getMycardAuthCode.do?",
                                            data: {
                                                lpoint: res.lpoint,
                                                siteCode: res.siteCode,
                                                passport: res.passport,
                                                t: res.t,
                                                ck: res.ck,
                                                paymentType: a.PaymentType,
                                                itemCode: a.ItemList[poindex].ItemCode,
                                                payType: "paytolpoint",
                                                serverCode: that.config.serverCode,
                                                payGameLpoint: 0,
                                                gameCode: that.config.gameCode,
                                                language: that.config.language,
                                                os: that.config.os,
                                                packageName: that.config.packageName,
                                                isWeb: 1,
                                                currency: a.ItemList[poindex].Currency
                                            },
                                            dataType: "jsonp",
                                            success: function success(data) {
                                                if (data.code === "011") {
                                                    authCode = data.authCode;
                                                } else {
                                                    alert(data.msg);
                                                }
                                            }
                                        });
                                    }
                                }
                            });

                            point_Div.innerHTML += "\n                                <div class=\"point_code\">\n                                    <span>" + that.config.mateLanguage.TW_Language.codeNum + ":</span> <input type=\"text\" id=\"inpCode\" placeholder=\"" + that.config.mateLanguage.TW_Language.codeDes + "\">\n                                </div>\n                                <div class=\"point_pass\">\n                                    <span>" + that.config.mateLanguage.TW_Language.codePass + ":</span> <input type=\"password\" name=\"\" id=\"inpPass\" placeholder=\"" + that.config.mateLanguage.TW_Language.codePassDes + "\">\n                                    <span class=\"icon_open iconfont icon-yanjing\"></span>\n                                    <span class=\"close iconfont icon-biyan\"></span>\n                                </div>\n                                <div class=\"coinPay\">\n                                    <input type=\"button\" value=\"" + that.config.mateLanguage.TW_Language.exchange + "\" id=\"coinBtn\">\n                                </div>\n                            ";
                            $(".ex-contant").html(point_Div.innerHTML);

                            $(".icon_open").click(function () {
                                $("#inpPass").attr("type", "text");
                                $(".close").show();
                                $(".icon_open").hide();
                            });
                            $(".close").click(function () {
                                $("#inpPass").attr("type", "password");
                                $(".close").hide();
                                $(".icon_open").show();
                            });

                            $("#coinBtn").click(function () {

                                var CardID = $("#inpCode").val();
                                var CardPW = $("#inpPass").val();

                                if (CardID && CardID) {
                                    $.ajax({
                                        type: "POST",
                                        url: "//" + that.config.api_URL.payUrl + "/mcSDKStrore/ingameForCard.do?",
                                        data: {
                                            authCode: authCode,
                                            gameCode: that.config.gameCode,
                                            language: that.config.language,
                                            os: that.config.os,
                                            packageName: that.config.packageName,
                                            CardID: CardID,
                                            CardPW: CardPW
                                        },
                                        dataType: "jsonp",
                                        beforeSend: function beforeSend(e) {
                                            $(".load-container").show();
                                            $(".showad").show();
                                        },
                                        success: function success(res) {
                                            $(".load-container").hide();
                                            $(".showad").hide();

                                            if (res.code === "4") {
                                                alert("交易失敗，請您再次確認或重新操作。若有疑問請洽客服");
                                            } else if (res.code === "12") {
                                                alert(res.msg);
                                            } else if (res.code === "012") {
                                                that.getUserInfo();
                                                $(".excPoint").hide();
                                                $(".pay-box").show();
                                            }
                                        }
                                    });
                                }
                            });
                        });
                    };

                    for (var po = 0; po < a.ItemList.length; po++) {
                        _loop6(po);
                    }

                    var _loop7 = function _loop7(my) {
                        var myindex = my;
                        $(".MyCard_pay" + myindex).click(function () {
                            $.ajax({
                                url: "//" + that.config.api_URL.payUrl + "/GameParam/saveParams.do?",
                                type: "POST",
                                data: {
                                    passport: passport,
                                    gameCode: that.config.gameCode,
                                    serverCode: that.config.serverCode,
                                    param: that.config.param,
                                    siteCode: that.config.siteCode,
                                    tag: "website",
                                    language: that.config.language,
                                    os: that.config.os,
                                    packageName: that.config.packageName
                                },
                                dataType: "jsonp",
                                success: function success(resl) {
                                    if (resl.code === 3) {
                                        $.ajax({
                                            type: "POST",
                                            url: "//" + that.config.api_URL.payUrl + "/mcSDKStrore/mycardConvertMobile.do?",
                                            data: {
                                                lpoint: b.ItemList[myindex].Amount,
                                                siteCode: that.config.siteCode,
                                                passport: passport,
                                                gameCode: that.config.gameCode,
                                                language: that.config.language,
                                                os: that.config.os,
                                                packageName: that.config.packageName,
                                                currency: b.ItemList[myindex].Currency
                                            },
                                            dataType: "jsonp",
                                            success: function success(data) {
                                                if (data.code === "004") {
                                                    $.ajax({
                                                        type: "POST",
                                                        url: "//" + that.config.api_URL.payUrl + "/mcSDKStrore/getMycardAuthCode.do?",
                                                        data: {
                                                            lpoint: data.lpoint,
                                                            siteCode: data.siteCode,
                                                            passport: data.passport,
                                                            t: data.t,
                                                            ck: data.ck,
                                                            paymentType: b.PaymentType,
                                                            itemCode: b.ItemList[myindex].ItemCode,
                                                            packageName: that.config.packageName,
                                                            payType: "paytolpoint",
                                                            gameCode: that.config.gameCode,
                                                            serverCode: that.config.serverCode,
                                                            payGameLpoint: 0,
                                                            language: that.config.language,
                                                            os: that.config.os,
                                                            isWeb: 2,
                                                            currency: b.ItemList[myindex].Currency
                                                        },
                                                        dataType: "jsonp",
                                                        success: function success(res) {
                                                            if (res.code === "011") {
                                                                window.location.href = res.url;
                                                            } else {
                                                                alert(res.msg);
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        });
                                    }
                                }
                            });
                        });
                    };

                    for (var my = 0; my <= b.ItemList.length; my++) {
                        _loop7(my);
                    }
                });
            };

            for (var i = 1; i <= 5; i++) {
                _loop2(i);
            }
        },
        //FB 官方支付
        FBPay: function FBPay() {
            // console.log("fbPay --------> " + Pay.prototype.config.itemCode);
            var passport = Pay.prototype.config.passport;
            var serverCode = Pay.prototype.config.serverCode;
            var touchuancanshu = Pay.prototype.config.param;
            var itemCode = Pay.prototype.config.itemCode;

            // 获取使用的api
            var supportedAPIs = FBInstant.getSupportedAPIs();
            var canMakePurchases = supportedAPIs.includes('payments.getCatalogAsync');
            if (!canMakePurchases) {
                console.log("error:This session does not support purchases");
                return;
            }
            if (passport == '' || serverCode == '') {
                console.log("passport or serverCode error");
                return;
            }
            if (touchuancanshu == "") {
                touchuancanshu = "none";
            }
            console.log(FBInstant.payments.getCatalogAsync());
            //进行官方储值
            $.ajax({
                type: "POST",
                url: myFbinstantConfig.myfbPayInitUrl,
                data: {
                    appid: Pay.prototype.config.appid,
                    passport: passport,
                    itemCode: itemCode,
                    siteCode: Pay.prototype.config.siteCode,
                    gameCode: Pay.prototype.config.gameCode,
                    serverCode: serverCode,
                    language: Pay.prototype.config.language,
                    os: Pay.prototype.config.os
                },
                dataType: "jsonp",
                success: function success(res) {
                    if (res.code === "5") {
                        // $(".load-container").show()
                        // $(".showad").show()
                        // var timer = setTimeout(function () {
                        // 	$(".load-container").hide()
                        // 	$(".showad").hide()
                        // }, 5000)
                        FBInstant.payments.onReady(function () {
                            console.log('Payments Ready!');
                            FBInstant.payments.purchaseAsync({
                                productID: itemCode,
                                developerPayload: res.lunplayOrderId + ":" + touchuancanshu
                            }).then(function (purchase) {
                                // 将订单信息 先保存 防止因为网络或其他原因导致 玩家储值失败
                                var paydata = {
                                    purchase: purchase,
                                    appid: Pay.prototype.config.appid,
                                    gameCode: Pay.prototype.config.gameCode,
                                    language: Pay.prototype.config.language,
                                    os: Pay.prototype.config.os
                                };
                                localStorage.setItem("paydata", JSON.stringify(paydata));

                                FBInstant.payments.consumePurchaseAsync(purchase.purchaseToken).then(function () {
                                    $.ajax({
                                        type: "POST",
                                        url: myFbinstantConfig.myfbPayCallBackUrl,
                                        data: {
                                            sigreq: purchase.signedRequest,
                                            appid: Pay.prototype.config.appid,
                                            gameCode: Pay.prototype.config.gameCode,
                                            language: Pay.prototype.config.language,
                                            os: Pay.prototype.config.os
                                        },
                                        dataType: "jsonp",
                                        success: function success(data) {
                                            //如果这笔订单完成 将刚刚存起来的订单删除
                                            // 18表示 储值完成  99 表示 储值在之前已完成
                                            if (data.code === "18" || data.code === "99") {
                                                localStorage.removeItem("paydata");

                                                //关闭储值框
                                                $(".main").remove();
                                            } else {
                                                alert(data.msg);
                                            }
                                        }
                                    });
                                });
                            }).catch(function (err) {
                                // $(".load-container").hide()
                                // $(".showad").hide()
                            });
                        });
                    }
                }
            });
        },
        openElse: function openElse() {
            $.ajax({
                url: "//" + this.config.api_URL.appsmobileUrl + "/dist/openElseFB.do?",
                type: "POST",
                data: {
                    gameCode: this.config.gameCode,
                    packageName: this.config.packageName,
                    language: this.config.language,
                    os: this.config.os,
                    glevel: this.config.glevel
                },
                dataType: "jsonp",
                success: function success(res) {
                    if (res.code === "1") {
                        Pay.prototype.createElement();
                        // Pay.prototype.FBPay()
                    } else if (res.code === "0") {
                        // Pay.prototype.FBPay()
                        Pay.prototype.createElement();
                    }
                }
            });
        },
        getGameInfo: function getGameInfo() {
            $.ajax({
                url: "//" + this.config.api_URL.appsmobileUrl + "/dist/mobile_store_getgameInfo_public.do?",
                type: "POST",
                data: {
                    gameCode: this.config.gameCode,
                    serverCode: this.config.serverCode,
                    packageName: this.config.packageName,
                    language: this.config.language,
                    os: this.config.os
                },
                dataType: "jsonp",
                success: function success(res) {
                    if (res.code === "1") {
                        $(".pay-gname").text(res.gameName);
                        $(".spay-game").text("(" + res.serverName + ")");
                    } else {
                        alert(res.msg);
                    }
                }
            });
        },
        getUserInfo: function getUserInfo() {
            var that = this;
            $.ajax({
                url: "//" + that.config.api_URL.loginUrl + "/login/getUserInfo.do?",
                type: "POST",
                data: {
                    SessionID_LP: j,
                    language: that.config.language,
                    gameCode: that.config.gameCode,
                    packageName: that.config.packageName,
                    os: that.config.os
                },
                dataType: "jsonp",
                success: function success(res) {
                    if (res.code === "1000") {
                        LpointValue = res.user.totalpoint - res.user.usepoint;
                        passport = res.user.passport;
                        $(".username").text(res.user.username);
                        $(".point").text(LpointValue);
                        $(".userPoint").text(LpointValue);

                        //獲取兌換遊戲幣品項類表
                        $.ajax({
                            url: "//" + that.config.api_URL.appsmobileUrl + "/dist/getPayItemByFbInstantGame.do?",
                            type: "POST",
                            data: {
                                gameCode: that.config.gameCode,
                                itemCode: that.config.itemCode,
                                LpointValue: LpointValue,
                                packageName: that.config.packageName,
                                language: that.config.language,
                                os: that.config.os
                            },
                            dataType: "jsonp",
                            success: function success(result) {
                                if (result.code === "003") {

                                    $(".pay-o-info").text(decodeURI(result.itemCont.replace(/\s+|\+|/g, "")));
                                    lpoint = result.lpoint;
                                    if (LpointValue - lpoint < 0) {
                                        $(".exchangeBuy").hide();
                                        $(".pay-buy").show();
                                    } else {
                                        $(".exchangeBuy").show();
                                        $(".pay-buy").hide();
                                    }
                                }
                            }
                        });
                    } else {
                        alert(res.msg);
                    }
                }
            });
        },
        //获取SessionID_LP
        getSessionID_LP: function getSessionID_LP() {
            $.ajax({
                url: "//" + this.config.api_URL.loginUrl + "/login/userPassportLogin.do?",
                type: "POST",
                data: {
                    passport: this.config.passport,
                    sitecode: this.config.siteCode,
                    t: this.config.t,
                    ck: this.config.ck,
                    language: this.config.language,
                    gameCode: this.config.gameCode,
                    packageName: this.config.packageName,
                    os: this.config.os
                },
                dataType: "jsonp",
                success: function success(res) {
                    if (res.code === "1000") {
                        j = res.sessionID;
                    }
                }
            });
        }
    };
    Object.freeze(Pay);
    window.Pay = Pay;
})(window, document);