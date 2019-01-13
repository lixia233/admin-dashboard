Ext.define('Admin.view.onlineRegistration.ApplicationWindow3',{
    extend:'Ext.form.FieldSet',
    id:'application-3',
    xtype:'application3',

    controller:'onlineRegistrationController',
    title:'志愿填报',
    defaults:{
        anchor:'100%'
    },

    items:[{
        xtype:'radiogroup',
        fieldLabel:'年级段',
        name:'grade',
        reference:'transferGrade',
        // hidden:true,
        items:[{
            boxLabel:'幼儿园',
            inputValue:'kindergarten'
        },{
            boxLabel:'小学',
            inputValue:'primarySchool'
        },{
            boxLabel:'初中',
            inputValue:'juniorHighSchool'
        }]
    },{
        xtype:'combobox',
        fieldLabel:'第一志愿',
        name:'first_choice',
        reference:'school1',
        emptyText:'---请选择学校---',
        typeAhead:true,
        forceSelection:true,
        store:{
            type:'schoolStore'
        },
        displayField:'schoolName',
        valueField:'id',
        listeners:{
            afterRender:function(){
                //获取cookie值
                var cookie = Ext.state.Manager.getProvider();
                var gradeButtonId = cookie.get('gradeButton');
                console.log(gradeButtonId);

                var store = this.lookupReference('school1').getStore();

                if(gradeButtonId == "kindergartenButton"){
                    // Ext.apply(store.proxy.extraParams,{
                    //     parentNode:3    //公办幼儿园
                    // });
                }else if(gradeButtonId == "primarySchoolButton"){
                    // Ext.apply(store.proxy.extraParams,{
                    //     parentNode:4    //公办小学
                    // });
                }else if(gradeButtonId == "juniorHighSchoolButton"){
                    // Ext.apply(store.proxy.extraParams,{
                    //     parentNode:5    //公办初中
                    // });
                }else if(gradeButtonId == "transferStudentButton"){
                    
                }

                store.load();
            }
        }
    }]

    // listeners:{
    //     afterRender:function(){
    //         //获取cookie值
    //         var cookie = Ext.state.Manager.getProvider();
    //         var gradeButtonId = cookie.get('gradeButton');
    //         console.log(gradeButtonId);

    //         console.log(this.lookupReference('gratransferGradede'));

    //         if(gradeButtonId == "transferStudentButton"){
    //             this.lookupReference('transferGrade').show();
    //         }else{
    //             console.log(this.lookupReference('transferGrade'));
    //             this.lookupReference('transferGrade').hide();
    //         }
    //     }
    // }
});