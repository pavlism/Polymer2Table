class UIButton extends Polymer.Element {
    static get is() {
        return  'ui-button';
    }
    static get properties() {
        return {
            id: {type: String, value: ''},
            caption: {type: String, value: ''},
            class: {type: String, value: ''},
            btnClass: {type: String, value: ''},
            passedClass: {type: String, value: ''},
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
        var id = this.id;
        var passedInClass = this.get('passedInClass');
        if (Lib.JS.isDefined(id)) {
            EventBroker.trigger(id + "_ui-button_clicked", {button: this, event: event});
        }       
            /*
        if (Lib.JS.isDefined(passedInClass)) {
            EventBroker.trigger(passedInClass + "_UI-Button_clicked", {button: this, event: event});
        }

        if (Lib.JS.isUndefined(id) && Lib.JS.isUndefined(passedInClass)) {
            EventBroker.trigger(passedInClass + "_UI-Button_clicked", {button: this, event: event});
        }*/
    }

    attributeChangedCallback(name, old, value) {
        super.attributeChangedCallback(name, old, value);
        if (Lib.JS.isDefined($(this)["0"].childNodes[3])) {
            var text = $(this)["0"].childNodes[3].data;
            this.set('caption', text);
            $(this)["0"].childNodes[3].remove();
        }

        var btnClass = '';
        //setup class
        if (this.get('primary')) {
            btnClass = 'primary';
        } else if (this.get('success')) {
            btnClass = 'success';
        } else if (this.get('info')) {
            btnClass = 'info';
        } else if (this.get('warning')) {
            btnClass = 'warning';
        } else if (this.get('danger')) {
            btnClass = 'danger';
        }

        if (this.get('large')) {
            btnClass = btnClass + ' large';
        } else if (this.get('small')) {
            btnClass = btnClass + ' small';
        } else if (this.get('mini')) {
            btnClass = btnClass + ' mini';
        }
        var passedInClass = this.get('class');
        this.set('passedInClass', passedInClass);
        var btnClass = passedInClass + ' ' + btnClass;
        this.set('btnClass', btnClass);
    }
}
customElements.define(UIButton.is, UIButton);