/**
 * A receipt from a retail store.
 */
Ext.define('PlayHouse.model.Receipt', {
	extend: 'PlayHouse.model.Base',
	requires: [
        'Ext.data.proxy.LocalStorage'
	],

	proxy: {
		type: 'localstorage',
		id: 'playhouse-receipts'
	},

	fields: [
    	// When
		{
			name: 'date',
			type: 'date',
			dateFormat: 'time'
    	},

    	// Where
		{
			name: 'retailer',
			type: 'string'
    	},

    	// What
		{
			name: 'totalPrice',
			persist: false
    	}
	],

	// What
	// hasMany: 'ReceiptLine',

	updateTotalPrice: function() {
		var me = this;
		var lines = me.getReceiptLines();
		var totalPrice = lines.sum('price');

		me.set('totalPrice', totalPrice, {
			dirty: false
		});

		return totalPrice;
	}
});
