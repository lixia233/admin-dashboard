Ext.define('Admin.view.onlineRegistration.ChooseGradeWindow',{
    extend:'Ext.window.Window',
    alias:'widget.chooseGradeWindow',
    reference:'chooseGradeWindow',

    height:408,
    width:366,
    x:465,
    y:130,
    scrollable:true,
    bodyPadding:10,
    closable: true,//如果为True，则显示“关闭”工具按钮并允许用户关闭面板
    modal:true,//如果为true，则浮动组件模态并在显示时屏蔽其后面的所有内容，为false以显示它而不限制对其他UI元素的访问。

    title:'请选择申请年级',
    titleAlign:'center',

    layout:{
        type:'table',
        columns:2,
        tableAttrs:{
            style:{
                width:'100%'
            }
        }
    },

    defaults:{
        xtype:'button',
        margin:'10 10 10 10',
        width:150,
        height:150,
        scale:'large',
        iconAlign:'top'
    },

    items:[{
        iconCls:'fa fa-sun-o fa-3x',
        html:'<br>幼儿园小班',
        handler:'chooseGrade'
    },{
        iconCls:'fa fa-futbol-o fa-3x',
        html:'<br>小学一年级',
        handler:''
    },{
        iconCls:'fa fa-leanpub fa-3x',
        html:'<br>初中一年级',
        handler:''
    },{
        iconCls:'fa fa-balance-scale fa-3x',
        html:'<br>插班生',
        handler:''
    }]


});