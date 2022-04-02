/**
 * List of receipts.
 */
Ext.define('PlayHouse.view.receipt.List', {
	extend: 'Ext.dataview.List',
	xtype: 'receiptlist',
	requires: [
		'PlayHouse.store.Receipts'
	],

	title: 'Receipts',
	store: {
		type: 'receipts'
	},

	cls: 'ph-receipt-list',

	deferEmptyText: false,
	emptyText: 'You haven\'t added any receipts yet.',
	grouped: true,

	itemTpl: [
	//@formatter:off
		'<div class="ph-receipt-item">',
			'<span class="ph-receipt-date">{date:date("d")}</span>',
			'<span class="ph-receipt-price">{totalPrice:currency}</span>',
			'<span class="ph-receipt-retailer">{retailer}</span>',
		'</div>'
	//@formatter:on
	]

});
