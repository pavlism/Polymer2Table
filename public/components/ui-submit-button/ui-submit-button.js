class UISubmitButton extends Polymer.Element {
    static get is() {
        return  'ui-submit-button';
    }
    static get properties() {
        return {
            id: {type: String, value: ''},
            primary: {type: Boolean, value: false},
            success: {type: Boolean, value: false},
            info: {type: Boolean, value: false},
            warning: {type: Boolean, value: false},
            danger: {type: Boolean, value: false},
            large: {type: Boolean, value: false},
            small: {type: Boolean, value: false},
            mini: {type: Boolean, value: false}
        };
    }
    handleClick(event) {
        var isPass = true;
        

        $('ui-text-box').each(function () {
            var validation = $(this).prop('validation');
            if(validation ===-1){
                $(this).prop('validation', 2);
                validation = $(this).prop('validation');
            }
            
            if(validation===2){
                console.error('the validation should never be 2, the 2 is a flag to make is re-validate itself, if this error starts appearnig a timmer is going to be needed');
            }
            
            if(validation===1){
                isPass = isPass && true;
            }else{
                isPass = false;
            }
        })
        
        if(!isPass){
            console.log('validation failed');
            return false;
        }
        
        var id = this.id;
        if (Lib.JS.isDefined(id)) {
            EventBroker.trigger(id + "_UI-Submit-Button_passed", {button: this, event: event});
        }

        if (Lib.JS.isUndefined(id) && Lib.JS.isUndefined(passedInClass)) {
            EventBroker.trigger("_UI-Submit-Button_passed", {button: this, event: event});
        }
        
        
    }

}
customElements.define(UISubmitButton.is, UISubmitButton);