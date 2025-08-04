// Copyright (c) 2025, Meeran and contributors
// For license information, please see license.txt

frappe.ui.form.on("Resort Booking", {
    refresh(frm) {
        frappe.ui.form.ControlLink.link_options = function (link) {
            if (link.df.fieldname === "") {
                return [
                    {
                        html: `<span class='text-primary link-option'>
                 <i class='fa fa-search'></i> 
                 ${__("புதிய விருப்பம்")}
               </span>`,
                        label: __("புதிய விருப்பம்"),
                        value: "custom__link_option",
                        action: () => {
                            frappe.msgprint("Custom option கிளிக் செய்யப்பட்டது!");
                        }
                    }
                ];
            }
        };
    },
});
