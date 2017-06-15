var defaultButton = new ReactiveObject({val:0});
var toggleID = new ReactiveObject({val:0});




Template.UIAlert.onRendered(function () {
    EventBroker.listen("toggleBasic_ui-button_clicked", function (listenerArgs, triggerArgs) {
        if(defaultButton.val ===0){
            defaultButton.val =1;
        }else{
            defaultButton.val = 0;
        }
    });
    
     EventBroker.listen("toggleID_ui-button_clicked", function (listenerArgs, triggerArgs) {
        if(toggleID.val ===0){
            toggleID.val =1;
        }else{
            toggleID.val = 0;
        }
    });
    
    EventBroker.listen("sample_ui-alert_closed", function (listenerArgs, triggerArgs) {
        console.log('An alert was clsed with the id of sample');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("event_ui-alert_closed", function (listenerArgs, triggerArgs) {
        console.log('An alert was clsed');
        console.log(triggerArgs);
    });

   
});

Template.UIAlert.helpers({
    defaultButton: function () {
        return JSON.stringify(defaultButton.val);
    },
    toggleID: function () {
        return JSON.stringify(toggleID.val);
    }
});