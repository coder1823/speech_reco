// Copyright (c) 2023, Kaviraj and contributors
// For license information, please see license.txt

frappe.ui.form.on('Item List', {
	item_name: function(frm) {
		frappe.call({
			method:'speech_reco.sss_food_list.doctype.item_list.item_list.translate',
			args:{
				"food_name":frm.doc.item_name
			},
			callback:function(r) {
			if (r.message){
				frm.set_value("item_tamil_name",r.message)
			}
		}
	});
}
});
	


