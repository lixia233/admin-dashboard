Ext.define('Admin.view.authentication.PasswordReset', {
    extend: 'Admin.view.authentication.LockingWindow',
    xtype: 'passwordreset',

    requires: [
        'Admin.view.authentication.Dialog',
        'Ext.form.Label',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.layout.container.Card',
        'Ext.panel.Panel'
    ],

    title: '找回密码',

    defaultFocus : 'authdialog',  // Focus the Auth Form to force field focus as well

    items: [
        {
            xtype: 'authdialog',
            width: 455,
            defaultButton: 'resetPassword',
            autoComplete: true,
            bodyPadding: '20 20',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            defaults : {
                margin: '10 0'
            },

            cls: 'auth-dialog-login',
            items: [
                // {
                //     xtype: 'label',
                //     cls: 'lock-screen-top-label',
                //     text: 'Enter your email address for further reset instructions'
                // },
                {
                    xtype:'panel',
                    layout:'card',
                    defaultListenerScope:true,

                    bodyPadding:10,
                    scrollable:true,
                    height:230,

                    items:[{
                        id:'resetPassword-0',
                        xtype:'fieldset',
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
                            regexText:'请输入正确的手机号码'
                        },{
                            xtype:'container',
                            layout:'hbox',
                            height:55,
                            items:[{
                                xtype:'textfield',
                                hideLabel:true,
                                flex:1,
                                emptyText:'请输入短信验证码',
                                allowBlank : false,
                            },{
                                xtype:'button',
                                scale: 'large',
                                height:49,
                                flex:1,
                                text:'点击发送验证码',
                                handler:''
                            }]
                        }]
                    },{
                        id:'resetPassword-1',
                        xtype:'fieldset',
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
                            emptyText: '请输入新密码',
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
                            itemId:'password'
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
                    }],
                    bbar:['->',{
                        itemId:'card-prev',
                        text:'&laquo;上一步',
                        handler:'showPrevious',
                        disabled:true
                    },{
                        itemId:'card-next',
                        text:'下一步&raquo;',
                        handler:'showNext'
                    }],
                    showPrevious:function(){
                        this.doCardNavigation(-1);
                    },
                    showNext:function(){
                        this.doCardNavigation(1);
                    },
                    doCardNavigation:function(incr){
                        var me = this;
                        var l = me.getLayout();
                        var i = l.activeItem.id.split('resetPassword-')[1];
                        var next = parseInt(i,10)+incr;
                        l.setActiveItem(next);
                        me.down('#card-prev').setDisabled(next===0);
                        me.down('#card-next').setDisabled(next===1);
                    }
                },
                {
                    xtype: 'button',
                    reference: 'resetPassword',
                    scale: 'large',
                    ui: 'soft-blue',
                    formBind: true,
                    iconAlign: 'right',
                    iconCls: 'x-fa fa-angle-right',
                    text: '重置密码',
                    listeners: {
                        click: 'onResetClick'
                    }
                },
                {
                    xtype: 'component',
                    html: '<div style="text-align:right">' +
                        '<a href="#login" class="link-forgot-password">'+
                            '返回登录页</a>' +
                        '</div>'
                }
            ]
        }
    ]
});
