Template.UIButton.onRendered(function () {

    EventBroker.listen("ui-button_clicked", function (listenerArgs, triggerArgs) {
        console.log('A button was clicked');
        console.log(triggerArgs);
    });

    EventBroker.listen("sample_ui-button_clicked", function (listenerArgs, triggerArgs) {
        console.log("A button was clicked and it's ID is sample");
        console.log(triggerArgs);
    });
});