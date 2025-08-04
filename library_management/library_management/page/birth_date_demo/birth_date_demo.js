frappe.pages['birth-date-demo'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Birth date',
		single_column: true
	});
}