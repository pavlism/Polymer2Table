class UICopyButton extends Polymer.Element {
    static get is() {
        return  'ui-copy-button';
    }
    static get properties() {
        return {
            id: {type: String, value: ''},
            dataSelector: {type: String, value: ''},
            dataCall: {type: String, value: ''},
            alert: {type: Boolean, value: false},
            alertTitle: {type: String, value: 'Table Copied to Clipboard'},
            alertMessage: {type: String, value: ''}
        };
    }

    handleClick(event) {
        debugger;
        var thisObj = this;
        var dataCall = this.get('dataCall');
        var dataSelector = this.get('dataSelector');
        var textObj = {};

        if (dataCall === '' && dataSelector === '') {
            console.log('UICopyButton Error: both the data-call and data-selector atrributes are empty, one needs to be used to point the Copy button to the data');
        } else if (dataCall !== '') {
            textObj.text = function () {
                var tableData = DataBroker.trigger("table_CurrentData");
                var text = '';

                for (var rowCounter = 0; rowCounter < tableData.length; rowCounter++) {
                    var row = tableData[rowCounter];
                    for (var colCounter = 0; colCounter < row.length; colCounter++) {
                        if (colCounter === row.length - 1) {
                            text = text + row[colCounter].toString();
                        } else {
                            text = text + row[colCounter].toString() + '\t';
                        }
                    }
                    text = text + '\r\n';
                }
                return text;
            };
        } else {
            textObj.text = function () {
                var text = '';
                var extraText = '';
                var elmText = [];
                $(dataSelector).find('tr').each(function (index, element) {
                    $(element).find('th').each(function (index, element) {
                        text = text + $(element).text() + '\t';
                    });
                    $(element).find('td').each(function (index, element) {
                        if ($(element).children().length === 0) {
                            text = text + $(element).text() + '\t';
                        } else {
                            elmText = $(element).text().replace(/ /g, '').split('\n');
                            text = text + elmText[0] + '\t';

                            for (var elmCounter = 1; elmCounter < elmText.length; elmCounter++) {
                                if (elmText[elmCounter] !== '') {
                                    extraText = extraText + elmText[elmCounter] + '\t';
                                }
                            }
                        }
                    });
                    //get rid of last tab
                    text = text.substring(0, text.length - 1);
                    text = text + '\t' + extraText;
                    extraText = '';
                    text = text + '\r\n';
                });
                return text;
            }
        }
        var clipboard = new Clipboard(this, textObj);

        clipboard.on('success', function (e) {
            //set the alert
            //Must set to false, becasue if button is clicked again the alert value is still true so it won't update the page, which won't trigger the change in the alert.
            thisObj.set('alert', false);
            thisObj.set('alert', true);
        });

        clipboard.on('error', function (e) {
            thisObj.set('alertTitle', 'Copy Failed');
            thisObj.set('alertMessage', 'Check the console to see the error');
            console.log(e);
            thisObj.set('alert', false);
            thisObj.set('alert', true);
        });
    }
}
customElements.define(UICopyButton.is, UICopyButton);