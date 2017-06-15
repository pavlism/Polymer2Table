Template.MRPTextBox.onRendered(function () {
    EventBroker.listen("mrp-text-box_clicked", function (listenerArgs, triggerArgs) {
        console.log('a mrp-text-box box was clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("samplemrp-text-box_clicked", function (listenerArgs, triggerArgs) {
        console.log('a mrp-text-box box was clicked with the id = sample');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("mrp-text-box_changed", function (listenerArgs, triggerArgs) {
        console.log('a mrp-text-box box was changed');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("samplemrp-text-box_changed", function (listenerArgs, triggerArgs) {
        console.log('a mrp-text-box box was changed with the id = sample');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("mrp-text-box_keyup", function (listenerArgs, triggerArgs) {
        console.log('a mrp-text-box box was changed');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("samplemrp-text-box_keyup", function (listenerArgs, triggerArgs) {
        console.log('a mrp-text-box box was changed with the id = sample');
        console.log(triggerArgs);
    });
});