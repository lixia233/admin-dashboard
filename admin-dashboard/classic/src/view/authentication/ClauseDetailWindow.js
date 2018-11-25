Ext.define('Admin.view.authentication.ClauseDetailWindow',{
    extend:'Ext.window.Window',
    alias:'widget.clauseDetailWindow',
    reference:'clauseDetailWindow',

    height:320,
    width:450,

    title:'条款详情',
    scrollable:true,
    bodyPadding:10,

    closable: true,//如果为True，则显示“关闭”工具按钮并允许用户关闭面板
    
    /**应该是后台管理条款详情，并编辑等…… */
    html:'<div>'
            +'<p style="text-indent:2em;">'
                +'一、申请学生年龄符合国家起始年级招生要求：'
                +'<br>&nbsp;&nbsp;&nbsp;&nbsp;小学年满6周岁（即2011年9月1日至2012年8月31日前出生，超过该年龄范围不接受申请），无小学学籍；'
                +'<br>&nbsp;&nbsp;&nbsp;&nbsp;幼儿园年满3周岁（即2014年9月1日至2015年8月31日出生）。<br>'
            +'</p>'
            +'<p style="text-indent:2em;">'
                +'二、申请学生符合转学申请条件，学籍管理遵守东莞市学籍管理办法及相关工作指引要求。<br>'
            +'</p>'
            +'<p style="text-indent:2em;">'
                +'三、所提交的申请材料真实、完整、准确，绝无虚假。<br>'
            +'</p>'
            +'<p style="text-indent:2em;">'
                +'四、服从长安镇招生分配办法的安排。<br>'
            +'</p>'
            +'<p style="text-indent:2em;">'
                +'五、如本次申请中所提供材料弄虚作假或瞒报，同意取消学位；情节严重则承担相应责任。'
            +'</p>'
        +'</div>'

});