Ext.define('Admin.view.onlineRegistration.SelectCategoryWindow',{
    extend:'Ext.window.Window',
    alias:'widget.selectCategoryWindow',
    reference:'selectCategoryWindow',

    controller:'onlineRegistrationController',
    viewModel:{
        type:'categoryTreeViewModel'
    },

    requires: [
        'Ext.layout.container.Border',
        'Ext.list.Tree'
    ],

    height:600,
    width:800,
    scrollable:true,
    bodyPadding:10,
    closable: true,//如果为True，则显示“关闭”工具按钮并允许用户关闭面板
    modal:true,//如果为true，则浮动组件模态并在显示时屏蔽其后面的所有内容，为false以显示它而不限制对其他UI元素的访问。

    title:'请选择申请入学类别',
    titleAlign:'center',

    layout:'border',

    // defaults:{
    //     bodyPadding:10
    // },

    items:[{
        region:'west',
        width:200,
        collapsible:true,//如果为True，则使面板可折叠，并在标题工具按钮区域中添加展开/折叠切换工具。
        border:false,
        scrollable:true,
        split:true,
        layout:{
            type:'vbox',
            align:'stretch'
        },
        title:'类别',
        titleAlign:'center',
        items:[{
            xtype:'categoryTree'
        }]

    // },{
        // region:'west',
        // width:200,
        // split:true,
        // reference:'categoryTreeContainer',
        // layout:{
        //     type:'vbox',
        //     align:'stretch'
        // },
        // border:false,
        // scrollable:true,
        // items:[{
        //     xtype:'treelist',
        //     reference:'treelist',
        //     bind:'{navItems}'
        // }]
    },{
        region:'center',
        bodyPadding:10,
        // bind:{
        //     html:'{selectionText}'
        // }
        xtype:'category'
    }]
});