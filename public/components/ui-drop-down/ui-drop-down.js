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
        var id = this.get('id');

        if (Lib.JS.isDefined(partValue) && currentValue !== partValue) {
            this.set('value', currentValue);
            EventBroker.trigger(id + "_UI-Drop-Down_changed", {textBox: this, event: event, value: currentValue});
        } else if (Lib.JS.isUndefined(partValue)) {
            this.set('value', currentValue);
        }

        EventBroker.trigger(id + "_UI-Drop-Down_clicked", {textBox: this, event: event, value: currentValue});
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