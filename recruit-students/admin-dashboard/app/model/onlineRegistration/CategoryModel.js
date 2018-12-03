Ext.define('Admin.model.onlineRegistration.CategoryModel',{
    extend: 'Admin.model.Base',
    requires: [
		'Ext.data.proxy.Rest',
		'Ext.data.Request',
		'Ext.data.proxy.Ajax'
    ],

    fields:[{
        type:'int',
        name:'id'
    },{
        type:'string',
        name:'category_name'
    },{
        type:'string',
        name:'category_details'
    }]
});