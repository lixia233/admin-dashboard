Ext.define('Admin.view.onlineRegistration.ApplicationWindow1',{
    extend:'Ext.form.FieldSet',
    id:'application-1',
    xtype:'application1',

    requires:[
        'Ext.form.FieldContainer'
    ],

    controller:'onlineRegistrationController',
    
    title:'监护人基本信息',
    scrollable:true,
    defaults:{
        anchor:'97%'
    },
    items:[{
        xtype:'combobox',
        fieldLabel:'申请方式',
        labelWidth:75,
        name:'application_method',
        allowBlank:false,
        msgTarget:'side',
        emptyText: '---请选择---',
        displayField:'name',
        valueField:'value',
        store:Ext.create('Ext.data.Store',{
            fields:["name","value"],
            data:[
                {name:'以父亲作为申请方',value:'以父亲作为申请方'},
                {name:'以母亲作为申请方',value:'以母亲作为申请方'},
                {name:'以户口簿户主作为申请方',value:'以户口簿户主作为申请方'}
            ]
        }),
        queryMode: 'local',
        minChars: 0,
        typeAhead: true,
        forceSelection:true
    },{
        xtype: 'fieldset',
        title: '父亲基本信息',
        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },
        collapsible: true,
        // collapsed: true,
        items:[{
            xtype:'fieldcontainer',
            layout:'hbox',
            defaultType:'textfield',
            items:[{
                flex:1,
                xtype:'textfield',
                fieldLabel:'父亲姓名',
                labelWidth:75,
                name:'father_name',
                allowBlank:false
            },{
                flex:1,
                xtype:'textfield',
                fieldLabel:'父亲联系电话',
                labelWidth:75,
                name:'father_phone',
                allowBlank:false,
                msgTarget:'under',
                regex:/^1(3|4|5|7|8)\d{9}$/,
                regexText:'请输入正确的手机号码'
            }]
        },{
            xtype:'fieldcontainer',
            layout:'hbox',
            defaultType:'textfield',
            items:[{
                flex:1,
                xtype:'combobox',
                fieldLabel:'父亲证件类型',
                labelWidth:75,
                name:'father_method',
                id:'father_method',
                allowBlank:false,
                msgTarget:'side',
                emptyText: '---请选择---',
                displayField:'name',
                valueField:'value',
                store:Ext.create('Ext.data.Store',{
                    fields:["name","value"],
                    data:[
                        {name:'身份证',value:'身份证'}
                    ]
                }),
                queryMode: 'local',
                minChars: 0,
                typeAhead: true,
                forceSelection:true,
                listeners:{
                    afterRender:function(){
                        var father_method = Ext.getCmp('father_method');
                        father_method.reset();
                        father_method.setValue(father_method.getStore().getAt(0));  //设置默认值，默认第一个
                    }
                }
            },{
                flex:1,
                xtype:'textfield',
                fieldLabel:'父亲证件号码',
                labelWidth:75,
                name:'father_identificationNumber',
                allowBlank:false,
                msgTarget:'under',
                regex:/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
                regexText:'请输入父亲的18位有效身份证号码'
            }]
        },{
            xtype:'fieldcontainer',
            layout:'hbox',
            defaultType:'textfield',
            items:[{
                flex:1,
                xtype:'radiogroup',
                fieldLabel:'父亲是否是长安户籍',
                labelWidth:75,
                height:40,
                allowBlank:false,
                msgTarget:'side',
                items:[{
                    xtype:'radiofield',
                    name:'father_household',
                    boxLabel:'是',
                    inputValue:'是',
                    reference:'father_selectY',
                    handler:'fatherSelectYes'
                },{
                    xtype:'radiofield',
                    name:'father_household',
                    boxLabel:'否',
                    inputValue:'否',
                    reference:'father_selectN',
                    handler:'fatherSelectNo'
                }]
            },{
                flex:1,
                xtype:'combobox',
                fieldLabel:'父亲户籍所在社区',
                labelWidth:75,
                name:'father_community',
                reference:'fatherCommunity',
                allowBlank:false,
                emptyText:'--请选择--',
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
                xtype:'fieldcontainer',
                fieldLabel:'父亲户籍所在地',
                labelWidth:75,
                name:'father_registeredResidence',
                reference:'fatherRegisteredResidence',
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
                    id:'country',
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
                        afterRender:function(){
                            var country = Ext.getCmp('country');
                            country.reset();
                            country.setValue(country.getStore().getAt(0));
                        },
                        change:function(){
                            //获取combobox组件值
                            var provice = Ext.getCmp('provice');
                            var city = Ext.getCmp('city');
                            var county = Ext.getCmp('county');
                            //清空已加载列表
                            provice.getStore().removeAll();
                            city.getStore().removeAll();
                            county.getStore().removeAll();
                            //清空已存在的结果
                            provice.reset();
                            city.reset();
                            county.reset();
                            //加载列表
                            var data = [];
                            var store = Ext.getCmp('country').getStore();
                            Ext.each(store.data.items,function(item){
                                if(item.data.parent == 1){
                                    data.push(item);
                                }
                            });
                            provice.getStore().add(data);
                        }
                    }
                },{
                    flex:1,
                    xtype:'combobox',
                    name:'provice',
                    id:'provice',
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
                        afterRender:function(){
                            var provice = Ext.getCmp('provice');
                            var country = Ext.getCmp('country');
                            provice.reset();
                            provice.setValue(country.getStore().getAt(19));
                        },
                        change:function(combo){
                            var parent = combo.getValue();  //获取选中值
                            // console.log(parent);
                            var city = Ext.getCmp('city');  //获取city combobox组件
                            var county = Ext.getCmp('county');  //获取county combobox组件
                            //清空已加载列表
                            city.getStore().removeAll();
                            county.getStore().removeAll();
                            //清空已存在的结果
                            city.reset();
                            county.reset();
                            //加载列表
                            var data = [];
                            var store = Ext.getCmp('country').getStore();
                            Ext.each(store.data.items,function(item){
                                if(item.data.parent == parent){
                                    data.push(item);
                                }
                            });
                            city.getStore().add(data);
                        }
                    }
                },{
                    flex:1,
                    xtype:'combobox',
                    name:'city',
                    id:'city',
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
                        afterRender:function(){
                            var city = Ext.getCmp('city');
                            var country = Ext.getCmp('country');
                            city.reset();
                            city.setValue(country.getStore().getAt(1892));  //设置默认值，默认东莞市（id:1893）
                        },
                        change:function(combo){
                            var parent = combo.getValue();  //获取选中值
                            var county = Ext.getCmp('county');  //获取county combobox组件
                            county.getStore().removeAll();     //清空已加载列表
                            county.reset(); //清空已存在的结果
                            //加载列表
                            var data = [];
                            var store = Ext.getCmp('country').getStore();
                            Ext.each(store.data.items,function(item){
                                if(item.data.parent == parent){
                                    data.push(item);
                                }
                            });
                            county.getStore().add(data);
                        }
                    }
                },{
                    flex:1,
                    xtype:'combobox',
                    name:'county',
                    id:'county',
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
                        afterRender:function(){
                            var county = Ext.getCmp('county');
                            var country = Ext.getCmp('country');
                            county.reset();
                            county.setValue(country.getStore().getAt(2034));  //设置默认值，默认长安镇（id:2035）
                        }
                    }
                }],
                hidden:true
            }]
        },{
            xtype:'fieldcontainer',
            layout:'hbox',
            defaultType:'textfield',
            items:[{
                flex:1,
                xtype:'textfield',
                fieldLabel:'父亲工作单位名称',
                labelWidth:75,
                name:'father_workePlace',
                allowBlank:false
            },{
                flex:1,
                xtype:'textfield',
                fieldLabel:'父亲工作职务',
                labelWidth:75,
                name:'father_workPosition',
                allowBlank:false
            }]
        }]
    },{
        xtype: 'fieldset',
        title: '母亲基本信息',
        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },
        collapsible: true,
        // collapsed: true,
        items:[{
            xtype:'fieldcontainer',
            layout:'hbox',
            defaultType:'textfield',
            items:[{
                flex:1,
                xtype:'textfield',
                fieldLabel:'母亲姓名',
                labelWidth:75,
                name:'mother_name',
                allowBlank:false
            },{
                flex:1,
                xtype:'textfield',
                fieldLabel:'母亲联系电话',
                labelWidth:75,
                name:'mother_phone',
                allowBlank:false,
                msgTarget:'under',
                regex:/^1(3|4|5|7|8)\d{9}$/,
                regexText:'请输入正确的手机号码'
            }]
        },{
            xtype:'fieldcontainer',
            layout:'hbox',
            defaultType:'textfield',
            items:[{
                flex:1,
                xtype:'combobox',
                fieldLabel:'母亲证件类型',
                labelWidth:75,
                name:'mother_method',
                id:'mother_method',
                allowBlank:false,
                msgTarget:'side',
                emptyText: '---请选择---',
                displayField:'name',
                valueField:'value',
                store:Ext.create('Ext.data.Store',{
                    fields:["name","value"],
                    data:[
                        {name:'身份证',value:'身份证'}
                    ]
                }),
                queryMode: 'local',
                minChars: 0,
                typeAhead: true,
                forceSelection:true,
                listeners:{
                    afterRender:function(){
                        var mother_method = Ext.getCmp('mother_method');
                        mother_method.reset();
                        mother_method.setValue(mother_method.getStore().getAt(0));  //设置默认值，默认第一个
                    }
                }
            },{
                flex:1,
                xtype:'textfield',
                fieldLabel:'母亲证件号码',
                labelWidth:75,
                name:'mother_identificationNumber',
                allowBlank:false,
                msgTarget:'under',
                regex:/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
                regexText:'请输入母亲的18位有效身份证号码'
            }]
        },{
            xtype:'fieldcontainer',
            layout:'hbox',
            defaultType:'textfield',
            items:[{
                flex:1,
                xtype:'radiogroup',
                fieldLabel:'母亲是否是长安户籍',
                labelWidth:75,
                height:40,
                allowBlank:false,
                msgTarget:'side',
                items:[{
                    xtype:'radiofield',
                    name:'mother_household',
                    boxLabel:'是',
                    inputValue:'是',
                    reference:'mother_selectY',
                    handler:'motherSelectYes'
                },{
                    xtype:'radiofield',
                    name:'mother_household',
                    boxLabel:'否',
                    inputValue:'否',
                    reference:'mother_selectN',
                    handler:'motherSelectNo'
                }]
            },{
                flex:1,
                xtype:'combobox',
                fieldLabel:'母亲户籍所在社区',
                labelWidth:75,
                name:'mother_community',
                reference:'motherCommunity',
                allowBlank:false,
                emptyText:'--请选择--',
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
                xtype:'fieldcontainer',
                fieldLabel:'母亲户籍所在地',
                labelWidth:75,
                name:'mother_registeredResidence',
                reference:'motherRegisteredResidence',
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
                }],
                hidden:true
            }]
        },{
            xtype:'fieldcontainer',
            layout:'hbox',
            defaultType:'textfield',
            items:[{
                flex:1,
                xtype:'textfield',
                fieldLabel:'母亲工作单位名称',
                labelWidth:75,
                name:'mother_workePlace',
                allowBlank:false
            },{
                flex:1,
                xtype:'textfield',
                fieldLabel:'母亲工作职务',
                labelWidth:75,
                name:'mother_workPosition',
                allowBlank:false
            }]
        }]
    }]
});