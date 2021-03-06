$.jsoneditor.AbstractTheme = Class.extend({
  getContainer: function() {
    return $("<div>");
  },
  getFloatRightLinkHolder: function() {
    return $("<div>").css({
      float: 'right',
      marginLeft: '10px'
    });
  },
  getLink: function(text) {
    return $("<a href='#'>").text(text);
  },
  disableHeader: function(header) {
    header.css({
      color: "#ccc"
    });
  },
  disableLabel: function(label) {
    label.css({
      color: "#ccc"
    });
  },
  enableHeader: function(header) {
    header.css({
      color: ''
    });
  },
  enableLabel: function(label) {
    label.css({
      color: ''
    });
  },
  getFormInputLabel: function(text) {
    return $("<label>").text(text);
  },
  getCheckboxLabel: function(text) {
    return this.getFormInputLabel(text);
  },
  getHeader: function(text) {
    return $("<h3>").append(text);
  },
  getCheckbox: function() {
    return this.getFormInputField('checkbox');
  },
  getSelectInput: function(options) {
    var select = $("<select>");
    if(options) this.setSelectOptions(select, options);
    return select;
  },
  setSelectOptions: function(select, options) {
    select.empty();
    $.each(options, function(i,val) {
      select.append($("<option>").attr('value',val).text(val));
    });
  },
  getTextareaInput: function() {
    return $("<textarea>").css({
      width: '100%',
      height: 300,
      boxSizing: 'border-box'
    });
  },
  getRangeInput: function(min,max,step) {
    return $("<input type='range'>")
      .attr('min',min)
      .attr('max',max)
      .attr('step',step);
  },
  getFormInputField: function(type) {
    return $("<input type='"+type+"'>");
  },
  afterInputReady: function(input) {
    
  },
  getFormControl: function(label, input, description) {
    return $("<div>").addClass('form-control')
      .append(label)
      .append(input)
      .append(description)
  },
  getIndentedPanel: function() {
    return $("<div>").css({
      paddingLeft: 10,
      marginLeft: 10,
      borderLeft: '1px solid #ccc'
    });
  },
  getChildEditorHolder: function() {
    return $("<div>");
  },
  getDescription: function(text) {
    return $("<p>").text(text);
  },
  getCheckboxDescription: function(text) {
    return this.getDescription(text);
  },
  getFormInputDescription: function(text) {
    return this.getDescription(text);
  },
  getHeaderButtonHolder: function() {
    return this.getButtonHolder();
  },
  getButtonHolder: function() {
    return $("<div>");
  },
  getButton: function(text, icon, title) {    
    var button = $("<button>").text(text);
    if(icon) button.prepend(' ').prepend(icon);
    if(title) button.attr('title',title);
    
    return button;
  },
  setButtonText: function(button, text, icon, title) {
    button.text(text);
    if(icon) button.prepend(' ').prepend(icon);
    if(title) button.attr('title',title);
  },
  getTable: function() {
    return $("<table></table>");
  },
  getTableRow: function() {
    return $("<tr></tr>");
  },
  getTableHead: function() {
    return $("<thead></thead>");
  },
  getTableBody: function() {
    return $("<tbody></tbody>");
  },
  getTableHeaderCell: function() {
    return $("<th></th>");
  },
  getTableCell: function() {
    return $("<td></td>");
  },
  getErrorMessage: function(text) {
    return $("<p style='color: red;'></p>").text(text);
  },
  addInputError: function(input, text) {
  },
  removeInputError: function(input) {
  },
  addTableRowError: function(row) {
  },
  removeTableRowError: function(row) {
  },
  getTabHolder: function() {
    return $("<div><div style='float: left; width: 130px;' class='tabs'></div><div class='content' style='margin-left: 130px;'></div></div>").append($("<div>").css('clear','both'));
  },
  getTab: function(text) {
    return $("<div></div>")
      .append(text)
      .css({
        border: '1px solid #ccc',
        borderWidth: '1px 0 1px 1px',
        textAlign: 'center',
        lineHeight: '30px',
        borderRadius: 5,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        fontWeight: 'bold',
        cursor: 'pointer'
      });
  },
  getTabContentHolder: function(tab_holder) {
    return $("> .content",tab_holder)
  },
  getTabControls: function(holder) {
    return $("> .controls",holder);
  },
  getTabContent: function() {
    return this.getIndentedPanel();
  },
  markTabActive: function(tab) {
    tab.css({
      opacity: 1,
      background: 'white'
    });
  },
  markTabInactive: function(tab) {
    tab.css({
      opacity:.5,
      background: ''
    });
  },
  addTab: function(holder, tab) {
    $("> .tabs",holder).append(tab);
  },
  addTabControls: function(tab_holder, controls) {
    tab_holder.append(controls);
  }
});
