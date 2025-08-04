frappe.pages['birth-date-demo'] = {
  on_page_load(wrapper) {
    const page = frappe.ui.make_app_page({
      parent: wrapper,
      title: 'Birth Date',
      single_column: true
    });

    // Load custom HTML
    $(frappe.render_template('birth_date_demo')).appendTo(page.body);

    const control = frappe.ui.form.make_control({
      parent: $('#birth-date-control'),
      df: {
        label: 'Birth Date',
        fieldname: 'birth_date',
        fieldtype: 'Date'
      },
      render_input: true
    });

    control.make();

    control.on_change = () => {
      $('#selected-date-output').text(`📅 Birth Date: ${control.get_value()}`);
    };
  }
};