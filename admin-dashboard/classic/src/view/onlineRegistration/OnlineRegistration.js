Ext.define('Admin.view.onlineRegistration.OnlineRegistration',{
    extend: 'Ext.window.Window',

    xtype: 'onlineRegistration',

    requires:[

    ],

    // cls: 'auth-locked-window',
    closable: false,//如果为True，则显示“关闭”工具按钮并允许用户关闭面板，或者显示false以隐藏按钮并禁止关闭窗口。
    resizable: false,//可调整大小
    autoShow: true,//windows默认是隐藏，要设置为显示
    maximized: true,//最初以最大化窗口显示
    modal: true,
    scrollable: true,//显示滚动条

    titleAlign: 'center',
    title:'长安镇教育局统一招生网上报名系统',

    items:[{
        xtype:'toolbar'

    }],


    html:'网上申请'

});