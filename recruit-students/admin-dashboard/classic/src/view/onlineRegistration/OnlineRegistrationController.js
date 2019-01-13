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
     * 地址组件联动
     */
    countryAfterRender:function(){
        // var country = Ext.getCmp('country');
        var country = this.lookupReference('country');
        country.reset();
        country.setValue(country.getStore().getAt(0));  //设置默认值，默认第一个
    },
    countryChange:function(combo){
        //获取combobox组件值
        // var provice = Ext.getCmp('provice');
        // var city = Ext.getCmp('city');
        // var county = Ext.getCmp('county');
        var provice = this.lookupReference('provice');
        var city = this.lookupReference('city');
        var county = this.lookupReference('county');
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
        // var store = Ext.getCmp('country').getStore();
        var store = this.lookupReference('country').getStore();
        Ext.each(store.data.items,function(item){
            if(item.data.parent == 1){
                data.push(item);
            }
        });
        provice.getStore().add(data);
    },
    proviceAfterRender:function(){
        // var provice = Ext.getCmp('provice');
        // var country = Ext.getCmp('country');
        var provice = this.lookupReference('provice');
        var country = this.lookupReference('country');
        provice.reset();
        provice.setValue(country.getStore().getAt(19));  //设置默认值，默认广东省（id:20）
    },
    proviceChange:function(combo){
        var parent = combo.getValue();  //获取选中值
        // console.log(parent);
        // var city = Ext.getCmp('city');  //获取city combobox组件
        // var county = Ext.getCmp('county');  //获取county combobox组件
        var city = this.lookupReference('city');
        var county = this.lookupReference('county');
        //清空已加载列表
        city.getStore().removeAll();
        county.getStore().removeAll();
        //清空已存在的结果
        city.reset();
        county.reset();
        //加载列表
        // var data = new Array();
        var data = [];
        // var store = Ext.getCmp('country').getStore();
        var store = this.lookupReference('country').getStore();
        Ext.each(store.data.items,function(item){
            if(item.data.parent == parent){
                data.push(item);
            }
        });
        city.getStore().add(data);
    },
    cityAfterRender:function(){
        // var city = Ext.getCmp('city');
        // var country = Ext.getCmp('country');
        var city = this.lookupReference('city');
        var country = this.lookupReference('country');
        city.reset();
        city.setValue(country.getStore().getAt(1892));  //设置默认值，默认东莞市（id:1893）
    },
    cityChange:function(combo){
        var parent = combo.getValue();  //获取选中值
        // var county = Ext.getCmp('county');  //获取county combobox组件
        var county = this.lookupReference('county');
        county.getStore().removeAll();     //清空已加载列表
        county.reset(); //清空已存在的结果
        //加载列表
        // var data = new Array();
        var data = [];
        // var store = Ext.getCmp('country').getStore();
        var store = this.lookupReference('country').getStore();
        Ext.each(store.data.items,function(item){
            if(item.data.parent == parent){
                data.push(item);
            }
        });
        county.getStore().add(data);
    },
    countyAfterRender:function(){
        // var county = Ext.getCmp('county');
        // var country = Ext.getCmp('country');
        var county = this.lookupReference('county');
        var country = this.lookupReference('country');
        county.reset();
        county.setValue(country.getStore().getAt(2034));  //设置默认值，默认长安镇（id:2035）
    },

    /**
     * 父亲户籍所在地
     * 选择是或者否
     */
    fatherSelectYes:function(checked){
        if(checked){
            var select = this.lookupReference('father_selectY').getValue();
            console.log("fY:"+select);
            if(select === true){
                console.log("f1");
                this.lookupReference('fatherCommunity').show();
                this.lookupReference('fatherRegisteredResidence').hide();
            }else{
                console.log("f2");
                this.lookupReference('fatherCommunity').hide();
                this.lookupReference('fatherRegisteredResidence').show();
            }
        }
    },
    fatherSelectNo:function(checked){
        if(checked){
            var select = this.lookupReference('father_selectN').getValue();
            console.log("fN:"+select);
            if(select === true){
                console.log("f3");
                this.lookupReference('fatherCommunity').hide();
                this.lookupReference('fatherRegisteredResidence').show();
            }else{
                console.log("f4");
                this.lookupReference('fatherCommunity').show();
                this.lookupReference('fatherRegisteredResidence').hide();
            }
        }
    },

     /**
     * 母亲户籍所在地
     * 选择是或者否
     */
    motherSelectYes:function(checked){
        if(checked){
            var select = this.lookupReference('mother_selectY').getValue();
            console.log("mY:"+select);
            if(select === true){
                console.log("m1");
                this.lookupReference('motherCommunity').show();
                this.lookupReference('motherRegisteredResidence').hide();
            }else{
                console.log("m2");
                this.lookupReference('motherCommunity').hide();
                this.lookupReference('motherRegisteredResidence').show();
            }
        }
    },
    motherSelectNo:function(checked){
        if(checked){
            var select = this.lookupReference('mother_selectN').getValue();
            console.log("mN:"+select);
            if(select === true){
                console.log("m3");
                this.lookupReference('motherCommunity').hide();
                this.lookupReference('motherRegisteredResidence').show();
            }else{
                console.log("m4");
                this.lookupReference('motherCommunity').show();
                this.lookupReference('motherRegisteredResidence').hide();
            }
        }
    },

    /**
     * 选择社区或者楼盘
     */
    selectCommunity:function(checked){
        if(checked){
            var select = this.lookupReference('select_community').getValue();
            console.log("select_community:"+select);
            if(select === true){
                this.lookupReference('addressCommunity').show();
                this.lookupReference('addressProperty').hide();
            }else{
                this.lookupReference('addressCommunity').hide();
                this.lookupReference('addressProperty').show();
            }
        }
    },
    selectProperty:function(checked){
        if(checked){
            var select = this.lookupReference('select_property').getValue();
            console.log("select_property:"+select);
            if(select === true){
                this.lookupReference('addressCommunity').hide();
                this.lookupReference('addressProperty').show();
            }else{
                this.lookupReference('addressCommunity').show();
                this.lookupReference('addressProperty').hide();
            }
        }
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