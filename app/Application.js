/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('PlayHouse.Application', {
    extend: 'Ext.app.Application',
    requires: [
        'PlayHouse.util.SettingsManager'
    ],

    name: 'PlayHouse',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch: function() {
        PlayHouse.SettingsManager.init();
    },

    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
