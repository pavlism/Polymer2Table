var list = new ReactiveArray();

Template.UIDropDown.onRendered(function () {
    EventBroker.listen("_UI-Drop-Down_clicked", function (listenerArgs, triggerArgs) {
        console.log('a UI-Drop-Down box was clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("sample_UI-Drop-Down_clicked", function (listenerArgs, triggerArgs) {
        console.log('a UI-Drop-Down box was clicked with the id = sample');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("_UI-Drop-Down_changed", function (listenerArgs, triggerArgs) {
        console.log('a UI-Drop-Down box was changed');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("sample_UI-Drop-Down_changed", function (listenerArgs, triggerArgs) {
        console.log('a UI-Drop-Down box was changed with the id = sample');
        console.log(triggerArgs);
    });
   
    
    list.length = 0;
    list.push('one');
    list.push('2');
    list.push('3');
});

Template.UIDropDown.helpers({
    list: function () {
        return JSON.stringify(list.toArray());
    }
});