Ext.define('Admin.view.onlineRegistration.OnlineRegistrationController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.onlineRegistrationController',

    /**
     * 公办学校招生
     * 点击公办学校，打开选择年级窗口
     */
    publicSchools:function(toolbar){
        toolbar.up('panel').up('container').add(Ext.widget('chooseGradeWindow')).show();
    },

    /**
     * 选择幼儿园，打开选择类别窗口
     */
    chooseKindergarten:function(toolbar,btn){ 
        var mydata = {};
        mydata['grade'] = '幼儿园小班';
        console.log(mydata);
        // Ext.Ajax.request({
        //     url:'',
        //     method:'post',
        //     'headers':{'Content-Type':'application/json'},
        //     'params':Ext.encode(mydata),
        //     success:function(){
        //         toolbar.up('panel').up('container').add(Ext.widget('chooseCategoryWindow')).show();
        //     }
        // });
        toolbar.up('panel').up('container').add(Ext.widget('chooseCategoryWindow')).show();
        console.log('幼儿园小班');
        // var store = btn.up('').getStore();
        // Ext.apply(store.proxy.extraParams,{
            
        // });
    },
    /**
     * 选择小学，打开选择类别窗口
     */
    choosePrimarySchool:function(toolbar,btn){ 
        var mydata = {};
        mydata['grade'] = '小学一年级';
        console.log(mydata);
        // Ext.Ajax.request({
        //     url:'',
        //     method:'post',
        //     'headers':{'Content-Type':'application/json'},
        //     'params':Ext.encode(mydata),
        //     success:function(){
        //         toolbar.up('panel').up('container').add(Ext.widget('chooseCategoryWindow')).show();
        //     }
        // });
        toolbar.up('panel').up('container').add(Ext.widget('chooseCategoryWindow')).show();
        console.log('小学一年级');
        // var store = btn.up('').getStore();
        // Ext.apply(store.proxy.extraParams,{
            
        // });
    },
    /**
     * 选择初中，打开选择类别窗口
     */
    chooseJuniorHighSchool:function(toolbar,btn){ 
        var mydata = {};
        mydata['grade'] = '初中一年级';
        console.log(mydata);
        // Ext.Ajax.request({
        //     url:'',
        //     method:'post',
        //     'headers':{'Content-Type':'application/json'},
        //     'params':Ext.encode(mydata),
        //     success:function(){
        //         toolbar.up('panel').up('container').add(Ext.widget('chooseCategoryWindow')).show();
        //     }
        // });
        toolbar.up('panel').up('container').add(Ext.widget('chooseCategoryWindow')).show();
        console.log('初中一年级');
        // var store = btn.up('').getStore();
        // Ext.apply(store.proxy.extraParams,{
            
        // });
    },
    /**
     * 选择插班生，打开选择类别窗口
     */
    chooseTransferStudent:function(toolbar,btn){ 
        var mydata = {};
        mydata['grade'] = '插班生';
        console.log(mydata);
        // Ext.Ajax.request({
        //     url:'',
        //     method:'post',
        //     'headers':{'Content-Type':'application/json'},
        //     'params':Ext.encode(mydata),
        //     success:function(){
        //         toolbar.up('panel').up('container').add(Ext.widget('chooseCategoryWindow')).show();
        //     }
        // });
        toolbar.up('panel').up('container').add(Ext.widget('chooseCategoryWindow')).show();
        console.log('插班生');
        // var store = btn.up('').getStore();
        // Ext.apply(store.proxy.extraParams,{
            
        // });
    },

    /**
     * 点击申请
     */
    chooseCategory:function(toolbar){
        toolbar.up('panel').up('container').add(Ext.widget('applicationWindow')).show();
    },
    /**
     * 申请信息的保存
     */
    applicationSave:function(btn){
        console.log('applicationSave');
    }

    /**
     * 私立学校招生
     */
    // privateSchools:function(){}
});