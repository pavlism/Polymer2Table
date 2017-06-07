class UICheckBox extends Polymer.Element {
    static get is() {
        return  'ui-check-box';
    }
    static get properties() {
        return {
            disabled: {type: Boolean, value: false},
            checked: {type: Boolean, value: false},
            divClass: {type: String, value: 'enabled'},
            id: {type: String, value: ''}
        }
    }

    attributeChangedCallback(name, old, value) {
        //Called when any of the element's attributes are changed, appended, removed, or replaced,
        super.attributeChangedCallback(name, old, value);
        console.log('my-element attributeChangedCallback');
        if(name === "disabled"){
            this.set('divClass', 'disabled');
        }
    }
    
    handleClick(event) {
        if(!this.get('disabled')){
            this.set('checked', !this.get('checked'));
        }
        var id = this.get('id');
        var isChecked = this.get('checked');
        
        EventBroker.trigger(this.get('id') + "_ui-check-box_changed", {isChecked: isChecked, checkbox: this, event: event});
      }
}
customElements.define(UICheckBox.is, UICheckBox);