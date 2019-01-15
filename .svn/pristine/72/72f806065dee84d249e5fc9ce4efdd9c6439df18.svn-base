/*
 * author sweetou
 * 2017年4月2日16:03:23 
 *该方法绑定到了window上可以直接调用
 * window.lksValidate 或者 lksValidate
 * */

(function(window){
	var lksvalidate = function(){
		this.defaults = {
		    email: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,//邮箱
			mobile: /^(\d{3,4}-?)?1[1-9][0-9]{9}$/,//手机号
			fmobile: /^(\d{3,4}-?)?[1-9][0-9]{5,10}$/,//国外手机号
            phone:/^(0|86|17951)?(1)[1-9][0-9]{9}$/,//国内手机号
			IdCard : /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/,//身份证
		}
	}
	lksvalidate.prototype = {
		email:function(val){
			return this.defaults.email.test(val);
		},
		mobile:function(val,prefix){
			if(prefix == 86 || !prefix){
				return this.defaults.phone.test(val);
			}else{
				return this.defaults.fmobile.test(val);
			}
		},
		phone:function(val){
			return this.defaults.fmobile.test(val);
		},
		IdCard: function (val) {
		    return this.defaults.IdCard.test(val);
		},
	}
	window.lksValidate = new lksvalidate();
})(window);

