Ext.define('Admin.view.onlineRegistration.ApplicationWindow2',{
    extend:'Ext.form.FieldSet',
    id:'application-2',
    xtype:'application2',

    requires:[
        'Ext.form.FieldContainer'
    ],

    controller:'onlineRegistrationController',
    title:'居住信息',
    defaults:{
        anchor:'100%'
    },
    items:[{
        xtype:'fieldcontainer',
        layout:'hbox',
        defaultType:'textfield',
        items:[{
            flex:1,
            xtype:'radiogroup',
            fieldLabel:'住址所在',
            allowBlank:false,
            items:[{
                xtype:'radiofield',
                name:'adderss',
                boxLabel:'社区',
                inputValue:'社区',
                reference:'select_community',
                handler:'selectCommunity'
            },{
                xtype:'radiofield',
                name:'adderss',
                boxLabel:'楼盘',
                inputValue:'楼盘',
                reference:'select_property',
                handler:'selectProperty'
            }]
        },{
            flex:1,
            xtype:'combobox',
            fieldLabel:'住址所在社区',
            name:'address_community',
            reference:'addressCommunity',
            emptyText:'--请选择社区--',
            queryMode: 'local',
            typeAhead: true,
            forceSelection:true,
            store:{
                type:'communityStore'
            },
            displayField:'text',
            valueField:'id',
            hidden:true
        },{
            flex:1,
            xtype:'combobox',
            fieldLabel:'住址所在楼盘',
            name:'address_property',
            reference:'addressProperty',
            emptyText:'--请选择楼盘--',
            queryMode:'local',
            typeAhead: true,
            forceSelection:true,
            store:{
                type:'propertyStore'
            },
            displayField:'text',
            valueField:'id',
            hidden:true
        }]
    },{
        xtype:'fieldcontainer',
        fieldLabel:'详细住址',
        allowBlank:false,
        name:'detailed_address',
        combineErrors:true,
        layout:'hbox',
        defaults:{
            hideLabel:true, //完全隐藏标签元素（fieldLabel和labelSeparator）
            margin:'0 5 0 0'
        },
        items:[{
            xtype:'combobox',
            hidden:true,    //隐藏组件
            reference:'country',
            name:'country',
            queryMode:'local',
            forceSelection:true,
            value:'',
            store:{
                type:'addressStore'
            },
            displayField:'text',
            valueField:'id',
            listeners:{
                afterRender:'countryAfterRender',
                change:'countryChange'
            }
        },{
            flex:1,
            xtype:'combobox',
            name:'provice',
            reference:'provice',
            emptyText:'--省份--',
            queryMode: 'local', //ComboBox使用配置的Store的模式。默认remote,远程
            typeAhead: true, //如果匹配已知值，则填充并自动选择在可配置延迟（typeAheadDelay）之后键入的文本的其余部分。
            forceSelection:true, //将所选值限制为列表中的某个值
            store:{
                type:'addressStore'
            },
            displayField:'text',
            valueField:'id',
            listeners:{
                afterRender:'proviceAfterRender',
                change:'proviceChange'
            }
        },{
            flex:1,
            xtype:'combobox',
            name:'city',
            reference:'city',
            emptyText:'--城市--',
            queryMode: 'local', //ComboBox使用配置的Store的模式。默认remote,远程
            typeAhead: true, //如果匹配已知值，则填充并自动选择在可配置延迟（typeAheadDelay）之后键入的文本的其余部分。
            forceSelection:true, //将所选值限制为列表中的某个值
            store:{
                type:'addressStore'
            },
            displayField:'text',
            valueField:'id',
            listeners:{
                afterRender:'cityAfterRender',
                change:'cityChange'
            }
        },{
            flex:1,
            xtype:'combobox',
            name:'county',
            reference:'county',
            emptyText:'--地区--',
            queryMode: 'local', //ComboBox使用配置的Store的模式。默认remote,远程
            typeAhead: true, //如果匹配已知值，则填充并自动选择在可配置延迟（typeAheadDelay）之后键入的文本的其余部分。
            forceSelection:true, //将所选值限制为列表中的某个值
            store:{
                type:'addressStore'
            },
            displayField:'text',
            valueField:'id',
            listeners:{
                afterRender:'countyAfterRender'
            }
        },{
            flex:3,
            xtype:'textfield',
            name:'detailed',
            emptyText:'请填写详细地址'
        }]
    },{
        xtype:'fieldcontainer',
        layout:'hbox',
        defaultType:'textfield',
        items:[{
            flex:1,
            xtype:'radiogroup',
            fieldLabel:'该住址是否有房产证',
            height:40,
            items:[{
                xtype:'radiofield',
                name:'deed',
                boxLabel:'是',
                inputValue:'是'
            },{
                xtype:'radiofield',
                name:'deed',
                boxLabel:'否',
                inputValue:'否'
            }]
        },{
            flex:1,
            xtype:'radiogroup',
            fieldLabel:'该房产证是否属申请方所有',
            height:40,
            items:[{
                xtype:'radiofield',
                name:'deed_of',
                boxLabel:'是',
                inputValue:'是'
            },{
                xtype:'radiofield',
                name:'deed_of',
                boxLabel:'否',
                inputValue:'否'
            }]
        }]
    },{
        xtype:'fieldcontainer',
        layout:'hbox',
        defaultType:'textfield',
        items:[{
            flex:1,
            xtype:'textfield',
            fieldLabel:'房地产或不动产证号',
            name:'deef_number'
        },{
            flex:1,
            xtype:'textareafield',
            height:45,
            readOnly:true,
            allowBlank:false,
            fieldLabel:'注意',
            cls:'x-form-textfield-noborder',
            value:'如该房产不属申请方所有，在本次申请中则视为该住址无房产证'
        }]
    }]

});