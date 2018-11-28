Ext.define('Admin.store.onlineRegistration.CategoryTreeStore',{
    extend: 'Ext.data.TreeStore',
    alias: 'store.categoryTreeStore',

    // proxy:{
    //     type:'ajax',
    //     url:'',
    //     reader:{
    //         type:'json'
    //     }
    // },

    root:{
        expanded:true,
        children:[{
            text:'户籍生',
            iconCls:'x-fa fa-home',
            leaf:true
        },{
            text:'优惠政策群体',
            iconCls:'x-fa fa-group',
            leaf:true
        },{
            text:'企业人才类',
            iconCls:'x-fa fa-group',
            leaf:true
        },{
            text:'特殊申请类',
            iconCls:'x-fa fa-group',
            leaf:true
        },{
            text:'积分入学类',
            iconCls:'x-fa fa-group',
            leaf:true
        },{
            text:'其他申请群体',
            iconCls:'x-fa fa-group',
            leaf:true
        }]
    }


});