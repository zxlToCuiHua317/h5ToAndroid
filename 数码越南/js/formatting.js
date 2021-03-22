 

var formatting={
		
		
		/*加入收藏夹
		 * url :收藏的url
		 * tag：收藏鏈接的標題
		 * */
		addfavorite: function(url,title)
		{
	        try{
	           window.external.addfavorite(url,title);
	        }catch (e){
                try{
                   window.sidebar.addPanel(title, url, "");
                }catch (e){
                    alert("加入收藏失敗，請使用快速鍵 Ctrl+D 進行添加！");
                }
	        }
		},

		/*设为首页
		 * obj:瀏覽器對象 ，用 this
		 * vrl: 設置為首頁連接
		 * */
		sethome:function (obj,vrl){
            try{
                obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
            }catch(e){
                if(window.netscape) {
                    try {
                        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                    }
                    catch (e) {
                         alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
                    }
                    var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                    prefs.setCharPref('browser.startup.homepage',vrl);
                 }
            }
		},
		/**
		 * 判斷字符是否為空 
		 */
		isEmptyString:function(str) {
			///alert(str);
			str = str + "";
			var i;
			var l = str.length;
			for (i = 0; i < str.length; i++) {
				if (str.lastIndexOf(" ") == str.length - 1) {
					str = str.substring(0, str.length - 1);
				} else {
					break;
				}
			}
			for (i = 0; i < str.length; i++) {
				if (str.indexOf(" ") == 0) {
					str = str.substring(1, str.length);
				} else {
					break;
				}
			}
			return str==""?true:false;
		},
		
		/**
		 * 判斷字符串是否只是數字和字母或下劃線@
		 */
		isNumAndChar:function(str) {
		   if(formatting.isEmptyString(str)){
			   return false;
		   }
		   //var re=/^[a-zA-Z0-9_]{1,}$/; 
		   var re=/^[a-zA-Z0-9]{1,1}[\w_@.]{2,31}$/;
		   return re.test(str);
		},
		/**
		 * 判斷字符串是否只是數字
		 */
		isNum:function(str) {
		   if(formatting.isEmptyString(str)){
			   return false;
		   }
		   var re=/^[0-9]*$/; 
		   return re.test(str);
		},
		
		/**
		 * 去除字符串兩邊空格
		 */
		StrTrim:function(str){  
			str = str + "";
			var i;
			var l = str.length;
			for (i = 0; i < str.length; i++) {
				if (str.lastIndexOf(" ") == str.length - 1) {
					str = str.substring(0, str.length - 1);
				} else {
					break;
				}
			}
			for (i = 0; i < str.length; i++) {
				if (str.indexOf(" ") == 0) {
					str = str.substring(1, str.length);
				} else {
					break;
				}
			}
			return str;
		},

		
		/**
		 * 驗證郵箱
		 */
		isEmail:function(strEmail) {
			console.log(strEmail)
			var myreg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/; 
			console.log(myreg.test(strEmail))
		    if(myreg.test(strEmail)){
				return true
			} else{
				return false
			}
		},
		
		/**
		 * 過濾html標籤
		 */
		filterHTML:function (str) {
			str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
			str.value = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
			//str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
			return str;
		},
		
		/**
		 * 用jquery方式設置和獲取cookie
		 */
		setCookies:function(name,value){
			$.cookie(name, value, {expires: 7, path: '/', domain: 'lunplay.com', secure: false});//新建一个cookie 包括有效期 路径 域名等
		},
		getCookiesValue:function(name){
			return $.cookie(name); //读取Cookie值
		},
		

		
	end:""
}
