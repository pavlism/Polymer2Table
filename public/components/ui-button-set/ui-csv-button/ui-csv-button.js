class UICSVButton extends Polymer.Element {
    static get is() {
        return  'ui-csv-button';
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
        var csvContent = "data:text/csv;charset=utf-8,";

        if (dataCall === '' && dataSelector === '') {
            console.log('UICSVButton Error: both the data-call and data-selector atrributes are empty, one needs to be used to point the CVS button to the data');
        } else if (dataCall !== '') {
            var tableData = DataBroker.trigger(dataCall);
            
            for (var rowCounter = 0; rowCounter < tableData.length; rowCounter++) {   
                var row = tableData[rowCounter];
                for (var colCounter = 0; colCounter < row.length; colCounter++) {
                    if(colCounter === row.length - 1){
                        csvContent = csvContent + row[colCounter].toString();
                    }else{
                        csvContent = csvContent + row[colCounter].toString() + ',';
                    }
                }
                csvContent = csvContent + '\r\n';
            }

        } else {
            var extraText = '';
            var elmText = [];

            $(dataSelector).find('tr').each(function (index, element) {
                $(element).find('th').each(function (index, element) {
                    csvContent = csvContent + $(element).text() + ',';
                });
                $(element).find('td').each(function (index, element) {
                    if ($(element).children().length === 0) {
                        csvContent = csvContent + $(element).text() + ',';
                    } else {
                        elmText = $(element).text().replace(/ /g, '').split('\n');
                        csvContent = csvContent + elmText[0] + ',';
                        extraText = '';
                        for (var elmCounter = 1; elmCounter < elmText.length; elmCounter++) {
                            if (elmText[elmCounter] !== '') {
                                extraText = extraText + elmText[elmCounter] + ',';
                            }
                        }
                    }
                });
                //get rid of last comma
                csvContent = csvContent.substring(0, csvContent.length - 1);
                csvContent = csvContent + ',' + extraText;
                extraText = '';
                csvContent = csvContent + '\r\n';
            });
        }

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", this.get('fileName') + '.csv');
        document.body.appendChild(link); // Required for FF
        link.click(); // This will download the data file named "my_data.csv".
        $(link).remove();
    }
}
customElements.define(UICSVButton.is, UICSVButton);