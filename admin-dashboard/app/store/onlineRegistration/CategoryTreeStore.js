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
            iconCls:'fa fa-home fa-lg',
            leaf:true
        },{
            id:'2',
            text:'优惠政策群体',
            iconCls:'fa fa-group fa-lg',
            leaf:true
        },{
            id:'3',
            text:'企业人才类',
            iconCls:'fa fa-user-o fa-lg',
            leaf:true
        },{
            id:'4',
            text:'特殊申请类',
            iconCls:'fa fa-user-secret fa-lg',
            leaf:true
        },{
            id:'5',
            text:'积分入学类',
            iconCls:'fa fa-calendar-minus-o fa-lg',
            leaf:true
        },{
            id:'6',
            text:'其他申请群体',
            iconCls:'fa fa-odnoklassniki fa-lg',
            leaf:true
        }]
    }


});