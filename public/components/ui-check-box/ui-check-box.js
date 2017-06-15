class UICheckBox extends Polymer.Element {
    static get is() {
        return  'ui-check-box';
    }
    static get properties() {
        return {
            disabled: {type: Boolean, value: false},
            checked: {type: Boolean, value: false},
            id: {type: String, value: ''},
            tableRow: {type: String, value: ''}, //used if inside a table
            class: {type: String, value: 'enabled', reflectToAttribute: true}
        }
    }

    attributeChangedCallback(name, old, value) {
        //Called when any of the element's attributes are changed, appended, removed, or replaced,
        super.attributeChangedCallback(name, old, value);
        if(name === "disabled"){
            this.set('class', 'disabled');
        }
    }
    
    handleClick(event) {
        if(this.get('disabled')){
            return false;
        }
        
        this.set('checked', !this.get('checked'));
        
        var id = this.id;
        if (!Lib.JS.isDefined(id)) {
            id = '';
        }

        var strClass = this.class;
        if (!Lib.JS.isDefined(strClass)) {
            strClass = '';
        }else{
            strClass = Lib.JS.replace(strClass, 'disabled', '');
            strClass = Lib.JS.replace(strClass, 'enabled', '');
        }

        var tableRow = this.get('tableRow');
        var isChecked = this.get('checked');
        
        var triggerObj = {isChecked: isChecked, checkbox: this, event: event};
        if(tableRow !==''){
            triggerObj.tableRow = tableRow;
        }

        if (id === '' && strClass === '') {
            EventBroker.trigger(id + "_ui-check-box_changed", triggerObj);
        } else {
            if (id !== '') {
                EventBroker.trigger(id + "_ui-check-box_changed", triggerObj);
            }
            if (strClass !== '') {
                EventBroker.trigger(strClass + "_ui-check-box_changed", triggerObj);
            }
        }
      }
}
customElements.define(UICheckBox.is, UICheckBox);