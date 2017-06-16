//V1.2

//A library used to make Polyer coding easier

if (typeof PolymerLib === 'undefined') {
    var PolymerLib = {};

    if (typeof Lib === 'undefined') {
        Lib = {};
    }

    var creation = function (Lib) {
        var log = new Logger('Lib.Polymer.js', CLL.error);


        Lib.Polymer = {};

        Lib.Polymer.triggerEventsWithTable = function (element, triggerObj, eventName) {
            log.trace("triggerEvent");
            var id = element.id;
            if (!Lib.JS.isDefined(id)) {
                id = '';
            }

            var strClass = element.class;
            if (!Lib.JS.isDefined(strClass)) {
                strClass = '';
            }

            var tableRow = element.get('tableRow');

            if (tableRow !== '') {
                triggerObj.tableRow = tableRow;
            }

            Lib.Polymer.triggerEvents(id, strClass, triggerObj, eventName);
        };
        Lib.Polymer.triggerEventsWithoutTable = function (element, triggerObj, eventName) {
            log.trace("triggerEvent");
            var id = element.id;
            if (!Lib.JS.isDefined(id)) {
                id = '';
            }

            var strClass = element.class;
            if (!Lib.JS.isDefined(strClass)) {
                strClass = '';
            }

            Lib.Polymer.triggerEvents(id, strClass, triggerObj, eventName);
        };
        Lib.Polymer.triggerEvents = function (id, strClass, triggerObj, eventName) {
            log.trace("triggerEvent");

            if (id === '' && strClass === '') {
                EventBroker.trigger(eventName, triggerObj);
            } else {
                if (id !== '') {
                    EventBroker.trigger(id + "_" + eventName, triggerObj);
                }
                if (strClass !== '') {
                    EventBroker.trigger(strClass + "_" + eventName, triggerObj);
                }
            }
        };
        Lib.Polymer.elementToString = function (element, useJSON) {
            log.trace("triggerEvent");
            var strCell = '';
            if ($(element).children(":not('dom-if')").length === 0) {
                //must be simple text
                strCell = $(element).text().trim();
            } else if ($(element).children("span.object-toggle").length) {
                var strCell = $(element).text().trim().cleanText();
                if (useJSON) {
                    var obj = {};
                    var lines = strCell.split('\n');
                    obj[lines[0]] = {};
                    for (var lineConter = 0; lineConter < lines.length; lineConter++) {
                        var parts = lines[lineConter].split(':');
                        obj[lines[0]][parts[0]] = parts[1];
                    }
                    strCell = JSON.stringify(obj);
                    strCell = Lib.JS.replace(strCell, ",", " ");
                }
            } else {
                $(element).children(":not('dom-if')").each(function (index, element) {
                    if (Lib.JS.isDefined(element.val)) {
                        strCell = strCell + element.val().trim();
                    } else if ($(element).is('a')) {
                        strCell = strCell + $(element).attr('href');
                    } else {
                        strCell = strCell + $(element).val().trim();
                    }

                });
            }
            return strCell;
        };
    };

    creation.call(PolymerLib, Lib);
}