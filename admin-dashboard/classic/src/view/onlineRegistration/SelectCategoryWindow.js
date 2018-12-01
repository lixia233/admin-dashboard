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
            listeners:{
                click:{
                    selectionText: function(get) {
                        var selection = get('treelist.selection'), path;
                        if (selection) {
                            path = selection.getPath('text');
                            console.log("path1:"+path);
                            path = path.replace(/^\/Root/, '');
                            console.log("path2:"+path);
                            path = path.replace(/^\//,'');
                            console.log("path3:"+path);
                            console.log(selection.getId());
                            // alert(path);
            
                            return 'Selected: ' + path;
                        } else {
                            return 'No node selected';
                        }
                        
                    }
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