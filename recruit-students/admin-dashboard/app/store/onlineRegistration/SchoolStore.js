Ext.define('Admin.store.onlineRegistration.SchoolStore',{
    extend: 'Ext.data.Store',
    alias: 'store.schoolStore',
    model:'Admin.model.onlineRegistration.SchoolModel',
    storeId:'schoolStore',

    data:{
        'content':[
            {
                "id":1,
                "parentNode":0,
                "schoolName":"公办"
            },{
                "id":2,
                "parentNode":0,
                "schoolName":"民办"
            },{
                "id":3,
                "parentNode":1,
                "schoolName":"公办幼儿园",
            },{
                "id":4,
                "parentNode":1,
                "schoolName":"公办小学",
            },{
                "id":5,
                "parentNode":1,
                "schoolName":"公办初中",
            },{
                "id":6,
                "parentNode":2,
                "schoolName":"民办幼儿园",
            },{
                "id":7,
                "parentNode":2,
                "schoolName":"民办小学",
            },{
                "id":8,
                "parentNode":2,
                "schoolName":"民办初中",
            }
        ]
    },

    proxy:{
        type:'memory',
        // type:'rest',
        url:'',
        reader:{
            type:'json',
            rootProperty:'content',//后台返回结果集名称
			totalProperty: 'totalElements'//分页总记录数
        },
        writer:{
			type:'json'
		},
		simpleSortMode:true//简单排序
    },
    autoLoad:false,//不自动加载
    autoSync:true
});