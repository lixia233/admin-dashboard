Ext.define('Admin.view.onlineRegistration.ApplicationRecord',{
    extend: 'Ext.panel.Panel',
    xtype:'applicationRecord',

    controller: 'onlineRegistrationController',
    viewModel: {
        type: 'applicationRecordViewModel'
    },

    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.form.field.ComboBox',   //下拉列表框，远程or本地数据都可以
		'Ext.selection.CheckboxModel',
        'Ext.grid.column.RowNumberer',
        'Ext.form.field.Date',
        'Ext.grid.column.Date'
    ],

    layout:'fit',

    bodyPadding:10,

    items:[{
        xtype: 'gridpanel',
        cls: 'user-grid',
        title: '我的申请记录',
        bind:'{applicationRecordLists}',
        scrollable:false,
        
        columns:[{
            xtype:'rownumberer',
            text:'序号',
            width:50,
            align:'center'
        },{
            xtype:'gridcolumn',
            cls: 'content-column',
            dataIndex:'id',
            text:'ID',
            hidden:true
        },{
            xtype:'gridcolumn',
            cls: 'content-column',
            dataIndex:'application_num',
            text:'申请编号',
            flex:1,
            renderer:function(value,meta,record){
                meta.style = 'white-space:normal;word-wrap:break-word;';
                return value;
            }
        },{
            xtype:'gridcolumn',
            cls: 'content-column',
            dataIndex:'application_name',
            text:'申请人姓名',
            flex:1,
            renderer:function(value,meta,record){
                meta.style = 'white-space:normal;word-wrap:break-word;';
                return value;
            }
        },{
            xtype:'gridcolumn',
            cls: 'content-column',
            dataIndex:'application_type',
            text:'申请类型',
            flex:1,
            renderer:function(value,meta,record){
                meta.style = 'white-space:normal;word-wrap:break-word;';
                return value;
            }
        },{
            xtype:'gridcolumn',
            cls: 'content-column',
            dataIndex:'application_grade',
            text:'申请年级',
            flex:1,
            renderer:function(value,meta,record){
                meta.style = 'white-space:normal;word-wrap:break-word;';
                return value;
            }
        },{
            xtype:'gridcolumn',
            cls: 'content-column',
            dataIndex:'application_time',
            text:'申请时间',
            flex:1,
            formatter: 'date("Y/m/d")'
        },{
            xtype:'gridcolumn',
            cls: 'content-column',
            dataIndex:'application_status',
            text:'申请状态',
            flex:1
        },{
            xtype:'actioncolumn',
            cls: 'content-column',
            dataIndex: 'bool',
            text:'操作',
            align:'center',
            items:[{
                xtype:'button',
                iconCls:'x-fa fa-pencil',
                text:'修改',
                tooltip: '修改',
                handler:''
            },{
                xtype:'button',
                iconCls:'x-fa fa-trash',
                text:'删除',
                tooltip: '删除',
                handler:''
            },{
                xtype:'button',
                iconCls:'x-fa fa-level-up',
                text:'提交',
                tooltip: '提交',
                handler:''
            }]
        }],

        dockedItems:[{
            xtype:'pagingtoolbar',
            dock:'bottom',
            displayInfo: true,
            bind:'{applicationRecordLists}'
        }]
    }]
});