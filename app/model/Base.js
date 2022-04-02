Ext.define('PlayHouse.model.Base', {
	extend: 'Ext.data.Model',
	requires: [
		'Ext.data.proxy.Memory'
	],

	proxy: {
		type: 'memory'
	},

	schema: {
		namespace: 'PlayHouse.model'
	}
});