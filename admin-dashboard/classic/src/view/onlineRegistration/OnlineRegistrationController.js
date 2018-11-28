Ext.define('Admin.view.onlineRegistration.OnlineRegistrationController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.onlineRegistrationController',

    /**
     * 选择学校
     */
    chooseSchool:function(toolbar){
        toolbar.up('panel').up('container').add(Ext.widget('chooseGradeWindow')).show();
    },

    /**
     * 选择年级
     */
    chooseGrade:function(toolbar){
        toolbar.up('panel').up('container').add(Ext.widget('selectCategoryWindow')).show();
    }

    /**
     * 公办学校招生
     */
    // publicSchools:function(toolbar){
    //     toolbar.up('panel').up('container').add(Ext.widget('chooseGradeWindow')).show();
    // },

    /**
     * 私立学校招生
     */
    // privateSchools:function(){}
});