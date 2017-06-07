class UIPrintButton extends Polymer.Element {
    static get is() {
        return  'ui-print-button';
    }
    static get properties() {
        return {
            id: {type: String, value: ''},
            dataSelector: {type: String, value: ''},
            dataCall: {type: String, value: ''},
            fileName: {type: String, value: 'table'}
        };
    }

    handleClick(event) {
        debugger;
        var dataCall = this.get('dataCall');
        var dataSelector = this.get('dataSelector');
        var PHE = PrintHtmlElement();

        if (dataCall === '' && dataSelector === '') {
            console.log('UIPrintButton Error: both the data-call and data-selector atrributes are empty, one needs to be used to point the Print button to the data');
        } else if (dataCall !== '') {
            var tableElement = DataBroker.trigger(dataCall);
            PHE.printElement($(tableElement)[0]);
        } else {
            PHE.printElement($(dataSelector)[0]);
        }
    }
}
customElements.define(UIPrintButton.is, UIPrintButton);