Ext.define('Admin.view.onlineRegistration.CategoryTreeViewModel',{
    extend: 'Ext.app.ViewModel',
    alias:'viewmodel.categoryTreeViewModel',

    formulas: {
        selectionText: function(get) {
            var selection = get('treelist.selection'), path;
            if (selection) {
                path = selection.getPath('text');
                path = path.replace(/^\/Root/, '');
                alert(path);
                return 'Selected: ' + path;
            } else {
                return 'No node selected';
            }
            
        }
    },

    stores:{
        navItems:{
            type:'categoryTreeStore'
            // ,autoLoad:true
        },
        categoryDetails:{
            type:'categoryStore'
            // ,autoLoad:false // Don't Auto load
        }
    }
});