class UITextArea extends Polymer.Element {
    static get is() {
        return  'ui-text-area';
    }
    static get properties() {
        return {
            id: {type: String, value: ''},
            rows: {type: String, value: ''},
            cols: {type: String, value: ''},
            text: {type: String, value: ''},
            value: {type: String, value: '', observer: 'changed'},
            regex: {type: String, value: ''},
            placeholder: {type: String, value: ''},
            validation: {type: Number, value: -1, reflectToAttribute: true, observer: 'validationReset'},
            errorMsg: {type: String, value: ''},
            required: {type:Boolean, value:false}
        };
    }
    isInvalid(validation) {
        if (validation === 0) {
            return true;
        } else {
            return false;
        }
    }
    handleClick(event) {
        var id = this.id;
        if (!Lib.JS.isDefined(id)) {
            id = '';
        }
        EventBroker.trigger(id + "_UI-Text-Area_clicked", {textArea: this, event: event});
    }
    changed(event, a, b, c) {
        if(event===''){
            return false;
        }
        
        if (event.type === "blur") {
            var validation = this.checkValidation(this.get('validation'), true);
        }
        var id = this.id;
        if (!Lib.JS.isDefined(id)) {
            id = '';
        }
        EventBroker.trigger(id + "_UI-Text-Area_changed", {textArea: this, validation:validation, event: event});
        
    }
    validationReset(validation){
        if(validation ===2){
            this.checkValidation(validation, true);
        }
    }
    checkValidation(validation, isNotStart = false) {
        if (isNotStart || validation !== -1) {
            if (this.get('regex') !== '') {
                var text = $(this).val();
                var res = text.match(this.get('regex'));
                if (res === null) {
                    //validation failed
                    //display error message
                    this.set('validation', 0);
                } else {
                    this.set('validation', 1);
                }
            } else {
                this.set('validation', 1);
            }
        }
        if(!this.get('required') && $(this).val()===''){
            this.set('validation', 1);
        }
        return this.get('validation');
    }
}
customElements.define(UITextArea.is, UITextArea);