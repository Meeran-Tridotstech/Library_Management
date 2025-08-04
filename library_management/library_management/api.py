import frappe


@frappe.whitelist(allow_guest)

def ping():
    return 'pong'