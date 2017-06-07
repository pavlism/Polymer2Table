Template.UIButton.onRendered(function () {
    
    EventBroker.listen("_ui-button_clicked", function (listenerArgs, triggerArgs) {
        console.log('A button was clicked');
        console.log(triggerArgs);
    });
    
});