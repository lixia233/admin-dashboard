Ext.define('Admin.store.onlineRegistration.CommunityStore',{
    extend: 'Ext.data.Store',
    alias: 'store.communityStore',
    model:'Admin.model.onlineRegistration.AddressModel',
    storeId:'communityStore',

    data:[
        [1,2035,'上角社区'],
        [2,2035,'厦边社区'],
        [3,2035,'厦岗社区'],
        [4,2035,'上沙社区'],
        [5,2035,'沙头社区'],
        [6,2035,'乌沙社区'],
        [7,2035,'锦厦社区'],
        [8,2035,'新民社区'],
        [9,2035,'上涌头社区'],
        [10,2035,'咸西社区'],
        [11,2035,'长盛社区'],
        [12,2035,'宵边社区'],
        [13,2035,'新安社区']
    ]
});