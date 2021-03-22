"use strict";

var Check = {
    check_login_username: function check_login_username() {
        alert("賬號或密碼不能為空");
    },
    check_login_password: function check_login_password() {
        alert("賬號或密碼不能為空");
    },
    check_login_checkaccount: function check_login_checkaccount() {
        alert("賬號只能是3-32位數字或字母（區分大小寫）開頭+數字字母的郵箱，\n及3-32位數字組成的手機號");
    },
    check_login_checkapassword: function check_login_checkapassword() {
        alert("請輸入6-20位數字或字母組成的密碼");
    },
    check_login_reppassword: function check_login_reppassword() {
        alert("密碼與重複密碼輸入不一致");
    },
    check_login_email: function check_login_email() {
        alert("您輸入的郵箱格式不正確");
    }
};