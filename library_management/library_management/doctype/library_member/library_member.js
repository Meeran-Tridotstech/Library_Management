// Copyright (c) 2025, Meeran and contributors
// For license information, please see license.txt

frappe.ui.form.on("Library Member", {
    refresh: function (frm) {
        frm.add_custom_button('Create Membership', () => {
            frappe.new_doc('Library Membership', {
                library_member: frm.doc.name
            })
        })
        frm.add_custom_button('Create Transaction', () => {
            frappe.new_doc('Library Transaction', {
                library_member: frm.doc.name
            })
        })

        let menu = [
            {
            label:"Article",
            action:()=>frappe.set_route('article/view/list')
            },
            {
            label:"Library Membership",
            action:()=>frappe.set_route('library-membership')
            },
            {
            label:"Library Transaction",
            action:()=>frappe.set_route('library-transaction')
            },
            {
            label:"Library Setting",
            action:()=>frappe.set_route('library-setting')
            },
            {
            label:"Leave Request",
            action:()=>frappe.set_route('leave-request')
            },

        ]
        menu.forEach(item =>{
            frm.add_custom_button(item.label, item.action,'Navigate');
        });
    }
});
