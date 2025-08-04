// Copyright (c) 2025, Meeran and contributors
// For license information, please see license.txt


//frappe.call 
// frappe.ui.form.on('Emp Details', {
//     refresh(frm) {
//         frm.add_custom_button("Create Record via Server", function () {
//             frappe.call({
//                 method: "library_management.library_management.doctype.emp_details.emp_details.create_emp_record",
//                 callback: function(r) {
//                     if (r.message) {
//                         frappe.msgprint("New record created: " + r.message);
//                         frappe.set_route("form", "Emp Details", r.message);
//                     }
//                 }
//             });
//         });
//     }
// });



// Client Event:
//-------------

frappe.ui.form.on("Emp Details", {
    refresh(frm){
    //When User Enter the Form Show the Message
    // setup: function(frm) {
    //     frappe.msgprint("Setup: Triggered once when form is created for the first time");
    // },


    //Before Load
    // before_load: function(frm) {
    //     frm.set_df_property('salary','hidden',1)
    //     frappe.msgprint("before_load: Triggered before the form is about to load");
    // },

    // //Onload Load
    // onload: function(frm) {
    //     frappe.msgprint("onload: Triggered when the form is loaded and is about to render");
    //     frm.set_df_property('salary','hidden',1)
    // },

    // Referesh Load
    // refresh: function(frm) {
    //     frappe.msgprint("refresh: Triggered when the form is loaded and is about to render");
    //     frm.set_df_property('salary','hidden',1)
    // },

     // onload_post_render
    // onload_post_render: function(frm) {
    //     frappe.msgprint("onload_post_render: Triggered after the form is loaded and rendered");
    //     frm.set_df_property('salary','hidden',1)
    // },
    

     // validate
    // validate: function(frm) {
    //     frappe.msgprint("validate: Triggered before before_save");
    //     frm.set_df_property('salary','hidden',1)
    // },
    
    // before_discard
    // after_discard: function(frm) {
    //     frappe.msgprint("before_discard: Triggered before discard is called");
    //     console.log("before_discard triggered");
    // },
    

    //Basic API Call Using Button:
    //----------------------------
    //Calling an API using Inside the Doctype CLass Using (frm.call)

    frm.add_custom_button("Button 1",()=>{
        frm.call("frm_inside_the_class")
    })


    // //Calling an API using Outside the Doctype CLass Using (frm.call) -Not Work
    // frm.add_custom_button("Button 2",()=>{
    //     frm.call("frm_outside_class")
    // })

    // // Calling an api inside the doctype class. using frappe.call
    // frm.add_custom_button("Button 3",()=>{
    //     frappe.call({
    //         method:"library_management.library_management.doctype.emp_details.emp_details.btn3"
    //     })
    // })



    // //Below FRM and FRAPPE Example Doctype
    // frm.add_custom_button("BTN 1",()=>{
    //     frm.call("greet")
    // })

    // frm.add_custom_button("BTN 2",()=>{
    //     frm.call("greet")
    //     .then(response=>{
    //         if (response){
    //             console.log(response)
    //         }
    //     })
    // })

    //EVENTS:(set_value,refersh_field)
    //-------------------------------
    // first_name = frm.doc.first_name
    // console.log(first_name)
    // frm.set_value("first_name","Meeran")
    // frm.refresh_field("first_name") //Only UI level Changed Not change DB
    // frm.save()
    // console.log(first_name)

    // frm.set_value({
    //     first_name :"Meeran",
    //     last_name : "SM",
    //     deaprtments : "Developer",
    // })


    // frm.add_custom_button("Refresh",()=>{
    // frm.refresh();
    // frappe.msgprint("Refreshed")
    // });


//     frm.add_custom_button("Custom Save",()=>{
//             frm.save();
//             frappe.show_alert({
//                 message:('Save Button Clicked'),
//                 indicator:'yellow'
//             }, 5);
//         });


// frappe.ui.form.on("Emp Details", {
//     refresh(frm) {
//         frm.add_custom_button("Add Member to Child Table", () => {
//             // Ensure all required fields are filled
//             if (frm.doc.first_name && frm.doc.age && frm.doc.location) {

//                 // Optional: Check if this entry already exists
//                 const alreadyExists = frm.doc.child?.some(row =>
//                     row.name === frm.doc.first_name &&
//                     row.age === frm.doc.age &&
//                     row.location === frm.doc.location
//                 );

//                 if (!alreadyExists) {
//                     // Add a new row to the child table
//                     frm.add_child("child", {
//                         name: frm.doc.first_name,
//                         age: frm.doc.age,
//                         location: frm.doc.location
//                     });

//                     frm.refresh_field("child"); // Update UI
//                     frm.dirty();                // Mark form as modified
//                     frm.save();                 // Save the form to persist data
//                 } else {
//                     frappe.msgprint("This member is already added to the child table.");
//                 }

//             } else {
//                 frappe.msgprint("Please fill in First Name, Age, and Location before adding.");
//             }
//         });
    }
});

// }   
// })

//Geolocation: Select Location that address visible in Address field:
//------------------------------------------------------------------
// frappe.ui.form.on("Emp Details", {
//     map:function(frm) {
//         // Parse GeoJSON from the 'map' field
//         const mapData = JSON.parse(frm.doc.map || '{}')?.features?.[0];

//         if (mapData && mapData.geometry.type === 'Point') {
//             const [lon, lat] = mapData.geometry.coordinates;

//             // Reverse geocoding via OpenStreetMap
//             frappe.call({
//                 type: "GET",
//                 url: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
//                 callback(res) {
//                     if (res && res.display_name) {
//                         frm.set_value('address', res.display_name);
//                     }
//                 }
//             });
//         }
//     }
// });


// frappe.ui.form.on("Emp Details", {
//     refresh(frm){
//         frm.add_custom_button("Get Route",()=>{
//             let route = frappe.get_route();
//             let emp_id = route[2]
//             console.log(route)
//         })

//     }
// });
frappe.ui.form.ControlLink.link_options = function(link) {
    if (link.df.fieldname === "custom_link_option") {
        return [
            {
                html: "<span class='text-primary link-option'>" +
                      "<i class='fa fa-search' style='margin-right: 5px;'></i> " +
                      __("Custom Link Option") + "</span>",
                label: __("Custom Link Option"),
                value: "custom__link_option",
                action: () => {
                    frappe.msgprint("Custom link option clicked!");
                }
            }
        ];
    }
};