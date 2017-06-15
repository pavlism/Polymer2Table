class UIExcelButton extends Polymer.Element {
    static get is() {
        return  'mrp-excel-button';
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
        var dataCall = this.get('dataCall');
        var dataSelector = this.get('dataSelector');
        var tableData = [];

        if (dataCall === '' && dataSelector === '') {
            console.log('UIExcelButton Error: both the data-call and data-selector atrributes are empty, one needs to be used to point the CVS button to the data');
        } else if (dataCall !== '') {
            var tableData = DataBroker.trigger(this.get('dataCall'));
        } else {
            var extraText = [];
            var elmText = [];

            $(dataSelector).find('tr').each(function (index, element) {
                var row = [];
                $(element).find('th').each(function (index, element) {
                    row.push($(element).text());
                });
                $(element).find('td').each(function (index, element) {
                    if ($(element).children().length === 0) {
                        row.push($(element).text());
                    } else {
                        elmText = $(element).text().replace(/ /g, '').split('\n');
                        row.push(elmText[0]);
                        for (var elmCounter = 1; elmCounter < elmText.length; elmCounter++) {
                            if (elmText[elmCounter] !== '') {
                                extraText.push(elmText[elmCounter]);
                            }
                        }
                    }
                });
                row = row.concat(extraText);
                tableData.push(row);
                extraText.length = 0;
            });
        }

        /*var encodedUri = encodeURI(excelContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", this.get('fileName') + '.excel');
        document.body.appendChild(link); // Required for FF
        link.click(); // This will download the data file named "my_data.excel".
        $(link).remove();*/
        
        var ep = new ExcelPlus();
        ep.createFile("Book1").write({"content": tableData}).saveAs(this.get('fileName') + ".xlsx");
    }
}
customElements.define(UIExcelButton.is, UIExcelButton);