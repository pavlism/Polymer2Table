Template.UICheckBox.onRendered(function () {
    EventBroker.listen("_ui-check-box_changed", function (listenerArgs, triggerArgs) {
        console.log('a ui-check-box box was changed');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("sample_ui-check-box_changed", function (listenerArgs, triggerArgs) {
        console.log('a ui-check-box box was clicked with the id = sample');
        console.log(triggerArgs);
    });
});