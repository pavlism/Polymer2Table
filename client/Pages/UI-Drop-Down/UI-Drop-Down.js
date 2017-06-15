var list = new ReactiveArray();

Template.UIDropDown.onRendered(function () {
    EventBroker.listen("ui-drop-down_clicked", function (listenerArgs, triggerArgs) {
        console.log('a ui-drop-down box was clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("sample_ui-drop-down_clicked", function (listenerArgs, triggerArgs) {
        console.log('a ui-drop-down box was clicked with the id = sample');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("ui-drop-down_changed", function (listenerArgs, triggerArgs) {
        console.log('a ui-drop-down box was changed');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("sample_ui-drop-down_changed", function (listenerArgs, triggerArgs) {
        console.log('a ui-drop-down box was changed with the id = sample');
        console.log(triggerArgs);
    });
   
    
    list.length = 0;
    list.push('one');
    list.push('2');
    list.push('3');
});

Template.UIDropDown.helpers({
    list: function () {
        debugger;
        return JSON.stringify(list.toArray());
    }
});