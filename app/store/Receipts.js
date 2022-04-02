/**
 * Receipts store.
 */
Ext.define('PlayHouse.store.Receipts', {
	extend: 'Ext.data.Store',
	requires: [
		'PlayHouse.model.Receipt'
	],

	alias: 'store.receipts',

	// model: 'PlayHouse.model.Receipt'
	fields: [
		'id',
		'date',
		'retailer',
		'totalPrice',
		{
			name: 'monthAndYear',
			mapping: 'date',
			type: 'string',
			convert: function convertDateToMonthAndYearString(value, record) {
				return Ext.util.Format.date(value, 'F Y');
			}
		}
	],

	grouper: {
		property: 'monthAndYear',
		sortProperty: 'date',
		direction: 'DESC'
	},

	sorters: [
		{
			property: 'date',
			direction: 'DESC'
		}
	],

	data: [
		{
			id: '1',
			date: new Date(),
			retailer: 'Albert Heijn',
			totalPrice: 13.37
		},
		{
			id: '2',
			date: new Date(2017, 12, 20, 17, 15, 00),
			retailer: 'Lidl',
			totalPrice: 7.00
		},
		{
			id: '3',
			date: new Date(2017, 12, 24, 12, 28, 00),
			retailer: 'Albert Heijn',
			totalPrice: 42.07
		}
	]
});
