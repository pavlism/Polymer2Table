class UIAlert extends Polymer.Element {
    static get is() {
        return  'ui-alert';
    }
    static get properties() {
        return {
            title: {type: String, value: 'title'},
            message: {type: String, value: 'message'},
            timer: {type: Number, value: -1},
            toggle: {type: Number, observer: 'handleToggle'},
            onEvent: {type: String, observer: 'setupOnEvent'},
            offEvent: {type: String, observer: 'setupOffEvent'},
            timeOut: {type: Number, value: -1},
            id: {type: String, value: ''}
        };
    }
    setupOnEvent(eventName) {
        if (Lib.JS.isDefined(eventName) && eventName !== '') {
            EventBroker.listen(eventName, this, function (listenerArgs, triggerArgs) {
                listenerArgs.set('toggle', 1);
            });
        }
    }
    setupOffEvent(eventName) {
        if (Lib.JS.isDefined(eventName) && eventName !== '') {
            EventBroker.listen(eventName, this, function (listenerArgs, triggerArgs) {
                listenerArgs.set('toggle', 0);
            });
        }
    }

    connectedCallback() {
        //Called when the element is added to a document.
        super.connectedCallback();
        if (this.get('toggle') !== 1) {
            $(this).hide();
        }
    }
    handleToggle(toggle) {       
        //turn off the timer
        if (this.get('timeout') !== -1) {
            clearTimeout(this.get('timeout'));
            this.set('timeout', -1);
        }
        
        if (toggle) {
            var thisObj = this;
            $(this).fadeIn();
            var timer = this.get('timer') * 1000;
            if (timer > 1) {
                var timeout = setTimeout(function () {
                    thisObj.set('toggle', 0);
                    EventBroker.trigger("ui-alert_closed", {button: thisObj});
                }, timer);
                this.set('timeout', timeout);
            }
        } else {
            //$(this).fadeOut();
            $(this).hide();
        }
    }
    handleClick(event) {
        this.set('toggle', 0);
        var id = this.get('id');

        EventBroker.trigger(id + "_ui-alert_closed", {alert: this, event: event});
    }
}
customElements.define(UIAlert.is, UIAlert);