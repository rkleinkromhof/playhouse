/**
 * A global settings manager.
 */
Ext.define('PlayHouse.util.SettingsManager', {
	extend: 'Ext.Base',
	alternateClassName: 'PlayHouse.SettingsManager',
	uses: [
		'Ext.util.Format'
	],
	singleton: true,

	config: {
		/**
		 * The LocalStorage settings store.
		 */
		store: 'playhouse-settings',
		currencySign: '\u20ac', // euro symbol.
		defaultDateFormat: 'd-m-Y' // 01-01-2017 to 31-12-2017.
	},

	init: function(config) {
		this.initConfig(config);
	},

	applyStore: function(store) {
		if (Ext.isString(store)) {
			store = Ext.util.LocalStorage.get(store);
		}
		return store;
	},

	updateStore: function(store, oldStore) {
		if (oldStore) {
			oldStore.release();
		}
	},

	updateCurrencySign: function(sign, oldSign) {
		this.updateSetting('currencySign', sign);
		Ext.util.Format.currencySign = sign;
	},

	updateDefaultDateFormat: function(format, oldFormat) {
		this.updateSetting('defaultDateFormat', format);
		Ext.util.Format.defaultDateFormat = format;
	},

	updateSetting: function(key, value) {
		var store = this.getStore();

		store.setItem(key, value);
		store.save();
	}
});
