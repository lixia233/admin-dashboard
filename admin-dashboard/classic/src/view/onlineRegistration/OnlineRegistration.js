Ext.define('Admin.view.onlineRegistration.OnlineRegistration',{
    extend: 'Ext.window.Window',

    xtype: 'onlineRegistration',

    requires:[
        'Ext.container.Viewport',
        'Ext.panel.Panel',
        'Ext.layout.container.Border',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox'
    ],

    controller: 'onlineRegistrationController',

    closable: false,//如果为True，则显示“关闭”工具按钮并允许用户关闭面板，或者显示false以隐藏按钮并禁止关闭窗口。
    resizable: false,//不允许用户在每个边调整窗口大小
    autoShow: true,//windows默认是隐藏，要设置为显示
    maximized: true,//最初以最大化窗口显示
    modal: true,//如果为true，则浮动组件模态并在显示时屏蔽其后面的所有内容，为false以显示它而不限制对其他UI元素的访问。
    scrollable: true,//显示滚动条
    draggable: false,//不可拖动

    style:{
        border:0
    },

    // titleAlign: 'center',
    // title:'长安镇教育局统一招生网上报名系统',

    layout:'border',

    defaults:{
        bodyPadding:10
    },

    items:[{
        region:'north',
        xtype:'toolbar',
        itemId: 'headerBar',
        height: 64,
        style:{
            backgroundColor:'#35baf6'
        },
        items:[{
            xtype:'container',
            html:'&nbsp;&nbsp;&nbsp;&nbsp;长安镇教育局统一招生网上报名系统',
            style:{
                color:'white',
                fontSize:'x-large',
                fontWeight: 'bold',
                fontFamily: '宋体'
            }
        },'->',{
            xtype:'image',
            height: 35,
            width: 35,
            cls:'header-right-profile-image',
            alt:'current user image',
            src: 'resources/images/user-profile/2.png'
        }]
    },{
        region:'center',
        xtype:'container',
        scrollable:true,
        layout:{
            type:'table',
            columns:2,
            tableAttrs:{
                style:{
                    width:'100%'
                }
            }
        },

        bodyPadding:10,
        defaults:{
            bodyPadding:10
        },

        items:[{
            colspan:2,//占2列
            rowspan:1,//占1行
            // xtype:'container',
            xtype:'panel',
            layout:{
                type:'hbox',
                pack:'center',
                align:'center'
            },
            bodyPadding:10,
            items:[{
                margin:'10 10 10 10',
                xtype:'button',
                width:200,
                height:200,
                scale:'large',
                iconAlign:'top',
                iconCls:'fa fa-pencil-square-o fa-4x',
                html:'<br>公办学校、幼儿园<br>点击申请',
                handler:'chooseSchool'//publicSchools
            },{
                margin:'10 10 10 10',
                width:200,
                height:200,
                xtype:'button',
                scale:'large',
                iconAlign:'top',
                iconCls:'fa fa-pencil-square fa-4x',
                text:'<br>民办学校、幼儿园<br>点击申请',
                handler:'chooseSchool'//privateSchools
            }]
        },{
            colspan:2,//占2列
            rowspan:1,//占1行
            layout:'fit',
            defaults:{
                bodyPadding:10
            },
            items:[{xtype:'applicationRecord'}]
        }]
    }]

});