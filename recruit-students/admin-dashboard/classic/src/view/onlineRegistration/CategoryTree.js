Ext.define('Admin.view.onlineRegistration.CategoryTree',{
    extend: 'Ext.tree.Panel',
    // id:'categoryTree',
    xtype:'categoryTree',

    rootVisible:false, //False以隐藏根节点。

    bind:'{navItems}',
    listeners:{
        'select': function(view, record, index, eOpts) {
			
			//获取树节点id
			var id = record.id;
			console.log(id);

			//把树节点的text设置cookie
			var cookie = new Ext.state.CookieProvider();
			Ext.state.Manager.setProvider(cookie);
			cookie.set('categoryTreeNode',record.data.text);
			console.log(record.data.text);
			
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