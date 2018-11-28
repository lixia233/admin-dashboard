Ext.define('Admin.view.onlineRegistration.SelectCategoryWindow',{
    extend:'Ext.window.Window',
    alias:'widget.selectCategoryWindow',
    reference:'selectCategoryWindow',

    controller:'onlineRegistrationController',
    viewModel:{
        type:'categoryTreeViewModel'
    },

    height:600,
    width:800,
    scrollable:true,
    bodyPadding:10,
    closable: true,//如果为True，则显示“关闭”工具按钮并允许用户关闭面板
    modal:true,//如果为true，则浮动组件模态并在显示时屏蔽其后面的所有内容，为false以显示它而不限制对其他UI元素的访问。

    title:'请选择申请入学类别',
    titleAlign:'center',

    layout:'border',

    defaults:{
        bodyPadding:10
    },

    items:[{
        region:'west',
        width:200,
        split:true,
        reference:'categoryTreeContainer',
        layout:{
            type:'vbox',
            align:'stretch'
        },
        border:false,
        scrollable:true,
        items:[{
            xtype:'treelist',
            reference:'treelist',
            bind:'{navItems}',
            listeners: {
                'select': function(record) {
                    alert(record.id);//获取选中树节点的id
                    //获取关联的Grid的Store传参（树节点的id）
                    var store = Ext.getCmp('category').getStore();
                    if(record.id!='root'){//获取关联组件的Store动态扩展参数（选中的id）
                        Ext.apply(store.proxy.extraParams, {
                            id:record.id
                        });  
                    }else{
                        Ext.apply(store.proxy.extraParams, {
                            id:null
                        });  
                    }
                    store.load(); //让关联组件的Store 加载关联数据
                }   
            }
        
        }]
    },{
        region:'center',
        bodyPadding:10,
        // bind:{
        //     html:'{selectionText}'
        // }
        xtype:'category'
    }]
});