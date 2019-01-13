Ext.define('Admin.view.onlineRegistration.ApplicationWindow',{
    extend:'Ext.window.Window',
    alias:'widget.applicationWindow',
    reference:'applicationWindow',
    id:'applicationWindow',

    controller:'onlineRegistrationController',

    requires: [
        'Ext.button.Button',
        'Ext.form.Label',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.layout.container.Card',
        'Ext.panel.Panel',
        'Ext.form.Panel'
    ],

    height:640,
    width:860,
    y:-78,
    // scrollable:true,
    bodyPadding:10,
    closable: true,//如果为True，则显示“关闭”工具按钮并允许用户关闭面板
    modal:true,//如果为true，则浮动组件模态并在显示时屏蔽其后面的所有内容，为false以显示它而不限制对其他UI元素的访问。

    // title:'<i class="fa fa-home" aria-hidden="true"></i>请填写申请信息',
    titleAlign:'left',

    items:[{
        xtype:'form',
        title:'请填写申请信息',
        titleAlign:'center',
        layout:'card',
        height:480,
        width:820,
        scrollable:true,
        fieldDefaults:{
            border:false,
            labelAlign:'right',
            msgTarget:'side',
            defaultType:'textfield'
        },
        defaultListenerScope:true, //如果true，此组件将是使用字符串名称指定的事件的默认范围（此指针），以便可以动态解析范围。如果指定了控制器，该组件将自动成为defaultListenerScope 。
        defaultFocus: 'textfield',
        defaultButton: 'submitButton',  //用作此Panel的默认按钮的组件的引用名称。
        items:[{
            xtype:'application0'
        },{
            xtype:'application1'
        },{
            xtype:'application2'
        },{
            xtype:'application3'
        },{
            id:'application-4',
            html:'4'
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
            var i = l.activeItem.id.split('application-')[1];
            var next = parseInt(i,10)+incr;
            l.setActiveItem(next);
            me.down('#card-prev').setDisabled(next===0);
            me.down('#card-next').setDisabled(next===4);
        }
    },{
        xtype: 'label',
        html: '<font color=red>温馨提示：<br>1.*为必填项。<br>2.请填写后认真检查，确保资料真实有效；若有弄虚作假或瞒报，取消申请学位，情节严重承担相应责任。</font>'
    },{
        xtype:'button',
        formBind:true, //在FormPanel内部时，formBind: true将根据表单的有效状态启用/禁用配置的任何组件。
        bind:false,
        reference: 'submitButton',
        scale: 'large',
        ui: 'soft-blue',
        margin:'5 0',
        iconAlign: 'right',
        iconCls: 'fa fa-bookmark-o',
        text:'保存',
        handler:'applicationSave'
    }]
});

/**重写ext filed组件, 实现表单必填项加红色*星号**/
Ext.override(Ext.form.field.Base,{
    initComponent:function(){
        if(this.allowBlank!==undefined && !this.allowBlank){
            if(this.fieldLabel){
                this.fieldLabel = '<font color=red>* </font>'+this.fieldLabel;
            }
        }
        this.callParent(arguments);
    }
});
Ext.override(Ext.container.Container,{
    //针对form中的容器组件
    initComponent:function(){
        if(this.allowBlank!==undefined && !this.allowBlank){
            if(this.fieldLabel){
                this.fieldLabel = '<font color=red>* </font>'+this.fieldLabel;
            }
        } this.callParent(arguments);
    }
});