Template.UITextBox.onRendered(function () {
    EventBroker.listen("_UI-Text-Box_clicked", function (listenerArgs, triggerArgs) {
        console.log('a UI-Text-Box box was clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("sample_UI-Text-Box_clicked", function (listenerArgs, triggerArgs) {
        console.log('a UI-Text-Box box was clicked with the id = sample');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("_UI-Text-Box_changed", function (listenerArgs, triggerArgs) {
        console.log('a UI-Text-Box box was changed');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("sample_UI-Text-Box_changed", function (listenerArgs, triggerArgs) {
        console.log('a UI-Text-Box box was changed with the id = sample');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("_UI-Text-Box_keyup", function (listenerArgs, triggerArgs) {
        console.log('a UI-Text-Box box was changed');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("sample_UI-Text-Box_keyup", function (listenerArgs, triggerArgs) {
        console.log('a UI-Text-Box box was changed with the id = sample');
        console.log(triggerArgs);
    });
});