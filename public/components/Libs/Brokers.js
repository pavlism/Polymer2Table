//Version 1.0

//Brokers are a set ob golbal static objects that can broker information between different objects.

if (Lib.JS.isUndefined(Broker)) {
    var Broker = {};

    var creation = function () {

        this.connections = [];

        var log = new Logger('Broker.js', CLL.debug);

        this.addListener = function (connection, listenerArgs, callback) {
            if (Lib.JS.isUndefined(EventBroker.connections[connection])) {
                EventBroker.connections[connection] = [];
            }
            var eventObj = {connection: connection, listenerArgs: listenerArgs, callback: callback};
            EventBroker.connections[connection].push(eventObj);
            return eventObj;
        };
        /**
         * This will trigger a custom event and can be listened to from anywhere else in the program
         * 
         * @param events {string} event name (must be unique string) to trigger
         * @param triggerArgs {object} The object the will get passed to the listeners callback function as triggerArgs
         */
        //Used to remove a listeneter, used if you only want to listen to an event once
        this.remove = function (listener) {
            Lib.JS.remove(EventBroker.connection[listener.connection], listener);
        };
    };
    creation.call(Broker);
}


//The event broker is public static moderator object.  It allows any object to trigger and/or listen to custome events.
//Events must have unique string names.
if (Lib.JS.isUndefined(EventBroker)) {
    var EventBroker = Object.create(Broker);

    var creation = function () {

        var log = new Logger('EventBroker.js', CLL.debug);

        /**
         * This will setup a function to fire when the event(s) is triggered
         * 
         * Example:
         * EventBroker.listen('event.name', {data:1}, function (listenerArgs, triggerArgs) {
         *    do stuff;
         * });
         * 
         * @param events {string/string array} event name (must be unique string) or array of unique strings
         * @param listenerArgs {object} The object the will get passed to the callback as  listenerArgs
         * @param callback {function} Function to call when event is triggered.
         */
        this.listen = function (events, listenerArgs, callback) {
            if (!Lib.JS.isString(events) && !$.isArray(events)) {
                log.error("The first paramater (events) must be a string or array of strings that represents the event to listen too");
            }

            if (Lib.JS.isUndefined(listenerArgs)) {
                log.error("The second paramater must be an object (listenerArgs) or the call back function")
            }

            if (!Lib.JS.isUndefined(callback) && !Lib.JS.isFunction(callback)) {
                log.error("The third paramater must be an function");
            }

            if (Lib.JS.isFunction(listenerArgs)) {
                callback = listenerArgs;
                listenerArgs = {};
            }

            if ($.isArray(events)) {
                var listeners = [];
                var eventCounter = 0;
                for (eventCounter = 0; eventCounter < events.length; eventCounter++) {
                    listeners.push(this.addListener(events[eventCounter], listenerArgs, callback));
                }
            } else {
                return this.addListener(events, listenerArgs, callback);
            }
        };

        this.trigger = function (event, triggerArgs) {
            triggerArgs = Lib.JS.setDefaultParameter(triggerArgs, {});

            if (Lib.JS.isUndefined(EventBroker.connections[event]) || EventBroker.connections[event].length === 0) {
                log.debug('the event ' + event + ' does not have any listeners');
                return false;
            }

            var listenerCounter = 0;

            for (listenerCounter = 0; listenerCounter < EventBroker.connections[event].length; listenerCounter++) {
                var listener = EventBroker.connections[event][listenerCounter];
                listener.callback(listener.listenerArgs, triggerArgs);
            }
        };
        //Used to remove a listeneter, used if you only want to listen to an event once
    };
    creation.call(EventBroker);
}

//The data broker is public static moderator object.  It allows any object to trigger and/or listen to custome data calls.
//DataCalls must have unique string names.
if (Lib.JS.isUndefined(DataBroker)) {
    var DataBroker = Object.create(Broker);

    var creation = function () {

        var log = new Logger('DataBroker.js', CLL.debug);

        /**
         * This will setup a function to fire when the dataCall(s) is triggered
         * 
         * Example:
         * DataBroker.listen('dataCall.name', {data:1}, function (listenerArgs, triggerArgs) {
         *    do stuff;
         * });
         * 
         * @param dataCall {string/string array} dataCall name (must be unique string) or array of unique strings
         * @param listenerArgs {object} The object the will get passed to the callback as  listenerArgs
         * @param callback {function} Function to call when dataCall is triggered.
         */
        this.listen = function (dataCall, listenerArgs, callback) {

            if (!Lib.JS.isString(dataCall) && !$.isArray(dataCall)) {
                log.error("The first paramater (dataCalls) must be a string or array of strings that represents the dataCall to listen too");
            }

            if (Lib.JS.isUndefined(listenerArgs)) {
                log.error("The second paramater must be an object (listenerArgs) or the call back function")
            }

            if (!Lib.JS.isUndefined(callback) && !Lib.JS.isFunction(callback)) {
                log.error("The third paramater must be an function");
            }

            if (Lib.JS.isFunction(listenerArgs)) {
                callback = listenerArgs;
                listenerArgs = {};
            }

            if ($.isArray(dataCall)) {
                log.error("dataCall listeners must be unique");
            } else {
                return this.addListener(dataCall, listenerArgs, callback);
            }
        };

        /**
         * This will trigger a custom dataCall and can be listened to from anywhere else in the program
         * 
         * @param dataCalls {string} dataCall name (must be unique string) to trigger
         * @param triggerArgs {object} The object the will get passed to the listeners callback function as triggerArgs
         */
        this.trigger = function (dataCall, triggerArgs) {

            triggerArgs = Lib.JS.setDefaultParameter(triggerArgs, {});

            if (Lib.JS.isUndefined(DataBroker.connections[dataCall]) || DataBroker.connections[dataCall].length === 0) {
                log.debug('the dataCall ' + dataCall + ' does not have any listeners');
                return false;
            }

            var listener = DataBroker.connections[dataCall][0];
            return listener.callback(listener.listenerArgs, triggerArgs);
        };
    };
    creation.call(DataBroker);
}