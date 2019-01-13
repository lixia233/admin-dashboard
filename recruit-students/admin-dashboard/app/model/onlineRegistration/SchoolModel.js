Ext.define('Admin.model.onlineRegistration.SchoolModel',{
    extend: 'Admin.model.Base',
    requires: [
		'Ext.data.proxy.Rest',
		'Ext.data.Request',
		'Ext.data.proxy.Ajax'
    ],

    fields:[
        {
            type:'int',
            namez:'id'
        },{
            type:'int',
            name:'parentNode'
        },{
            type:'string',
            name:'schoolName'
        }
    ]
});