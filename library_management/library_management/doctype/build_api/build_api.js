// Copyright (c) 2025, Meeran and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Build Api", {
// 	refresh(frm) {

// 	},
// });

// meeran@DESKTOP-5ST3OB9:~/library-bench$ curl -X POST http://library.localhost:8001/api/resource/DocType \
// -H "Content-Type: application/json" \
// -H "Authorization: token fa8af76b7c52e21:d6d843aff2b4b32" \
// -d '{
//     "name": "Custom Build API",
//     "module": "Library Management",
//     "custom": 1,
//     "fields": [
//         {
//             "fieldname": "name1",
//             "label": "Name",
//             "fieldtype": "Data"
//         },
//         {
//             "fieldname": "mail",
//             "label": "Maild Id",
//             "fieldtype": "Data"
//         }
//     ]
// }'

// Output:
//-------
// {"data":
//     {
//         "name":"Custom Build API",
//         "creation":"2025-08-01 12:25:36.034245",
//         "modified":"2025-08-01 12:25:36.034245",
//         "modified_by":"Administrator"
//         ,"owner":"Administrator",
//         "docstatus":0,
//         "idx":0,
//         "issingle":0,
//         "is_virtual":0,
//         "is_tree":0,
//         "istable":0,
//         "editable_grid":1,
//         "track_changes":0,
//         "module":"Library Management",
//         "naming_rule":"",
//         "sort_field":"modified",
//         "sort_order":"DESC",
//         "read_only":0,
//         "in_create":0,
//         "allow_copy":0,
//         "allow_rename":1,
//         "allow_import":0,
//         "hide_toolbar":0,
//         "track_seen":0,
//         "max_attachments":0,
//         "document_type":"",
//         "engine":"InnoDB",
//         "is_submittable":0,
//         "show_name_in_global_search":0,
//         "custom":1,
//         "beta":0,
//         "has_web_view":0,
//         "allow_guest_to_view":0,
//         "email_append_to":0,
//         "show_title_field_in_link":0,
//         "translated_doctype":0,
//         "is_calendar_and_gantt":0,
//         "quick_entry":0,
//         "grid_page_length":50,
//         "track_views":0,
//         "queue_in_background":0,
//         "allow_events_in_timeline":0,
//         "allow_auto_repeat":0,
//         "make_attachments_public":0,
//         "force_re_route_to_default_view":0,
//         "show_preview_popup":0,
//         "protect_attached_files":0,
//         "index_web_pages_for_search":1,
//         "row_format":"Dynamic",
//         "doctype":"DocType",
//         "fields":[
//             {
//                 "name":"s8gso2apf0",
//                 "creation":"2025-08-01 12:25:36.034245",
//                 "modified":"2025-08-01 12:25:36.034245",
//                 "modified_by":"Administrator",
//                 "owner":"Administrator",
//                 "docstatus":0,
//                 "parent":"Custom Build API",
//                 "parentfield":"fields",
//                 "parenttype":"DocType",
//                 "idx":1,
//                 "fieldname":"name1",
//                 "label":"Name",
//                 "fieldtype":"Data",
//                 "search_index":0,
//                 "show_dashboard":0,
//                 "hidden":0,
//                 "set_only_once":0,
//                 "allow_in_quick_entry":0,
//                 "print_hide":0,
//                 "report_hide":0,
//                 "reqd":0,
//                 "bold":0,
//                 "in_global_search":0,
//                 "collapsible":0,
//                 "unique":0,
//                 "no_copy":0,
//                 "allow_on_submit":0,
//                 "permlevel":0,
//                 "ignore_user_permissions":0,
//                 "columns":0,
//                 "in_list_view":0,
//                 "fetch_if_empty":0,
//                 "in_filter":0,
//                 "remember_last_selected_value":0,
//                 "ignore_xss_filter":0,
//                 "print_hide_if_no_value":0,
//                 "allow_bulk_edit":0,
//                 "in_standard_filter":0,
//                 "in_preview":0,
//                 "read_only":0,
//                 "precision":"",
//                 "length":0,
//                 "translatable":0,
//                 "hide_border":0,
//                 "hide_days":0,
//                 "hide_seconds":0,
//                 "non_negative":0,
//                 "is_virtual":0,
//                 "sort_options":0,
//                 "show_on_timeline":0,
//                 "make_attachment_public":0,
//                 "doctype":"DocField","__unsaved":1
//             },{
//                 "name":"s8ghdqvh9a",
//                 "creation":"2025-08-01 12:25:36.034245",
//                 "modified":"2025-08-01 12:25:36.034245",
//                 "modified_by":"Administrator",
//                 "owner":"Administrator",
//                 "docstatus":0,
//                 "parent":"Custom Build API",
//                 "parentfield":"fields",
//                 "parenttype":"DocType",
//                 "idx":2,
//                 "fieldname":"mail",
//                 "label":"Maild Id",
//                 "fieldtype":"Data",
//                 "search_index":0,
//                 "show_dashboard":0,
//                 "hidden":0,
//                 "set_only_once":0,
//                 "allow_in_quick_entry":0,
//                 "print_hide":0,
//                 "report_hide":0,
//                 "reqd":0,
//                 "bold":0,
//                 "in_global_search":0,
//                 "collapsible":0,
//                 "unique":0,
//                 "no_copy":0,
//                 "allow_on_submit":0,
//                 "permlevel":0,
//                 "ignore_user_permissions":0,
//                 "columns":0,
//                 "in_list_view":0,
//                 "fetch_if_empty":0,
//                 "in_filter":0,
//                 "remember_last_selected_value":0,
//                 "ignore_xss_filter":0,
//                 "print_hide_if_no_value":0,
//                 "allow_bulk_edit":0,
//                 "in_standard_filter":0,
//                 "in_preview":0,
//                 "read_only":0,
//                 "precision":"",
//                 "length":0,
//                 "translatable":0,
//                 "hide_border":0,
//                 "hide_days":0,
//                 "hide_seconds":0,
//                 "non_negative":0,
//                 "is_virtual":0,
//                 "sort_options":0,
//                 "show_on_timeline":0,
//                 "make_attachment_public":0,
//                 "doctype":"DocField",
//                 "__unsaved":1
//             }
//         ],
//         "actions":[

//         ],
//         "links":[

//         ],
//         "permissions":[

//         ],
//         "states":[

//         ]}}