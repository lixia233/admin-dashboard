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
                {
                    xtype: 'label',
                    cls: 'lock-screen-top-label',
                    text: '注册'
                },
                // {
                //     xtype: 'textfield',
                //     cls: 'auth-textbox',
                //     height: 55,
                //     hideLabel: true,
                //     allowBlank : false,
                //     emptyText: 'Fullname',
                //     name: 'fullName',
                //     bind: '{fullName}',
                //     triggers: {
                //         glyphed: {
                //             cls: 'trigger-glyph-noop auth-email-trigger'
                //         }
                //     }
                // },
                {
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
                    }
                },
                // {
                //     xtype: 'textfield',
                //     cls: 'auth-textbox',
                //     height: 55,
                //     hideLabel: true,
                //     allowBlank : false,
                //     name: 'email',
                //     emptyText: 'user@example.com',
                //     vtype: 'email',
                //     bind: '{email}',
                //     triggers: {
                //         glyphed: {
                //             cls: 'trigger-glyph-noop auth-envelope-trigger'
                //         }
                //     }
                // },
                {
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
                    }
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
                        text:'条款详情',
                        handle:''
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
                //     boxLabel: '我已阅读并同意条款',

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
                    text: '下一步',
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
