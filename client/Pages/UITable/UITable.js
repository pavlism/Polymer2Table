var tableData = new ReactiveArray();
var tableData2 = new ReactiveArray();
var tableData3 = new ReactiveArray();
var tableData4 = new ReactiveArray();
var tableData5 = new ReactiveArray();


Template.UITable.onRendered(function () {
    tableData.length = 0;
    tableData2.length = 0;
    tableData3.length = 0;
    tableData4.length = 0;
    tableData5.length = 0;
    
    tableData.push(['F-Name','L-Name','Job','Birth Place']);
    tableData.push(['Mark','Pavlis','Developer','Canada']);
    tableData.push(['Thomas','Grove','Developer','Canada']);
    tableData.push(['Nhi','Somthing','Web Stuff','Viatnam']);
    tableData.push(['Lucy','Chen','Developer','China']);
    tableData.push(['Terry','Chen','Developer','China']);
    tableData.push(['Roger','Yang','Boss','China']);
    
    
    tableData3.push(['F-Name','L-Name','Job','Birth Place']);
    tableData3.push([{title:'Mark', prop:{Company:'MRP inc', phone:'519-768-4521'}},'Pavlis','Developer','Canada']);
    tableData3.push([{title:'Tom', prop:{Company:'Tom inc', phone:'519-768-4521'}},'Grove','Developer','Canada']);
    tableData3.push(['2 Thomas','Grove','Developer','Canada']);
    tableData3.push([{title:'Nhi', prop:{Company:'Tom inc', phone:'519-768-4521'}},'Somthing','Web Stuff',{title:'Nhi 2', prop:{Company:'Nhi inc', phone:'519-768-4521', phone2:'519-768-4521', phone3:'519-768-4521'}}]);
    tableData3.push(['Lucy','Chen','Developer','China']);
    tableData3.push(['Terry','Chen','Developer','China']);
    tableData3.push(['Roger','Yang','Boss','China']);
    
    var Link = {link:{href:'http://www.google.ca',text:'google'}};
    
    tableData5.push(['F-Name','L-Name','Job','Web Page']);
    tableData5.push(['Mark','Pavlis','Developer',Link]);
    tableData5.push(['Thomas','Grove','Developer',Link]);
    tableData5.push(['Nhi','Somthing','Web Stuff',Link]);
    tableData5.push(['Lucy','Chen','Developer',Link]);
    tableData5.push(['Terry','Chen','Developer',Link]);
    tableData5.push(['Roger','Yang','Boss',Link]);
    
    var buttons = {buttons:[{color:UIButton.colors.info, text:'edit'},{color:UIButton.colors.danger, text:'delete'}]};
    var buttons2 = {buttons:[{text:'e-mail'},{color:UIButton.colors.warning, text:'call'}]};   

    tableData4.push(['F-Name','L-Name','Job','Actions']);
    tableData4.push(['Lucy','Chen','Developer',buttons]);
    tableData4.push(['Terry','Chen','Developer',buttons]);
    tableData4.push(['Roger','Yang','Boss',buttons]);
    tableData4.push(['Roger','Yang','Boss',buttons2]);
    tableData4.push(['Roger','Yang','Boss',buttons2]);
    tableData4.push(['Roger','Yang','Boss',buttons2]);
    tableData4.push(['Roger','Yang','Boss',buttons2]);
    tableData4.push([{button:{ID:'23',color:UIButton.colors.primary, text:'add New'}},'',' ','']);
    
    tableData2.push(['F-Name','L-Name','Job','Birth Place']);
    tableData2.push(['1 Thomas','Grove','Developer','Canada']);
    tableData2.push(['2 Thomas','Grove','Developer','Canada']);
    tableData2.push(['3 Nhi','Somthing','Web Stuff','Viatnam']);
    tableData2.push(['4 Lucy','Chen','Developer','China']);
    tableData2.push(['5 Terry','Chen','Developer','China']);
    tableData2.push(['6 Roger','Yang','Boss','China']);
    tableData2.push(['7 Mark','Pavlis','Developer','Canada']);
    tableData2.push(['8 Thomas','Grove','Developer','Canada']);
    tableData2.push(['9 Nhi','Somthing','Web Stuff','Viatnam']);
    tableData2.push(['10 Lucy','Chen','Developer','China']);
    tableData2.push(['11 Terry','Chen','Developer','China']);
    tableData2.push(['12 Roger','Yang','Boss','China']);
    tableData2.push(['13 Mark','Pavlis','Developer','Canada']);
    tableData2.push(['14 Thomas','Grove','Developer','Canada']);
    tableData2.push(['15 Nhi','Somthing','Web Stuff','Viatnam']);
    tableData2.push(['16 Lucy','Chen','Developer','China']);
    tableData2.push(['17 Terry','Chen','Developer','China']);
    tableData2.push(['18 Roger','Yang','Boss','China']);
    tableData2.push(['19 Mark','Pavlis','Developer','Canada']);
    tableData2.push(['20 Thomas','Grove','Developer','Canada']);
    tableData2.push(['21 Nhi','Somthing','Web Stuff','Viatnam']);
    tableData2.push(['22 Lucy','Chen','Developer','China']);
    tableData2.push(['23 Terry','Chen','Developer','China']);
    tableData2.push(['24 Roger','Yang','Boss','China']);
    tableData2.push(['25 Mark','Pavlis','Developer','Canada']);
    tableData2.push(['26 Thomas','Grove','Developer','Canada']);
    tableData2.push(['27 Nhi','Somthing','Web Stuff','Viatnam']);
    tableData2.push(['28 Lucy','Chen','Developer','China']);
    tableData2.push(['29 Terry','Chen','Developer','China']);
    tableData2.push(['30 Roger','Yang','Boss','China']);
    tableData2.push(['31 Mark','Pavlis','Developer','Canada']);
    tableData2.push(['32 Thomas','Grove','Developer','Canada']);
    tableData2.push(['33 Nhi','Somthing','Web Stuff','Viatnam']);
    tableData2.push(['34 Lucy','Chen','Developer','China']);
    tableData2.push(['35 Terry','Chen','Developer','China']);
    tableData2.push(['36 Roger','Yang','Boss','China']);
    tableData2.push(['37 Mark','Pavlis','Developer','Canada']);
    tableData2.push(['38 Thomas','Grove','Developer','Canada']);
    tableData2.push(['39 Nhi','Somthing','Web Stuff','Viatnam']);
    tableData2.push(['40 Lucy','Chen','Developer','China']);
    tableData2.push(['41 Terry','Chen','Developer','China']);
    tableData2.push(['42 Roger','Yang','Boss','China']);
    tableData2.push(['43 Mark','Pavlis','Developer','Canada']);
    tableData2.push(['44 Thomas','Grove','Developer','Canada']);
    tableData2.push(['45 Nhi','Somthing','Web Stuff','Viatnam']);
    tableData2.push(['46 Lucy','Chen','Developer','China']);
    tableData2.push(['47 Terry','Chen','Developer','China']);
    tableData2.push(['48 Roger','Yang','Boss','China']);
    tableData2.push(['49 Mark','Pavlis','Developer','Canada']);
    tableData2.push(['50 Thomas','Grove','Developer','Canada']);
    tableData2.push(['51 Nhi','Somthing','Web Stuff','Viatnam']);
    tableData2.push(['52 Lucy','Chen','Developer','China']);
    tableData2.push(['53 Terry','Chen','Developer','China']);
    tableData2.push(['54 Roger','Yang','Boss','China']);
    tableData2.push(['55 Mark','Pavlis','Developer','Canada']);
    tableData2.push(['56 Thomas','Grove','Developer','Canada']);
    tableData2.push(['57 Nhi','Somthing','Web Stuff','Viatnam']);
    tableData2.push(['58 Lucy','Chen','Developer','China']);
    tableData2.push(['59 Terry','Chen','Developer','China']);
    tableData2.push(['60 Roger','Yang','Boss','China']);
    tableData2.push(['61 Mark','Pavlis','Developer','Canada']);
    tableData2.push(['62 Thomas','Grove','Developer','Canada']);
    tableData2.push(['63 Nhi','Somthing','Web Stuff','Viatnam']);
    tableData2.push(['64 Lucy','Chen','Developer','China']);
    tableData2.push(['65 Terry','Chen','Developer','China']);
    tableData2.push(['66 Roger','Yang','Boss','China']);
    tableData2.push(['67 Mark','Pavlis','Developer','Canada']);
    tableData2.push(['68 Thomas','Grove','Developer','Canada']);
    tableData2.push(['69 Nhi','Somthing','Web Stuff','Viatnam']);
    tableData2.push(['70 Lucy','Chen','Developer','China']);
    tableData2.push(['71 Terry','Chen','Developer','China']);
    tableData2.push(['72 Roger','Yang','Boss','China']);
    tableData2.push(['73 Mark','Pavlis','Developer','Canada']);
    tableData2.push(['74 Thomas','Grove','Developer','Canada']);
    tableData2.push(['75 Nhi','Somthing','Web Stuff','Viatnam']);
    tableData2.push(['76 Lucy','Chen','Developer','China']);
    tableData2.push(['77 Terry','Chen','Developer','China']);
    tableData2.push(['78 Roger','Yang','Boss','China']);
    
    EventBroker.listen("Table1_UI-Table_clicked", function (listenerArgs, triggerArgs) {
        console.log('Table1 was clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("Table1_UI-Table_dblclicked", function (listenerArgs, triggerArgs) {
        console.log('Table1 was double clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("Table2_UI-Table_clicked", function (listenerArgs, triggerArgs) {
        console.log('Table2 was clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("Table2_UI-Table_dblclicked", function (listenerArgs, triggerArgs) {
        console.log('Table2 was double clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("Table3_UI-Table_clicked", function (listenerArgs, triggerArgs) {
        console.log('Table3 was clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("Table3_UI-Table_dblclicked", function (listenerArgs, triggerArgs) {
        console.log('Table3 was double clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("Table4_UI-Table_clicked", function (listenerArgs, triggerArgs) {
        console.log('Table4 was clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("Table4_UI-Table_dblclicked", function (listenerArgs, triggerArgs) {
        console.log('Table4 was double clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("Table5_UI-Table_clicked", function (listenerArgs, triggerArgs) {
        console.log('Table5 was clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("Table5_UI-Table_dblclicked", function (listenerArgs, triggerArgs) {
        console.log('Table5 was double clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("Table6_UI-Table_clicked", function (listenerArgs, triggerArgs) {
        console.log('Table6 was clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("Table6_UI-Table_dblclicked", function (listenerArgs, triggerArgs) {
        console.log('Table6 was double clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("Table7_UI-Table_clicked", function (listenerArgs, triggerArgs) {
        console.log('Table7 was clicked');
        console.log(triggerArgs);
    });
    
    EventBroker.listen("Table7_UI-Table_dblclicked", function (listenerArgs, triggerArgs) {
        console.log('Table7 was double clicked');
        console.log(triggerArgs);
    });
});

Template.UITable.helpers({
    tableData: function () {
        return JSON.stringify(tableData.toArray());
    },
    tableData2: function () {
        return JSON.stringify(tableData2.toArray());
    },
    tableData3: function () {
        return JSON.stringify(tableData3.toArray());
    },
    tableData4: function () {
        return JSON.stringify(tableData4.toArray());
    },
    tableData5: function () {
        return JSON.stringify(tableData5.toArray());
    }
});
