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
     * 选择年级，打开选择类别窗口
     */
    chooseGrade:function(toolbar){
        toolbar.up('panel').up('container').add(Ext.widget('selectCategoryWindow')).show();
    },

    /**
     * 点击申请
     */
    chooseCategory:function(){

    }


    /**
     * 私立学校招生
     */
    // privateSchools:function(){}
});