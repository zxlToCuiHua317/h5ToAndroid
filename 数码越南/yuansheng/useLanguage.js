    var getLanguage = JSON.parse(localStorage.getItem("gameData")).language
    switch (getLanguage) {
        case "TW":
            document.querySelector("#enter_game_ns").value = (language.TW.lp_platform_login_activity_btn_enter)
            document.querySelector(".handle_head_title").innerText = (language.TW.lp_login_activity_text1)
            document.querySelector(".handle_icon_facebook").innerText = (language.TW.lp_login_activity_facebook_text)
            document.querySelector(".handle_icon_sw").innerText = (language.TW.lp_login_activity_sw_text)
            document.querySelector(".handle_icon_pt").innerText = (language.TW.lp_login_activity_pt_text)
            document.querySelector("#login_username_ns").setAttribute("placeholder", language.TW.lp_platform_login_account_hint)
            document.querySelector("#login_userpassword_ns").setAttribute("placeholder", language.TW.lp_platform_login_activity_login_hint_password)
            document.querySelector(".login_button_ns").value = (language.TW.lp_platform_login_activity_btn_enter)
            document.querySelector(".forget_password_ns span").innerText = (language.TW.lp_platform_login_activity_retrieve_password_txt)
            document.querySelector(".click_registered_ns").innerText = (language.TW.lp_platform_login_activity_register)
            document.querySelector(".account_management_ns").innerText = (language.TW.lp_platform_login_activity_account_manager)
            document.querySelector("#retrieve_username_ns").setAttribute("placeholder", language.TW.lp_retrieve_password_activity_hint_acc)
            document.querySelector("#retrieve_email_ns").setAttribute("placeholder", language.TW.lp_retrieve_password_activity_hint_email)
            document.querySelector(".retrieve_password_ns").value = (language.TW.lp_retrieve_password_activity_retrieve_pwd)
            document.querySelector("#registered_username_ns").setAttribute("placeholder", language.TW.lp_register_activity_hint_username)
            document.querySelector("#registered_userpassword_ns").setAttribute("placeholder", language.TW.lp_register_activity_hint_password)
            document.querySelector("#registered_repeatpassword_ns").setAttribute("placeholder", language.TW.lp_register_activity_hint_reppassword)
            document.querySelector("#registered_email_ns").setAttribute("placeholder", language.TW.lp_register_activity_hint_email)
            document.querySelector(".registered_button_ns").value = (language.TW.lp_register_activity_register_txt)

            document.querySelector(".user_agree_rule").innerText = (language.TW.lp_register_activity_agree_rule)
            document.querySelector(".toRule").innerText = (language.TW.lp_register_activity_rule_manage)

            document.querySelector(".account1_ns").innerText = (language.TW.lp_updatepassword_txt_updatepassword)
            document.querySelector(".account2_ns").innerText = (language.TW.lp_account_manage_activity_guest_binding)
            document.querySelector(".account3_ns").innerText = (language.TW.lp_account_manage_activity_facebook_binding)

            document.querySelector("#changePass_phone_ns").setAttribute("placeholder", language.TW.lp_accountbing_edt_username)
            document.querySelector("#changePass_userpassword_ns").setAttribute("placeholder", language.TW.lp_updatepassword_txt_oldpassword)
            document.querySelector("#changePass_newpassword_ns").setAttribute("placeholder", language.TW.lp_updatepassword_txt_newpassword)
            document.querySelector("#changePass_repeatpassword_ns").setAttribute("placeholder", language.TW.lp_updatepassword_txt_reppassword)
            document.querySelector(".changePass_button_ns").value = (language.TW.lp_updatepassword_btn_updatepassword)

            document.querySelector("#play_username_ns").setAttribute("placeholder", language.TW.lp_accountbing_edt_username)
            document.querySelector("#play_userpassword_ns").setAttribute("placeholder", language.TW.lp_accountbing_edt_password)
            document.querySelector("#play_repeatpassword_ns").setAttribute("placeholder", language.TW.lp_accountbing_edt_reppassword)
            document.querySelector("#play_email_ns").setAttribute("placeholder", language.TW.lp_account_binding_activity_email_hint)
            document.querySelector(".play_button_ns").value = (language.TW.lp_accountbing_btn_accountbing)

            document.querySelector("#fb_username_ns").setAttribute("placeholder", language.TW.lp_accountbing_edt_username)
            document.querySelector("#fb_userpassword_ns").setAttribute("placeholder", language.TW.lp_accountbing_edt_password)
            document.querySelector("#fb_repeatpassword_ns").setAttribute("placeholder", language.TW.lp_accountbing_edt_reppassword)
            document.querySelector("#fb_email_ns").setAttribute("placeholder", language.TW.lp_account_binding_activity_email_hint)
            document.querySelector(".fb_button_ns").value = (language.TW.lp_accountbing_btn_accountbing)

            document.querySelector(".title_loding").innerText = (language.TW.lp_sdk_login_activity_tips_msg)
            document.querySelector(".quit_btn").innerText = (language.TW.lp_sdk_login_activity_tips_switch_msg)
            break;
        case "KR":
            document.querySelector("#enter_game_ns").value = (language.KR.lp_platform_login_activity_btn_enter)
            document.querySelector(".handle_head_title").innerText = (language.KR.lp_login_activity_text1)
            document.querySelector(".handle_icon_facebook").innerText = (language.KR.lp_login_activity_facebook_text)
            document.querySelector(".handle_icon_sw").innerText = (language.KR.lp_login_activity_sw_text)
            document.querySelector(".handle_icon_pt").innerText = (language.KR.lp_login_activity_pt_text)
            document.querySelector("#login_username_ns").setAttribute("placeholder", language.KR.lp_platform_login_account_hint)
            document.querySelector("#login_userpassword_ns").setAttribute("placeholder", language.KR.lp_platform_login_activity_login_hint_password)
            document.querySelector(".login_button_ns").value = (language.KR.lp_platform_login_activity_btn_enter)

            document.querySelector(".forget_password_ns span").innerText = (language.KR.lp_platform_login_activity_retrieve_password_txt)
            document.querySelector(".click_registered_ns").innerText = (language.KR.lp_platform_login_activity_register)
            document.querySelector(".account_management_ns").innerText = (language.KR.lp_platform_login_activity_account_manager)

            document.querySelector("#retrieve_username_ns").setAttribute("placeholder", language.KR.lp_retrieve_password_activity_hint_acc)
            document.querySelector("#retrieve_email_ns").setAttribute("placeholder", language.KR.lp_retrieve_password_activity_hint_email)
            document.querySelector(".retrieve_password_ns").value = (language.KR.lp_retrieve_password_activity_retrieve_pwd)

            document.querySelector("#registered_username_ns").setAttribute("placeholder", language.KR.lp_register_activity_hint_username)
            document.querySelector("#registered_userpassword_ns").setAttribute("placeholder", language.KR.lp_register_activity_hint_password)
            document.querySelector("#registered_repeatpassword_ns").setAttribute("placeholder", language.KR.lp_register_activity_hint_reppassword)
            document.querySelector("#registered_email_ns").setAttribute("placeholder", language.KR.lp_register_activity_hint_email)
            document.querySelector(".registered_button_ns").value = (language.KR.lp_register_activity_register_txt)

            document.querySelector(".user_agree_rule").innerText = (language.KR.lp_register_activity_agree_rule)
            document.querySelector(".toRule").innerText = (language.KR.lp_register_activity_rule_manage)

            document.querySelector(".account1_ns").innerText = (language.KR.lp_updatepassword_txt_updatepassword)
            document.querySelector(".account2_ns").innerText = (language.KR.lp_account_manage_activity_guest_binding)
            document.querySelector(".account3_ns").innerText = (language.KR.lp_account_manage_activity_facebook_binding)

            document.querySelector("#changePass_phone_ns").setAttribute("placeholder", language.KR.lp_accountbing_edt_username)
            document.querySelector("#changePass_userpassword_ns").setAttribute("placeholder", language.KR.lp_updatepassword_txt_oldpassword)
            document.querySelector("#changePass_newpassword_ns").setAttribute("placeholder", language.KR.lp_updatepassword_txt_newpassword)
            document.querySelector("#changePass_repeatpassword_ns").setAttribute("placeholder", language.KR.lp_updatepassword_txt_reppassword)
            document.querySelector(".changePass_button_ns").value = (language.KR.lp_updatepassword_btn_updatepassword)

            document.querySelector("#play_username_ns").setAttribute("placeholder", language.KR.lp_accountbing_edt_username)
            document.querySelector("#play_userpassword_ns").setAttribute("placeholder", language.KR.lp_accountbing_edt_password)
            document.querySelector("#play_repeatpassword_ns").setAttribute("placeholder", language.KR.lp_accountbing_edt_reppassword)
            document.querySelector("#play_email_ns").setAttribute("placeholder", language.KR.lp_account_binding_activity_email_hint)
            document.querySelector(".play_button_ns").value = (language.KR.lp_accountbing_btn_accountbing)

            document.querySelector("#fb_username_ns").setAttribute("placeholder", language.KR.lp_accountbing_edt_username)
            document.querySelector("#fb_userpassword_ns").setAttribute("placeholder", language.KR.lp_accountbing_edt_password)
            document.querySelector("#fb_repeatpassword_ns").setAttribute("placeholder", language.KR.lp_accountbing_edt_reppassword)
            document.querySelector("#fb_email_ns").setAttribute("placeholder", language.KR.lp_account_binding_activity_email_hint)
            document.querySelector(".fb_button_ns").value = (language.KR.lp_accountbing_btn_accountbing)

            document.querySelector(".title_loding").innerText = (language.KR.lp_sdk_login_activity_tips_msg)
            document.querySelector(".quit_btn").innerText = (language.KR.lp_sdk_login_activity_tips_switch_msg)
            break;
        case "English":
            document.querySelector("#enter_game_ns").value = (language.VN.lp_platform_login_activity_btn_enter)
            document.querySelector(".handle_head_title").innerText = (language.VN.lp_login_activity_text1)
            document.querySelector(".handle_icon_facebook").innerText = (language.VN.lp_login_activity_facebook_text)
            document.querySelector(".handle_icon_sw").innerText = (language.VN.lp_login_activity_sw_text)
            document.querySelector(".handle_icon_pt").innerText = (language.VN.lp_login_activity_pt_text)
            document.querySelector("#login_username_ns").setAttribute("placeholder", language.VN.lp_platform_login_account_hint)
            document.querySelector("#login_userpassword_ns").setAttribute("placeholder", language.VN.lp_platform_login_activity_login_hint_password)
            document.querySelector(".login_button_ns").value = (language.VN.lp_platform_login_activity_btn_enter)

            document.querySelector(".forget_password_ns span").innerText = (language.VN.lp_platform_login_activity_retrieve_password_txt)
            document.querySelector(".click_registered_ns").innerText = (language.VN.lp_platform_login_activity_register)
            document.querySelector(".account_management_ns").innerText = (language.VN.lp_platform_login_activity_account_manager)

            document.querySelector("#retrieve_username_ns").setAttribute("placeholder", language.VN.lp_retrieve_password_activity_hint_acc)
            document.querySelector("#retrieve_email_ns").setAttribute("placeholder", language.VN.lp_retrieve_password_activity_hint_email)
            document.querySelector(".retrieve_password_ns").value = (language.VN.lp_retrieve_password_activity_retrieve_pwd)

            document.querySelector("#registered_username_ns").setAttribute("placeholder", language.VN.lp_register_activity_hint_username)
            document.querySelector("#registered_userpassword_ns").setAttribute("placeholder", language.VN.lp_register_activity_hint_password)
            document.querySelector("#registered_repeatpassword_ns").setAttribute("placeholder", language.VN.lp_register_activity_hint_reppassword)
            document.querySelector("#registered_email_ns").setAttribute("placeholder", language.VN.lp_register_activity_hint_email)
            document.querySelector(".registered_button_ns").value = (language.VN.lp_register_activity_register_txt)

            document.querySelector(".user_agree_rule").innerText = (language.VN.lp_register_activity_agree_rule)
            document.querySelector(".toRule").innerText = (language.VN.lp_register_activity_rule_manage)

            document.querySelector(".account1_ns").innerText = (language.VN.lp_updatepassword_txt_updatepassword)
            document.querySelector(".account2_ns").innerText = (language.VN.lp_account_manage_activity_guest_binding)
            document.querySelector(".account3_ns").innerText = (language.VN.lp_account_manage_activity_facebook_binding)

            document.querySelector("#changePass_phone_ns").setAttribute("placeholder", language.VN.lp_accountbing_edt_username)
            document.querySelector("#changePass_userpassword_ns").setAttribute("placeholder", language.VN.lp_updatepassword_txt_oldpassword)
            document.querySelector("#changePass_newpassword_ns").setAttribute("placeholder", language.VN.lp_updatepassword_txt_newpassword)
            document.querySelector("#changePass_repeatpassword_ns").setAttribute("placeholder", language.VN.lp_updatepassword_txt_reppassword)
            document.querySelector(".changePass_button_ns").value = (language.VN.lp_updatepassword_btn_updatepassword)

            document.querySelector("#play_username_ns").setAttribute("placeholder", language.VN.lp_accountbing_edt_username)
            document.querySelector("#play_userpassword_ns").setAttribute("placeholder", language.VN.lp_accountbing_edt_password)
            document.querySelector("#play_repeatpassword_ns").setAttribute("placeholder", language.VN.lp_accountbing_edt_reppassword)
            document.querySelector("#play_email_ns").setAttribute("placeholder", language.VN.lp_account_binding_activity_email_hint)
            document.querySelector(".play_button_ns").value = (language.VN.lp_accountbing_btn_accountbing)

            document.querySelector("#fb_username_ns").setAttribute("placeholder", language.VN.lp_accountbing_edt_username)
            document.querySelector("#fb_userpassword_ns").setAttribute("placeholder", language.VN.lp_accountbing_edt_password)
            document.querySelector("#fb_repeatpassword_ns").setAttribute("placeholder", language.VN.lp_accountbing_edt_reppassword)
            document.querySelector("#fb_email_ns").setAttribute("placeholder", language.VN.lp_account_binding_activity_email_hint)
            document.querySelector(".fb_button_ns").value = (language.VN.lp_accountbing_btn_accountbing)

            document.querySelector(".title_loding").innerText = (language.VN.lp_sdk_login_activity_tips_msg)
            document.querySelector(".quit_btn").innerText = (language.VN.lp_sdk_login_activity_tips_switch_msg)
            break;
        case "VN":
            document.querySelector("#enter_game_ns").value = (language.VN.lp_platform_login_activity_btn_enter)
            document.querySelector(".handle_head_title").innerText = (language.VN.lp_login_activity_text1)
            document.querySelector(".handle_icon_facebook").innerText = (language.VN.lp_login_activity_facebook_text)
            document.querySelector(".handle_icon_sw").innerText = (language.VN.lp_login_activity_sw_text)
            document.querySelector(".handle_icon_pt").innerText = (language.VN.lp_login_activity_pt_text)
            document.querySelector("#login_username_ns").setAttribute("placeholder", language.VN.lp_platform_login_account_hint)
            document.querySelector("#login_userpassword_ns").setAttribute("placeholder", language.VN.lp_platform_login_activity_login_hint_password)
            document.querySelector(".login_button_ns").value = (language.VN.lp_platform_login_activity_btn_enter)

            document.querySelector(".forget_password_ns span").innerText = (language.VN.lp_platform_login_activity_retrieve_password_txt)
            document.querySelector(".click_registered_ns").innerText = (language.VN.lp_platform_login_activity_register)
            document.querySelector(".account_management_ns").innerText = (language.VN.lp_platform_login_activity_account_manager)

            document.querySelector("#retrieve_username_ns").setAttribute("placeholder", language.VN.lp_retrieve_password_activity_hint_acc)
            document.querySelector("#retrieve_email_ns").setAttribute("placeholder", language.VN.lp_retrieve_password_activity_hint_email)
            document.querySelector(".retrieve_password_ns").value = (language.VN.lp_retrieve_password_activity_retrieve_pwd)

            document.querySelector("#registered_username_ns").setAttribute("placeholder", language.VN.lp_register_activity_hint_username)
            document.querySelector("#registered_userpassword_ns").setAttribute("placeholder", language.VN.lp_register_activity_hint_password)
            document.querySelector("#registered_repeatpassword_ns").setAttribute("placeholder", language.VN.lp_register_activity_hint_reppassword)
            document.querySelector("#registered_email_ns").setAttribute("placeholder", language.VN.lp_register_activity_hint_email)
            document.querySelector(".registered_button_ns").value = (language.VN.lp_register_activity_register_txt)

            document.querySelector(".user_agree_rule").innerText = (language.VN.lp_register_activity_agree_rule)
            document.querySelector(".toRule").innerText = (language.VN.lp_register_activity_rule_manage)

            document.querySelector(".account1_ns").innerText = (language.VN.lp_updatepassword_txt_updatepassword)
            document.querySelector(".account2_ns").innerText = (language.VN.lp_account_manage_activity_guest_binding)
            document.querySelector(".account3_ns").innerText = (language.VN.lp_account_manage_activity_facebook_binding)

            document.querySelector("#changePass_phone_ns").setAttribute("placeholder", language.VN.lp_accountbing_edt_username)
            document.querySelector("#changePass_userpassword_ns").setAttribute("placeholder", language.VN.lp_updatepassword_txt_oldpassword)
            document.querySelector("#changePass_newpassword_ns").setAttribute("placeholder", language.VN.lp_updatepassword_txt_newpassword)
            document.querySelector("#changePass_repeatpassword_ns").setAttribute("placeholder", language.VN.lp_updatepassword_txt_reppassword)
            document.querySelector(".changePass_button_ns").value = (language.VN.lp_updatepassword_btn_updatepassword)

            document.querySelector("#play_username_ns").setAttribute("placeholder", language.VN.lp_accountbing_edt_username)
            document.querySelector("#play_userpassword_ns").setAttribute("placeholder", language.VN.lp_accountbing_edt_password)
            document.querySelector("#play_repeatpassword_ns").setAttribute("placeholder", language.VN.lp_accountbing_edt_reppassword)
            document.querySelector("#play_email_ns").setAttribute("placeholder", language.VN.lp_account_binding_activity_email_hint)
            document.querySelector(".play_button_ns").value = (language.VN.lp_accountbing_btn_accountbing)

            document.querySelector("#fb_username_ns").setAttribute("placeholder", language.VN.lp_accountbing_edt_username)
            document.querySelector("#fb_userpassword_ns").setAttribute("placeholder", language.VN.lp_accountbing_edt_password)
            document.querySelector("#fb_repeatpassword_ns").setAttribute("placeholder", language.VN.lp_accountbing_edt_reppassword)
            document.querySelector("#fb_email_ns").setAttribute("placeholder", language.VN.lp_account_binding_activity_email_hint)
            document.querySelector(".fb_button_ns").value = (language.VN.lp_accountbing_btn_accountbing)

            document.querySelector(".title_loding").innerText = (language.VN.lp_sdk_login_activity_tips_msg)
            document.querySelector(".quit_btn").innerText = (language.VN.lp_sdk_login_activity_tips_switch_msg)
            break;
        default:
            document.querySelector("#enter_game_ns").value = (language.TW.lp_platform_login_activity_btn_enter)
            document.querySelector(".handle_head_title").innerText = (language.TW.lp_login_activity_text1)
            document.querySelector(".handle_icon_facebook").innerText = (language.TW.lp_login_activity_facebook_text)
            document.querySelector(".handle_icon_sw").innerText = (language.TW.lp_login_activity_sw_text)
            document.querySelector(".handle_icon_pt").innerText = (language.TW.lp_login_activity_pt_text)
            document.querySelector("#login_username_ns").setAttribute("placeholder", language.TW.lp_platform_login_account_hint)
            document.querySelector("#login_userpassword_ns").setAttribute("placeholder", language.TW.lp_platform_login_activity_login_hint_password)
            document.querySelector(".login_button_ns").value = (language.TW.lp_platform_login_activity_btn_enter)

            document.querySelector(".forget_password_ns span").innerText = (language.TW.lp_platform_login_activity_retrieve_password_txt)
            document.querySelector(".click_registered_ns").innerText = (language.TW.lp_platform_login_activity_register)
            document.querySelector(".account_management_ns").innerText = (language.TW.lp_platform_login_activity_account_manager)

            document.querySelector("#retrieve_username_ns").setAttribute("placeholder", language.TW.lp_retrieve_password_activity_hint_acc)
            document.querySelector("#retrieve_email_ns").setAttribute("placeholder", language.TW.lp_retrieve_password_activity_hint_email)
            document.querySelector(".retrieve_password_ns").value = (language.TW.lp_retrieve_password_activity_retrieve_pwd)

            document.querySelector("#registered_username_ns").setAttribute("placeholder", language.TW.lp_register_activity_hint_username)
            document.querySelector("#registered_userpassword_ns").setAttribute("placeholder", language.TW.lp_register_activity_hint_password)
            document.querySelector("#registered_repeatpassword_ns").setAttribute("placeholder", language.TW.lp_register_activity_hint_reppassword)
            document.querySelector("#registered_email_ns").setAttribute("placeholder", language.TW.lp_register_activity_hint_email)
            document.querySelector(".registered_button_ns").value = (language.TW.lp_register_activity_register_txt)

            document.querySelector(".user_agree_rule").innerText = (language.TW.lp_register_activity_agree_rule)
            document.querySelector(".toRule").innerText = (language.TW.lp_register_activity_rule_manage)

            document.querySelector(".account1_ns").innerText = (language.TW.lp_updatepassword_txt_updatepassword)
            document.querySelector(".account2_ns").innerText = (language.TW.lp_account_manage_activity_guest_binding)
            document.querySelector(".account3_ns").innerText = (language.TW.lp_account_manage_activity_facebook_binding)

            document.querySelector("#changePass_phone_ns").setAttribute("placeholder", language.TW.lp_accountbing_edt_username)
            document.querySelector("#changePass_userpassword_ns").setAttribute("placeholder", language.TW.lp_updatepassword_txt_oldpassword)
            document.querySelector("#changePass_newpassword_ns").setAttribute("placeholder", language.TW.lp_updatepassword_txt_newpassword)
            document.querySelector("#changePass_repeatpassword_ns").setAttribute("placeholder", language.TW.lp_updatepassword_txt_reppassword)
            document.querySelector(".changePass_button_ns").value = (language.TW.lp_updatepassword_btn_updatepassword)

            document.querySelector("#play_username_ns").setAttribute("placeholder", language.TW.lp_accountbing_edt_username)
            document.querySelector("#play_userpassword_ns").setAttribute("placeholder", language.TW.lp_accountbing_edt_password)
            document.querySelector("#play_repeatpassword_ns").setAttribute("placeholder", language.TW.lp_accountbing_edt_reppassword)
            document.querySelector("#play_email_ns").setAttribute("placeholder", language.TW.lp_account_binding_activity_email_hint)
            document.querySelector(".play_button_ns").value = (language.TW.lp_accountbing_btn_accountbing)

            document.querySelector("#fb_username_ns").setAttribute("placeholder", language.TW.lp_accountbing_edt_username)
            document.querySelector("#fb_userpassword_ns").setAttribute("placeholder", language.TW.lp_accountbing_edt_password)
            document.querySelector("#fb_repeatpassword_ns").setAttribute("placeholder", language.TW.lp_accountbing_edt_reppassword)
            document.querySelector("#fb_email_ns").setAttribute("placeholder", language.TW.lp_account_binding_activity_email_hint)
            document.querySelector(".fb_button_ns").value = (language.TW.lp_accountbing_btn_accountbing)

            document.querySelector(".title_loding").innerText = (language.TW.lp_sdk_login_activity_tips_msg)
            document.querySelector(".quit_btn").innerText = (language.TW.lp_sdk_login_activity_tips_switch_msg)
            break;
    }