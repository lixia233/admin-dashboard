Ext.define('Admin.view.onlineRegistration.ApplicationWindow',{
    extend:'Ext.window.Window',
    alias:'widget.applicationWindow',
    reference:'applicationWindow',
    id:'applicationWindow',

    controller:'onlineRegistrationController',

    requires: [
        'Ext.button.Button',
        'Ext.form.Label',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.layout.container.Card',
        'Ext.panel.Panel',
        'Ext.form.Panel'
    ],

    height:540,
    width:820,
    scrollable:true,
    bodyPadding:10,
    closable: true,//如果为True，则显示“关闭”工具按钮并允许用户关闭面板
    modal:true,//如果为true，则浮动组件模态并在显示时屏蔽其后面的所有内容，为false以显示它而不限制对其他UI元素的访问。

    // title:'<i class="fa fa-home" aria-hidden="true"></i>请填写申请信息',
    titleAlign:'left',

    items:[{
        xtype:'form',
        title:'请填写申请信息',
        titleAlign:'center',
        layout:'card',
        height:400,
        width:780,
        fieldDefaults:{
            border:false,
            labelAlign:'right',
            msgTarget:'side',
            defaultType:'textfield'
        },
        defaultListenerScope:true, //如果true，此组件将是使用字符串名称指定的事件的默认范围（此指针），以便可以动态解析范围。如果指定了控制器，该组件将自动成为defaultListenerScope 。
        defaultFocus: 'textfield',
        defaultButton: 'submitButton',  //用作此Panel的默认按钮的组件的引用名称。
        items:[{
            id:'application-0',
            xtype:'fieldset',
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
                    // name:'student_sex',
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
                controller:'onlineRegistrationController',
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
                        afterRender:'countryAfterRender',
                        change:'countryChange'
                    }
                },{
                    flex:1,
                    xtype:'combobox',
                    name:'provice',
                    id:'provice',
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
                        change:'countryChange'
                    }
                },{
                    flex:1,
                    xtype:'combobox',
                    name:'city',
                    id:'city',
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
                        change:'countryChange'
                    }
                },{
                    flex:1,
                    xtype:'combobox',
                    name:'county',
                    id:'county',
                    // allowBlank:false,
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
        },{
            id:'application-1',
            xtype:'fieldset',
            title:'监护人基本信息',
            defaults:{
                anchor:'100%'
            },
            items:[{
                xtype:'combobox',
                fieldLabel:'申请方式',
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
                xtype:'fieldcontainer',
                layout:'hbox',
                defaultType:'textfield',
                items:[{
                    flex:1,
                    xtype:'textfield',
                    fieldLabel:'父亲姓名',
                    name:'father_name',
                    allowBlank:false
                },{
                    flex:1,
                    xtype:'textfield',
                    fieldLabel:'父亲联系电话',
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
                    name:'father_identificationNumber',
                    allowBlank:false,
                    msgTarget:'under',
                    regex:/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
                    regexText:'请输入学生的18位有效身份证号码'
                }]
            },{
                xtype:'fieldcontainer',
                layout:'hbox',
                defaultType:'textfield',
                items:[{
                    flex:1,
                    xtype:'radiogroup',
                    fieldLabel:'父亲是否是长安户籍',
                    allowBlank:false,
                    msgTarget:'side',
                    items:[{
                        xtype:'radiofield',
                        name:'father_household',
                        boxLabel:'是',
                        inputValue:'是'
                    },{
                        xtype:'radiofield',
                        name:'father_household',
                        boxLabel:'否',
                        inputValue:'否'
                    }]
                }]
            },{
                
            }]
        },{
            id:'application-2',
            html:'2'
        },{
            id:'application-3',
            html:'3'
        },{
            id:'application-4',
            html:'4'
        }],
        bbar:['->',{
            itemId:'card-prev',
            text:'&laquo;上一步',
            handler:'showPrevious',
            disabled:true
        },{
            itemId:'card-next',
            text:'下一步&raquo;',
            handler:'showNext'
        }],
        showPrevious:function(){
            this.doCardNavigation(-1);
        },
        showNext:function(){
            this.doCardNavigation(1);
        },
        doCardNavigation:function(incr){
            var me = this;
            var l = me.getLayout();
            var i = l.activeItem.id.split('application-')[1];
            var next = parseInt(i,10)+incr;
            l.setActiveItem(next);
            me.down('#card-prev').setDisabled(next===0);
            me.down('#card-next').setDisabled(next===4);
        }
    },{
        xtype: 'label',
        html: '<font color=red>温馨提示：<br>1.*为必填项。<br>2.请填写后认真检查，确保资料真实有效；若有弄虚作假或瞒报，取消申请学位，情节严重承担相应责任。</font>'
    },{
        xtype:'button',
        formBind:true, //在FormPanel内部时，formBind: true将根据表单的有效状态启用/禁用配置的任何组件。
        bind:false,
        reference: 'submitButton',
        scale: 'large',
        ui: 'soft-blue',
        margin:'5 0',
        iconAlign: 'right',
        iconCls: 'fa fa-bookmark-o',
        text:'保存',
        handler:'applicationSave'
    }]
});

/**重写ext filed组件, 实现表单必填项加红色*星号**/
Ext.override(Ext.form.field.Base,{
    initComponent:function(){
        if(this.allowBlank!==undefined && !this.allowBlank){
            if(this.fieldLabel){
                this.fieldLabel = '<font color=red>* </font>'+this.fieldLabel;
            }
        }
        this.callParent(arguments);
    }
});
Ext.override(Ext.container.Container,{
    //针对form中的容器组件
    initComponent:function(){
        if(this.allowBlank!==undefined && !this.allowBlank){
            if(this.fieldLabel){
                this.fieldLabel = '<font color=red>* </font>'+this.fieldLabel;
            }
        } this.callParent(arguments);
    }
});