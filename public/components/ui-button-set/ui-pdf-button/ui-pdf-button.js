class UIPDFButton extends Polymer.Element {
    static get is() {
        return  'ui-pdf-button';
    }
    static get properties() {
        return {
            id: {type: String, value: ''},
            dataSelector: {type: String, value: ''},
            dataCall: {type: String, value: ''},
            fileName: {type: String, value: 'table'},
            pageOrientation: {type: String, value: 'portrait'},
            pageSize: {type: String, value: 'A5'},
            styles: {type: Object, observer: 'setMaxLength', value: function () {
                    return {header: {fontSize: 14, bold: true, fillColor: '#294152', color: '#FFFFFF'}, even: {fontSize: 12, fillColor: '#f7f3f7'}};
                }}
        };
    }

    handleClick(event) {
        debugger;
        var dataCall = this.get('dataCall');
        var dataSelector = this.get('dataSelector');

        var widths = [];
        var data = [];
        var isRowEven = false;
        var extraText = '';
        var elmText = [];

        if (dataCall === '' && dataSelector === '') {
            console.log('UIPDFButton Error: both the data-call and data-selector atrributes are empty, one needs to be used to point the PDF button to the data');
        } else if (dataCall !== '') {
            var dataSelector = DataBroker.trigger(dataCall);
        }

        $(dataSelector).find('tr').each(function (index, element) {
            var row = [];
            $(element).find('th').each(function (index, element) {
                widths.push('*');
                row.push({text: $(element).text(), style: 'header'});
            });
            $(element).find('td').each(function (index, element) {
                if ($(element).children().length === 0) {
                    if (isRowEven) {
                        row.push({text: $(element).text(), style: 'even'});
                    } else {
                        row.push($(element).text());
                    }
                } else {
                    elmText = $(element).text().replace(/ /g, '').split('\n');
                    extraText = '';
                    for (var elmCounter = 0; elmCounter < elmText.length; elmCounter++) {
                        if (elmText[elmCounter] !== '') {
                            extraText = extraText + elmText[elmCounter] + '\n';
                        }
                    }
                    if (isRowEven) {
                        row.push({text: extraText, style: 'even'});
                    } else {
                        row.push(extraText);
                    }
                }
            });
            isRowEven = !isRowEven;
            data.push(row);
        });
        var table = {headerRows: 1, widths: widths, body: data};
        var docDefinition = {content: [{table: table}], styles: this.get('styles'), pageOrientation: this.get('pageOrientation'), pageSize:this.get('pageSize')};

        // open the PDF in a new window
        pdfMake.createPdf(docDefinition).open();
        // download the PDF
        pdfMake.createPdf(docDefinition).download('optionalName.pdf');

    }
}
customElements.define(UIPDFButton.is, UIPDFButton);