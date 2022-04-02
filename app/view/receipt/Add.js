/**
 * Add a receipt.
 */
Ext.define('PlayHouse.view.receipt.Add', {
	extend: 'Ext.Panel',
	xtype: 'addreceipt',

	requires: [
		'Ext.field.DatePickerNative',
		'Ext.field.Select'
	],

	viewModel: {
		links: {
			newReceipt: {
				type: 'Receipt',
				create: {
					date: new Date(),
					retailer: 'ah'
				}
			}
		}
	},

	items: [
		{
			xtype: 'datepickernativefield',
			label: 'Date',
			labelAlign: 'placeholder',
			bind: '{newReceipt.date}'
		},
		{
			xtype: 'selectfield',
			label: 'Store',
			labelAlign: 'placeholder',
			bind: '{newReceipt.retailer}',
            options: [
            	{
                	text: 'Albert Heijn',
                	value: 'ah'
	            },
	            {
	                text: 'Lidl',
	                value: 'lidl'
	            },
	            {
	                text: 'Aldi',
	                value: 'aldi'
	            }
            ]
		},
		{
			xtype: 'button',
			text: 'Add',
			iconCls: 'x-fa fa-plus',
			handler: 'onAddClick'
		}
	]
});