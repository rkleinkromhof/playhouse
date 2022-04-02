/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('PlayHouse.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'PlayHouse.view.main.MainController',
        'PlayHouse.view.main.MainModel',
        'PlayHouse.view.receipt.List'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'center'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [
        {
            // title: 'Receipts',
            iconCls: 'x-fa fa-ticket',
            xtype: 'receiptlist'
        },
        {
            // title: 'Groups',
            iconCls: 'x-fa fa-balance-scale',
            disabled: true
        }
    ]
});
