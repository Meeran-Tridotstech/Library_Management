# Copyright (c) 2025, Meeran and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe import _

class EmpDetails(Document):

    # def validate(self):
    #     try:
    #         something = self.undefined_attribute.strip()
    #     except Exception as e:
    #         frappe.log_error(frappe.get_traceback(),"AttributeError Test")
    #         frappe.msgprint("Caught an AttributeError!")
    
    #Validation Error:
    #----------------
    # def validate(self):
    #     try:
    #         # This will throw a SQL error because the table doesn't exist
    #         frappe.db.sql("SELECT * FROM `tabNonExistentTable`")
    #     except Exception as e:
    #         frappe.log_error(frappe.get_traceback(), "Intentional Validate Error")
    #         frappe.msgprint("🚨 Exception Block Executed! See error log.")


    #Number of Record Create:
    #-----------------------
    # def validate(self):
    #     try:
    #         records = frappe.db.sql("""
    #             SELECT first_name FROM `tabEmp Details`
    #         """, as_dict=True)
    #         frappe.msgprint(f"Total employees: {len(records)}")
    #     except Exception as e:
    #         frappe.log_error(title="Validation Error", message=frappe.get_traceback())

    # def before_save(self):
    #     if self.first_name and self.last_name:
    #         self.full_name = f"{self.first_name.strip()} {self.last_name.strip()}"

    
	# def before_print(self, print_settings):
	# 	frappe.msgprint("Before print triggered via backend")

	
    # def on_submit(self):
    #     frappe.msgprint(f"After Submitable Document")


    # def before_save(self):
    #     frappe.msgprint("Before Submit Document")


    # def after_delete(self):
    #     frappe.msgprint("After delete")
		
    # def on_trash(self):
    #     frappe.msgprint("Before Delete")

    # def on_cancel(self):
    #     frappe.msgprint("This document is about to be cancelled.")

    # def before_cancel(self):
    #     frappe.msgprint("This document is about to be cancelled.")


    # def on_submit(self):
    #     frappe.msgprint("📤 After Submit fired!")
    # #     frappe.msgprint("The document is about to be submitted!")

	# # Before Save
	# def before_save(self):
	#     if self.first_name and self.last_name:
	#         self.full_name = f"{self.first_name} {self.last_name}"
	#         frappe.msgprint("The Event of Before save worked")

    # After Save
    # def after_save(self):
    #     frappe.msgprint(f"Successfully saved record: {self.full_name}")

    # # Before Insert
    # def before_insert(self):
    #     frappe.msgprint("The Event of Before insert worked")

    # # After Insert
    # def after_insert(self):
    #     frappe.msgprint("After Insert")
	
	# Before Validate
	# def before_validate(self):
	# 	frappe.msgprint("The before_validate event fired")
	
	# After Validate
	# def validate(self):
	# 	frappe.msgprint("Validation completed successfully!")



#Create The Record Using API
#--------------------------

# @frappe.whitelist()
# def create_emp_record():
#     doc = frappe.get_doc({
#         "doctype": "Emp Details",
#         "first_name": "Kumar",
#         "last_name": "RJ",
#         "salary": 12000
#     })
#     doc.insert()
#     return doc.name


# REST API With POSTMAN(CRUD):
#-----------------------------
#Create new Instances
# @frappe.whitelist(allow_guest=True)
# def create_emp(first_name, last_name, salary):
#     if not first_name:
#         frappe.throw(_("First name is required"))

#     try:
#         task = frappe.new_doc("Emp Details")
#         task.first_name = first_name
#         task.last_name = last_name
#         task.salary = salary
#         task.insert()
#         return {"message": f"Employee '{task.name}' created successfully"}
#     except Exception as e:
#         frappe.log_error(frappe.get_traceback(), "Create Emp Error")
#         frappe.throw(_("Something went wrong while creating employee."))


# #Get All instances:
# @frappe.whitelist(allow_guest=True)
# def get_all_tasks():
#     tasks = frappe.get_all(
#         "Emp Details",
#         fields = ["first_name","last_name","deaprtments","salary"],
#         order_by = "deaprtments"
#     )
#     return tasks


# #Update an Instances:
# @frappe.whitelist(allow_guest=False)
# def update(first_name=None):
#     if frappe.request.method != "POST":
#         frappe.throw("Only POST Method Allowed",frappe.MethodNotAllowed)

#     task = frappe.get_doc("Emp Details",first_name)
#     task.last_name = "Changed"
#     task.save()
#     return {"message":"Task Marked as Completed"}

#---------------------------------------------------------------------------------------------------------------------------------------------

#Basic API Call Using Button:
#----------------------------
#Calling an API using Inside the Doctype CLass Using (frm.call)
# API Inside the Class:
    @frappe.whitelist()
    def frm_inside_the_class(self):
        frappe.msgprint("frm_inside_the_class")
        return "frm_inside_class"


#Not Work:
#Calling an API using Inside the Doctype CLass Using (frm.call)
# API Outside the Class:

    # @frappe.whitelist()
    # def frm_outside_class():
    #     frappe.msgprint("frm_outside_class")
    #     return "frm_outside_class"

    # @frappe.whitelist()
    # def btn3(self):
    #     frappe.msgprint("Inside class frappe.call")
    #     return "Inside class frappe.call"

# @frappe.whitelist()
# def btn3():
#     frappe.msgprint("Inside class frappe.call")
#     return "Inside class frappe.call"