/**
 * 公共的js
 *
 * 主要写项目全局都用到的js方法
 *
 * Created by wenzhouyang on 11/8/2014.
 */

$(function(){

});

/**
 * 自一定EasyUi的验证规则
 */
$.extend($.fn.validatebox.defaults.rules, {
    minLength: {
        validator: function(value, param){
            console.log(value);
            console.log(param);
            return value.length >= param[0];
        },
        message: 'Please enter at least {0} characters.'
    }
});