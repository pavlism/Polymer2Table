var list = new ReactiveArray();

Template.MRPDropDown.onRendered(function () {
    EventBroker.listen("mrp-drop-down_clicked", function (listenerArgs, triggerArgs) {
        console.log('a mrp-drop-down box was clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("sample_mrp-drop-down_clicked", function (listenerArgs, triggerArgs) {
        console.log('a mrp-drop-down box was clicked with the id = sample');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("mrp-drop-down_changed", function (listenerArgs, triggerArgs) {
        console.log('a mrp-drop-down box was changed');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("sample_mrp-drop-down_changed", function (listenerArgs, triggerArgs) {
        console.log('a mrp-drop-down box was changed with the id = sample');
        console.log(triggerArgs);
    });
   
    
    list.length = 0;
    list.push('one');
    list.push('2');
    list.push('3');
});

Template.MRPDropDown.helpers({
    list: function () {
        return JSON.stringify(list.toArray());
    }
});