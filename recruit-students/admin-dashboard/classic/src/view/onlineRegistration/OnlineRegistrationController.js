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
    chooseGrade:function(toolbar,btn){
        //获取点击的按钮id
        var id = btn.currentTarget.id;  
        console.log(id);

        //设置cookie,把button的id放入cookie中
        var cookie = new Ext.state.CookieProvider();
        Ext.state.Manager.setProvider(cookie);
        cookie.set('gradeButton',id);

        toolbar.up('panel').up('container').add(Ext.widget('chooseCategoryWindow')).show(); //打开窗口
    },

    /**
     * 点击申请
     */
    chooseCategory:function(toolbar){
        toolbar.up('panel').up('panel').up('container').add(Ext.widget('applicationWindow')).show();
        
        //获取title
        var panel = Ext.getCmp('applicationWindow');
        console.log(panel.getTitle());

        //获取cookie值
        var cookie = Ext.state.Manager.getProvider();
        var gradeButtonId = cookie.get('gradeButton');
        console.log(gradeButtonId);
        var categoryTreeNodeText = cookie.get('categoryTreeNode');
        console.log(categoryTreeNodeText);

        //设置title
        if(gradeButtonId == "kindergartenButton"){
            panel.setTitle('<i class="fa fa-home" aria-hidden="true"></i>&nbsp;公办学校-幼儿园小班-'+categoryTreeNodeText+"-申请");
        }else if(gradeButtonId == "primarySchoolButton"){
            panel.setTitle('<i class="fa fa-home" aria-hidden="true"></i>&nbsp;公办学校-小学一年级-'+categoryTreeNodeText+"-申请");
        }else if(gradeButtonId == "juniorHighSchoolButton"){
            panel.setTitle('<i class="fa fa-home" aria-hidden="true"></i>&nbsp;公办学校-初中一年级-'+categoryTreeNodeText+"-申请");
        }else if(gradeButtonId == "transferStudentButton"){
            panel.setTitle('<i class="fa fa-home" aria-hidden="true"></i>&nbsp;公办学校-插班生-'+categoryTreeNodeText+"-申请");
        }
        console.log(panel.getTitle());
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