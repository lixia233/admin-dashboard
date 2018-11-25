Ext.define('Admin.view.authentication.PasswordVType',{
	override: 'Ext.form.field.VTypes',

	password: function(val, field) {//val指这里的文本框值，field指这个文本框组件
        if (field.initialPassField) {//initialPassField是我们自定义的配置参数，一般用来保存另外的组件的id值
            var pwd = field.up('form').down('#' + field.initialPassField);
            return (val == pwd.getValue());
        }
        return true;
    },

    passwordText: '两次密码不一致'
});