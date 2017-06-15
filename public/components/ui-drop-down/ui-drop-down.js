class UIDropDown extends Polymer.Element {
    static get is() {
        return  'ui-drop-down';
    }
    static get properties() {
        return {
            id: {type: String, value: ''},
            list: {type: Array, value: function () {
                    return [];
                }},
            value: {type: Number, notify: true}
        };
    }
    handleClick(event) {
        var currentValue = $(event.target).val();
        var partValue = this.get('value');

        var id = this.id;
        if (!Lib.JS.isDefined(id)) {
            id = '';
        }

        var strClass = this.class;
        if (!Lib.JS.isDefined(strClass)) {
            strClass = '';
        }
        var triggerObj = {textBox: this, event: event, value: currentValue};

        if (Lib.JS.isDefined(partValue) && currentValue !== partValue) {
            this.set('value', currentValue);
            
            if (id === '' && strClass === '') {
                EventBroker.trigger("ui-drop-down_changed", triggerObj);
            } else {
                if (id !== '') {
                    EventBroker.trigger(id + "_ui-drop-down_changed", triggerObj);
                }
                if (strClass !== '') {
                    EventBroker.trigger(strClass + "_ui-drop-down_changed", triggerObj);
                }
            }
        } else if (Lib.JS.isUndefined(partValue)) {
            this.set('value', currentValue);
        }
    }
    isSelected(itemValue) {
        var value = this.get('value');
        if (value === itemValue) {
            return true;
        } else {
            return false;
        }
    }
}
customElements.define(UIDropDown.is, UIDropDown);