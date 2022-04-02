/**
 * A single line on a Receipt.
 */
Ext.define('PlayHouse.model.ReceiptLine', {
	extend: 'PlayHouse.model.Base',

    fields: [
    	{
    		name: 'amount',
    		type: 'integer'
    	},
    	{
    		name: 'productname',
    		type: 'string'
    	},
    	{
    		name: 'price',
    		type: 'number'
    	}
	]
});