Ext.define('Admin.view.authentication.Register', {
    extend: 'Admin.view.authentication.LockingWindow',
    xtype: 'register',

    requires: [
        'Admin.view.authentication.Dialog',
        'Ext.button.Button',
        'Ext.form.Label',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text'
    ],

    title: '长安镇教育局统一招生网上报名系统',
    defaultFocus: 'authdialog',  // Focus the Auth Form to force field focus as well

    items: [
        {
            xtype: 'authdialog',
            bodyPadding: '20 20',
            width: 455,
            reference : 'authDialog',

            defaultButton : 'submitButton',
            autoComplete: true,
            cls: 'auth-dialog-register',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults : {
                margin: '10 0',
                selectOnFocus : true
            },
            items: [
                // {
                //     xtype: 'label',
                //     cls: 'lock-screen-top-label',
                //     text: '注册'
                // },
                {
                    xtype:'fieldset',
                    title:'填写登陆信息',
                    defaultType:'textfield',
                    defaults:{
                        anchor:'100%'
                    },
                    items:[{
                        xtype: 'textfield',
                        cls: 'auth-textbox',
                        height: 55,
                        hideLabel: true,
                        allowBlank : false,
                        name: 'userid',
                        bind: '{userid}',
                        emptyText: '请输入手机号码',
                        triggers: {
                            glyphed: {
                                cls: 'trigger-glyph-noop auth-mobile-trigger'
                            }
                        },

                        msgTarget:'under',
                        regex:/^1(3|4|5|7|8)\d{9}$/,
                        regexText:'请输入正确的手机号码',
                    },{
                        xtype: 'textfield',
                        cls: 'auth-textbox',
                        height: 55,
                        hideLabel: true,
                        allowBlank : false,
                        emptyText: '请输入密码',
                        name: 'password',
                        inputType: 'password',
                        bind: '{password}',
                        triggers: {
                            glyphed: {
                                cls: 'trigger-glyph-noop auth-password-trigger'
                            }
                        },

                        msgTarget:'under',
                        regex:/^.*(?=.{6,})(?=.*\d)(?=.*[a-zA-Z]).*$/,
                        regexText:'必须包含数字、字母且长度在6位以上！',
                        itemId:'password',
                    },{
                        xtype:'textfield',
                        cls: 'auth-textbox',
                        height: 55,
                        hideLabel: true,
                        allowBlank : false,
                        emptyText: '请再次输入密码',
                        name:'password2',
                        inputType: 'password',
                        triggers: {
                            glyphed: {
                                cls: 'trigger-glyph-noop auth-password2-trigger'
                            }
                        },

                        msgTarget:'under',
                        vtype: 'password',
                        initialPassField: 'password' // id of the initial password field
                    }]
                },
                {
                    xtype:'fieldset',
                    title:'填写身份信息',
                    defaultType:'textfield',
                    defaults:{
                        anchor:'100%'
                    },
                    items:[{
                        xtype: 'textfield',
                        cls: 'auth-textbox',
                        height: 55,
                        hideLabel: true,
                        allowBlank : false,
                        name: 'userName',
                        bind: '{userName}',
                        emptyText: '请输入您的真实姓名',
                        triggers: {
                            glyphed: {
                                cls: 'trigger-glyph-noop auth-user-trigger'
                            }
                        },

                        msgTarget:'under',
                        regex:/^[\u4e00-\u9fa5]{2,4}$/,
                        regexText:'请输入真实姓名，2-10位！'
                    },{
                        xtype: 'textfield',
                        cls: 'auth-textbox',
                        height: 55,
                        hideLabel: true,
                        allowBlank : false,
                        emptyText: '请输入您的身份证号码',
                        name: 'identificationNumber',
                        bind: '{identificationNumber}',
                        triggers: {
                            glyphed: {
                                cls: 'trigger-glyph-noop auth-write-trigger'
                            }
                        },

                        msgTarget:'under',
                        regex:/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
                        regexText:'请输入您本人18位有效身份证号码'
                    }]
                },
                {
                    xtype:'fieldset',
                    title:'验证码',
                    defaults:{
                        anchor:'100%'
                    },
                    items:[{
                        xtype:'container',
                        layout:'hbox',
                        height:55,
                        items:[{
                            xtype:'textfield',
                            hideLabel:true,
                            flex : 1,
                            emptyText:'请输入图片验证码'
                        },{
                            xtype:'image',
                            height:49,
                            flex : 1,
                            alt:'点击刷新验证码',
                            src: 'resources/images/user-profile/2.png'
                        }]
                    },{
                        xtype:'container',
                        layout:'hbox',
                        height:55,
                        items:[{
                            xtype:'textfield',
                            hideLabel:true,
                            flex:1,
                            emptyText:'请输入短信验证码'
                        },{
                            xtype:'button',
                            scale: 'large',
                            height:49,
                            flex:1,
                            text:'点击发送验证码',
                            handler:''
                        }]
                    }]
                },
                {
                    xtype:'container',
                    layout:'hbox',
                    height:55,
                    items:[{
                        xtype: 'checkbox',
                        flex: 1,
                        name: 'agrees',
                        cls: 'form-panel-font-color rememberMeCheckbox',
                        height: 32,
                        bind: '{agrees}',
                        allowBlank : false,
                        boxLabel: '我已阅读并同意条款',

                        // In this case, the form operation is not VALID unless Terms are agreed upon
                        // 在这种情况下，除非条款达成一致，否则表单操作不是有效的
                        isValid: function() {
                            var me = this;
                            return me.checked || me.disabled;
                        }
                    },{
                        xtype:'button',
                        flex:1,
                        text:'点击查看条款详情',
                        handler:'openClauseDetailWindow'
                    }]
                },
                // {
                //     xtype: 'checkbox',
                //     flex: 1,
                //     name: 'agrees',
                //     cls: 'form-panel-font-color rememberMeCheckbox',
                //     height: 32,
                //     bind: '{agrees}',
                //     allowBlank : false,
                //     boxLabel: '我已阅读并同意条款，<a href="#" class="terms">点击查看条款</a>',

                //     //监听器在模态窗口中打开“使用条款”页面链接
                //     //请注意，侦听器方法本身是在ViewController中定义的
                //     listeners:{
                //         click:{
                //             element:'boxLabelEl',
                //             fn:'onTermsOfUseElementClick'
                //         }
                //     },

                //     // In this case, the form operation is not VALID unless Terms are agreed upon
                //     // 在这种情况下，除非条款达成一致，否则表单操作不是有效的
                //     isValid: function() {
                //         var me = this;
                //         return me.checked || me.disabled;
                //     }
                // },
                {
                    xtype: 'button',
                    scale: 'large',
                    ui: 'soft-blue',
                    formBind: true,
                    reference: 'submitButton',
                    bind: false,
                    margin: '5 0',
                    iconAlign: 'right',
                    iconCls: 'x-fa fa-angle-right',
                    text: '注册',
                    listeners: {
                        click: 'onSignupClick'
                    }
                },
                // {
                //     xtype: 'box',
                //     html: '<div class="outer-div"><div class="seperator">OR</div></div>'
                // },
                // {
                //     xtype: 'button',
                //     scale: 'large',
                //     ui: 'facebook',
                //     margin: '5 0',
                //     iconAlign: 'right',
                //     iconCls: 'x-fa fa-facebook',
                //     text: 'Login with Facebook',
                //     listeners: {
                //         click: 'onFaceBookLogin'
                //     }
                // },
                {
                    xtype: 'component',
                    html: '<div style="text-align:right">' +
                        '<a href="#login" class="link-forgot-password">'+
                            '返回登陆页</a>' +
                        '</div>'
                }
            ]
        }
    ]
});
