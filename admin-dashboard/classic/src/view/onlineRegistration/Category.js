Ext.define('Admin.view.onlineRegistration.Category',{
    extend: 'Ext.panel.Panel',
    id:'category',
    xtype:'category',

    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.form.field.ComboBox',   //下拉列表框，远程or本地数据都可以
		'Ext.selection.CheckboxModel',
        'Ext.grid.column.RowNumberer',
        'Ext.form.field.Date',
        'Ext.grid.column.Date'
    ],

    items:[{
        xtype:'gridpanel',
        cls:'user-grid',
        // title:'类别详情',
        bind:'{categoryDetails}',
        columns:[{
            xtype:'gridcolumn',
            cls: 'content-column',
            text:'id',
            sortable:true,//配置为false通过单击标题和排序菜单项禁用列排序。
            dataIndex:'id',
            hidden:true
        },{
            xtype:'gridcolumn',
            text:'类别名称',
            cls: 'content-column',
            sortable:true,
            dataIndex:'category_name',
            hidden:true
        },{
            xtype:'gridcolumn',
            text:'类别详情',
            cls: 'content-column',
            sortable:true,
            dataIndex:'category_details',
            flex:1,
            renderer:function(value,meta,record){
                meta.style = 'white-space:normal;word-wrap:break-word;';
                return value;
            }
        },{
            xtype:'actioncolumn',
            cls: 'content-column',
            text:'操作',
            sortable:false,
            dataIndex:'bool',
            align:'center',
            items:[{
                xtype:'button',
                iconCls:'x-fa fa-check-square-o',
                tooltip:'点击申请',
                handler:''
            }]
        }]
    }]

    
});