Template.UITextBox.onRendered(function () {
    EventBroker.listen("ui-text-box_clicked", function (listenerArgs, triggerArgs) {
        console.log('a ui-text-box box was clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("sampleui-text-box_clicked", function (listenerArgs, triggerArgs) {
        console.log('a ui-text-box box was clicked with the id = sample');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("ui-text-box_changed", function (listenerArgs, triggerArgs) {
        console.log('a ui-text-box box was changed');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("sampleui-text-box_changed", function (listenerArgs, triggerArgs) {
        console.log('a ui-text-box box was changed with the id = sample');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("ui-text-box_keyup", function (listenerArgs, triggerArgs) {
        console.log('a ui-text-box box was changed');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("sampleui-text-box_keyup", function (listenerArgs, triggerArgs) {
        console.log('a ui-text-box box was changed with the id = sample');
        console.log(triggerArgs);
    });
});