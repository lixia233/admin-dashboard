Ext.define('Admin.view.onlineRegistration.ApplicationWindow0',{
    extend:'Ext.form.FieldSet',
    id:'application-0',
    xtype:'application0',

    requires:[
        'Ext.form.FieldContainer'
    ],

    controller:'onlineRegistrationController',

    title:'学生基本信息',
    defaults:{
        anchor:'100%'
    },
    items:[{
        xtype:'fieldcontainer',
        layout:'hbox',
        defaultType:'textfield',
        items:[{
            xtype: 'textfield',
            fieldLabel:'学生姓名',
            labelWidth: 110,
            name:'student_name',
            allowBlank:false,
            msgTarget:'side',
            flex:1
        },{
            xtype:'radiogroup',
            fieldLabel:'学生性别',
            labelWidth: 110,
            allowBlank:false,
            msgTarget:'side',
            items:[{
                xtype:'radiofield',
                name:'student_sex',
                boxLabel:'男',
                inputValue:'男'
            },{
                xtype:'radiofield',
                name:'student_sex',
                boxLabel:'女',
                inputValue:'女'
            }],
            flex:1
        }]
    },{
        xtype:'textfield',
        fieldLabel:'学生身份证号码',
        labelWidth: 110,
        name:'student_identificationNumber',
        allowBlank:false,
        msgTarget:'under',
        regex:/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
        regexText:'请输入学生的18位有效身份证号码'
    },{
        xtype:'fieldcontainer',
        layout:'hbox',
        defaultType:'textfield',
        items:[{
            xtype:'datefield',
            fieldLabel:'学生出生日期',
            labelWidth: 110,
            name:'student_birthday',
            allowBlank:false,
            msgTarget:'side',
            format:'Y/m/d',
            value:new Date(),
            maxValue:new Date(),
            flex:1
        },{
            xtype:'combobox',
            fieldLabel:'学生民族',
            labelWidth: 110,
            name:'student_nationality',
            allowBlank:false,
            msgTarget:'side',
            emptyText: '---请选择---',
            displayField:'num', //要绑定到此ComboBox 的基础数据字段名称。
            valueField:'nationalityType',
            store:{
                type:'nationalityStore'
            },
            queryMode: 'local', //ComboBox使用配置的Store的模式。默认remote,远程
            minChars: 0, //用户在自动完成和typeAhead激活之前必须输入的最小字符数。
            typeAhead: true, //如果匹配已知值，则填充并自动选择在可配置延迟（typeAheadDelay）之后键入的文本的其余部分。
            forceSelection:true,  //防止自由格式值并将其限制为列表中的项目
            flex:1
        }]
    },{
        xtype:'fieldcontainer',
        fieldLabel:'学生户口所在地',
        labelWidth: 110,
        name:'student_registeredResidence',
        allowBlank:false,
        msgTarget:'side',
        combineErrors:true, // 字段容器将根据配置的msgTarget自动组合并显示其包含的所有字段中的验证错误，作为容器上的单个错误 
        layout:'hbox',
        defaults:{
            hideLabel:true, //完全隐藏标签元素（fieldLabel和labelSeparator）
            margin:'0 5 0 0'
        },
        items:[{
            xtype:'combobox',
            hidden:true,    //隐藏组件
            // id:'country',
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
            // id:'provice',
            reference:'provice',
            // allowBlank:false,
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
            // id:'city',
            reference:'city',
            // allowBlank:false,
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
            // id:'county',
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
            allowBlank:false,
            msgTarget:'side',
            emptyText:'请填写详细地址'
        }]
    },{
        xtype:'fieldcontainer',
        layout:'hbox',
        defaultType:'textfield',
        items:[{
            xtype:'combobox',
            fieldLabel:'父母婚姻状况',
            labelWidth: 110,
            name:'student_parentalMarriage',
            allowBlank:false,
            msgTarget:'side',
            emptyText: '---请选择---',
            displayField:'name', //要绑定到此ComboBox 的基础数据字段名称。
            valueField:'value',
            store:Ext.create('Ext.data.Store',{
                fields:["name","value"],
                data:[
                    {name:'未婚',value:'未婚'},
                    {name:'已婚(有配偶)',value:'已婚'},
                    {name:'丧偶',value:'丧偶'},
                    {name:'离婚',value:'离婚'}
                ]
            }),
            queryMode: 'local', //ComboBox使用配置的Store的模式。默认remote,远程
            minChars: 0, //用户在自动完成和typeAhead激活之前必须输入的最小字符数。
            typeAhead: true, //如果匹配已知值，则填充并自动选择在可配置延迟（typeAheadDelay）之后键入的文本的其余部分。
            forceSelection:true,  //防止自由格式值并将其限制为列表中的项目
            flex:1
        },{
            xtype:'textfield',
            fieldLabel:'学生健康智力情况',
            labelWidth: 110,
            name:'student_health',
            flex:1
        }]
    }]
});