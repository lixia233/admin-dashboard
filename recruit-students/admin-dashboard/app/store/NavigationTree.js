Ext.define('Admin.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: 'Dashboard',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'admindashboard',
                routeId: 'dashboard', // routeId defaults to viewType，routeId默认为viewType
                leaf: true
            },
            {
                text:'网上报名',
                iconCls:'x-fa fa-calendar-plus-o',
                viewType:'onlineRegistration',
                leaf:true
            },
            {
                text: 'Email',
                iconCls: 'x-fa fa-send',
                rowCls: 'nav-tree-badge nav-tree-badge-hot',
                viewType: 'email',
                leaf: true
            },
            {
                text: 'Profile',
                iconCls: 'x-fa fa-user',
                viewType: 'profile',
                leaf: true
            },
            {
                text: 'Search results',
                iconCls: 'x-fa fa-search',
                viewType: 'searchresults',
                leaf: true
            },
            {
                text: 'FAQ',
                iconCls: 'x-fa fa-question',
                viewType: 'faq',
                leaf: true
            },
            {
                text: 'Pages',
                iconCls: 'x-fa fa-leanpub',
                expanded: false,
                selectable: false,
                //routeId: 'pages-parent',
                //id: 'pages-parent',

                children: [
                    {
                        text: 'Blank Page',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    },

                    {
                        text: '404 Error',
                        iconCls: 'x-fa fa-exclamation-triangle',
                        viewType: 'page404',
                        leaf: true
                    },
                    {
                        text: '500 Error',
                        iconCls: 'x-fa fa-times-circle',
                        viewType: 'page500',
                        leaf: true
                    },
                    {
                        text: 'Lock Screen',
                        iconCls: 'x-fa fa-lock',
                        viewType: 'lockscreen',
                        leaf: true
                    },
                    {
                        text: '登录',
                        iconCls: 'x-fa fa-check',
                        viewType: 'login',
                        leaf: true
                    },
                    {
                        text: '注册',
                        iconCls: 'x-fa fa-pencil-square-o',
                        viewType: 'register',
                        leaf: true
                    },
                    {
                        text: '密码重置',
                        iconCls: 'x-fa fa-lightbulb-o',
                        viewType: 'passwordreset',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Widgets',
                iconCls: 'x-fa fa-flask',
                viewType: 'widgets',
                leaf: true
            },
            {
                text: 'Forms',
                iconCls: 'x-fa fa-edit',
                viewType: 'forms',
                leaf: true
            },
            {
                text: 'Charts',
                iconCls: 'x-fa fa-pie-chart',
                viewType: 'charts',
                leaf: true
            }
        ]
    }
});
