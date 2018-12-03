Ext.define('Admin.store.onlineRegistration.CategoryStore',{
    extend: 'Ext.data.Store',
    alias: 'store.categoryStore',
    model:'Admin.model.onlineRegistration.CategoryModel',
    storeId:'categoryStore',

    data:{
        'content':[{
            "id":1,
            "category_name":"户籍生",
            "category_details":"xx1"
        }]
    },

    proxy:{
        type:'memory',
        // type:'ajax',
        url:'',
        reader:{
            type:'json',
            rootProperty: 'content',		//结果集名字的属性
			totalProperty: 'totalElements'	//一共多少条记录的属性
        },
        simpleSortMode: true	//简单排序模式
    },
    pageSize: 25,
    remoteSort: true,//全局排序
    sorters: {
        direction: 'DESC',
        property: 'id'
    }
});