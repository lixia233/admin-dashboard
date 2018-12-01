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
            id:'1',
            text:'户籍生',
            iconCls:'x-fa fa-home',
            leaf:true
        },{
            id:'2',
            text:'优惠政策群体',
            iconCls:'x-fa fa-group',
            leaf:true
        },{
            id:'3',
            text:'企业人才类',
            iconCls:'x-fa fa-group',
            leaf:true
        },{
            id:'4',
            text:'特殊申请类',
            iconCls:'x-fa fa-group',
            leaf:true
        },{
            id:'5',
            text:'积分入学类',
            iconCls:'x-fa fa-group',
            leaf:true
        },{
            id:'6',
            text:'其他申请群体',
            iconCls:'x-fa fa-group',
            leaf:true
        }]
    }


});