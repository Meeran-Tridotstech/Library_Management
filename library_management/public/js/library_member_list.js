frappe.listview_settings['Library Member'] = {
    onload: function(listview) {

        const navMenu = [
            { label: "📄 Article", route: "article/view/list" },
            { label: "👥 Library Membership", route: "library-membership" },
            { label: "📚 Library Transaction", route: "library-transaction" },
            { label: "⚙️ Library Setting", route: "library-setting" },
            { label: "📝 Leave Request", route: "leave-request" },
        ];

        navMenu.forEach(item => {
            listview.page.add_inner_button(item.label, () => {frappe.set_route(item.route);}, 'Navigate');  
        });
    }
};
