Ext.define('Admin.store.onlineRegistration.ApplicationRecordStore',{
    extend: 'Ext.data.Store',
    alias: 'store.applicationRecordStore',
    model:'Admin.model.onlineRegistration.ApplicationRecordModel',
    storeId:'applicationRecordStore',

    data:{
        'content':[{
            "id":"1",
            "application_num":"001",
            "application_name":"lili(学生姓名)",//学生姓名
            "application_type":"户籍生/优惠政策群体/企业人才类/特殊申请类/积分入学类/其他申请群体",
            "application_grade":"幼儿园小班/小学一年级/初一/插班生",
            "application_time":"2018/11/27",
            "application_status":"未提交"
        },{
            "id":"2",
            "application_num":"002",
            "application_name":"cindy(学生姓名)",//学生姓名
            "application_type":"户籍生/优惠政策群体/企业人才类/特殊申请类/积分入学类/其他申请群体",
            "application_grade":"幼儿园小班/小学一年级/初一/插班生",
            "application_time":"2018/11/27",
            "application_status":"未审核"
        }]
    },

    proxy:{
        type:'memory',
        // type:'rest',
        url:'',
        reader:{
            type:'json',
    		rootProperty:'content',
    		totalProperty: 'totalElements'
        },
        writer:{
            type:'json'
        },
        simpleSortMode:true
    },

    autoLoad: true,
    autoSync:true,
    remoteSort:true,
   	pageSize:13,//每页个数
    sorters: {
        direction: 'DESC',
        property: 'id'
    }
});