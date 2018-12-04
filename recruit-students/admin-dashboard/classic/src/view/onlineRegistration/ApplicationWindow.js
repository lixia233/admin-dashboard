Ext.define('Admin.view.onlineRegistration.ApplicationWindow',{
    extend:'Ext.window.Window',
    alias:'widget.applicationWindow',
    reference:'applicationWindow',

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

    height:600,
    width:800,
    scrollable:true,
    bodyPadding:10,
    closable: true,//如果为True，则显示“关闭”工具按钮并允许用户关闭面板
    modal:true,//如果为true，则浮动组件模态并在显示时屏蔽其后面的所有内容，为false以显示它而不限制对其他UI元素的访问。

    title:'请填写申请信息',
    titleAlign:'center',

    items:[{
        // xtype:'panel',
        xtype:'form',
        title:'js点击监听？',
        layout:'card',
        fieldDefaults:{
            border:false,
            labelAlign:'right',
            msgTarget:'side',
            defaultType:'textfield'
        },
        defaultListenerScope:true, //如果true，此组件将是使用字符串名称指定的事件的默认范围（此指针），以便可以动态解析范围。如果指定了控制器，该组件将自动成为defaultListenerScope 。
        items:[{
            id:'application-0',
            xtype:'fieldset',
            title:'学生基本信息',
            defaults:{
                anchor:'100%'
            },
            items:[{
                fieldLabel:'学生姓名',
                name:'student_name',
                allowBlank:false
            }]
        },{
            id:'application-1',
            html:'1'
        },{
            id:'application-2',
            html:'2'
        },{
            id:'application-3',
            html:'3'
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
        xtype:'button',
        formBind:true, //在FormPanel内部时，formBind: true将根据表单的有效状态启用/禁用配置的任何组件。
        scale: 'large',
        ui: 'soft-blue',
        iconAlign: 'right',
        iconCls: 'x-fa fa-bookmark-o',
        text:'保存',
        handler:'applicationSave'
    }]
});