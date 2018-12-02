Ext.define('Admin.view.onlineRegistration.CategoryTree',{
    extend: 'Ext.tree.Panel',
    id:'categoryTree',
    xtype:'categoryTree',

    rootVisible:false, //False以隐藏根节点。

    bind:'{navItems}',
    listeners:{
        'select': function(view, record, index, eOpts) {
            // alert(record.id);
            console.log(record.id);
			// var store = Ext.getCmp('companyOrderGrid').getStore();
			// if(record.id!='root'){
			// 	Ext.apply(store.proxy.extraParams, {
			// 		companyId:record.id
			// 	});  
			// }else{
			// 	Ext.apply(store.proxy.extraParams, {
			// 		companyId:null
			// 	});  
			// }
			// store.load(); 
		}
    }
});