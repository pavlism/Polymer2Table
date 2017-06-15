//V1.1

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
    };
    creation.call(PolymerLib, Lib);
}