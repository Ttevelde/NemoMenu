var csInterface = new CSInterface();  
var event;

function newModalDialogOne(){
    //opens a dreamweaver extension in a new dialog
    csInterface.requestOpenExtension('com.olo.TestOne');  
}

function newModalDialogTwo(){
    //open a dreamweaver extension in a new dialog.
    csInterface.requestOpenExtension('com.olo.TestTwo'); 
}