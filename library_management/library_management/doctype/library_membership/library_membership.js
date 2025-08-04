// Copyright (c) 2025, Meeran and contributors
// For license information, please see license.txt

frappe.ui.form.on("Library Membership", {
    refresh(frm) {
        if (!frm.doc.child || frm.doc.child.length === 0) {
            let row = frm.add_child('child', {
                name1: "Sheik",
                age: 55,
                location: "Kayalpatinam"
            });
            frm.refresh_field('child');
        }
    }
    
});
