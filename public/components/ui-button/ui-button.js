class UIButton extends Polymer.Element {
    static get is() {
        return  'ui-button';
    }
    static get properties() {
        return {
            id: {type: String, value: ''},
            //caption: {type: String, value: ''},
            class: {type: String, value: '', reflectToAttribute: true},
            btnClass: {type: String, value: ''},
            //passedClass: {type: String, value: ''},
            primary: {type: Boolean, value: false},
            success: {type: Boolean, value: false},
            info: {type: Boolean, value: false},
            warning: {type: Boolean, value: false},
            danger: {type: Boolean, value: false},
            large: {type: Boolean, value: false},
            small: {type: Boolean, value: false},
            mini: {type: Boolean, value: false},
            size: {type: Number, value: 2},
            color: {type: Number, value: 5},
            tableRow: {type: String, value: ''}, //used if inside a table
            propertiesObj: {type: Object, value: function () { return {}; }
            }
        };
    }
    
    static get propertiesObj(){
        return {id:'', class:'', text:'', size:2, color:5,tableRow:''};
    }  

    ready() {
        super.ready();
        var propertiesObj = this.get('propertiesObj');
        if (!$.isEmptyObject(propertiesObj)) {
            if (Lib.JS.isDefined(propertiesObj.id)) {
                this.set('id', propertiesObj.id);
            }
            if (Lib.JS.isDefined(propertiesObj.size)) {
                this.set('large', false);
                this.set('small', false);
                this.set('mini', false);
                this.set(propertiesObj.size, true);
            }
            if (Lib.JS.isDefined(propertiesObj.color)) {
                this.set('primary', false);
                this.set('success', false);
                this.set('info', false);
                this.set('warning', false);
                this.set('danger', false);
                this.set(propertiesObj.color, true);
            }
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
        var btnClass = passedInClass + ' ' + btnClass;
        this.set('btnClass', btnClass);
    }

    handleClick(event) {
        var id = this.id;
        if (!Lib.JS.isDefined(id)) {
            id = '';
        }

        var strClass = this.class;
        if (!Lib.JS.isDefined(strClass)) {
            strClass = '';
        }

        var tableRow = this.get('tableRow');

        var textArea = $(this)[0].shadowRoot.querySelector('textarea');

        if (id === '' && strClass === '') {
            EventBroker.trigger(id + "_ui-button_changed", {UITextArea: this, textArea: textArea, event: event, tableRow: tableRow});
        } else {
            if (id !== '') {
                EventBroker.trigger(id + "_ui-button_changed", {UITextArea: this, textArea: textArea, event: event, tableRow: tableRow});
            }
            if (strClass !== '') {
                EventBroker.trigger(strClass + "_ui-button_changed", {UITextArea: this, textArea: textArea, event: event, tableRow: tableRow});
            }
        }
    }
}
customElements.define(UIButton.is, UIButton);

UIButton.sizes = {large:'large', small:'small', mini:'mini', default:''};
UIButton.colors = {primary:'primary', success:'success',info:'info',warning:'warning',danger:'danger', default:'', green:'primary', darkBlue:'success', lightBlue:'info', yellow:'warning', red:'danger', grey:''};