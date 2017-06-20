var defaultButton = new ReactiveObject({val:false});
var toggleID = new ReactiveObject({val:false});

Template.MRPAlert.onRendered(function () {
    EventBroker.listen("toggleBasic_mrp-button_clicked", function (listenerArgs, triggerArgs) {
        if(defaultButton.val ===false){
            defaultButton.val =true;
        }else{
            defaultButton.val = false;
        }
    });
    
     EventBroker.listen("toggleID_mrp-button_clicked", function (listenerArgs, triggerArgs) {
        if(toggleID.val ===false){
            toggleID.val =true;
        }else{
            toggleID.val = false;
        }
    });
    
    EventBroker.listen("sample_mrp-alert_closed", function (listenerArgs, triggerArgs) {
        console.log('An alert was clsed with the id of sample');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("mrp-alert_closed", function (listenerArgs, triggerArgs) {
        console.log('An alert was clsed');
        console.log(triggerArgs);
    });

   
});

Template.MRPAlert.helpers({
    defaultButton: function () {
        return JSON.stringify(defaultButton.val);
    },
    toggleID: function () {
        return JSON.stringify(toggleID.val);
    }
});