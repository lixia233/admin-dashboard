Ext.define('Admin.model.onlineRegistration.ApplicationRecordModel',{
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
        type:'int',
        name:'application_num'
    },{
        type:'string',
        name:'application_name'
    },{
        type:'string',
        name:'application_type'
    },{
        type:'string',
        name:'application_grade'
    },{
        type:'date',
        name:'application_time',
        dateFormat:'Y/m/d'
    },{
        type:'string',
        name:'application_status'
    }]
});