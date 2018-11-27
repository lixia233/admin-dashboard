Ext.define('Admin.view.authentication.AuthenticationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',

    //TODO: implement central Facebook OATH handling here

    /**
     * 关于使用条款元素单击
     */
    // onTermsOfUseElementClick:function(e){
    //     var target;
    //     target = e.getTarget('.terms');
    //     e.preventDefault();
    //     if(target){
    //         this.lookupReference('clauseDetailWindow').show();
    //     }
    // },

    /**
     * 注册页面：注册按钮
     */
    onSignupClick:  function() {
        this.redirectTo('login', true);
    },

    // onFaceBookLogin : function() {
    //     this.redirectTo('dashboard', true);
    // },

    /**
     * 登录页面：登录按钮
     */
    onLoginButton: function() {
        this.redirectTo('onlineRegistration', true);
    },

    onLoginAsButton: function() {
        this.redirectTo('login', true);
    },

    onNewAccount:  function() {
        this.redirectTo('register', true);
    },

    

    /**
     * 重置密码
     */
    onResetClick:  function() {
        this.redirectTo('login', true);
    }

    
});