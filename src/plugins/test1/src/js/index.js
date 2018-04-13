var csInterface = new CSInterface();  
var event = new CSEvent("com.adobe.cep.test", "APPLICATION");  

function newModalDialogOne(){
    event.data = "This is a test!";  
    cSInterface.dispatchEvent(event);  

    alert("one");
}

function newModalDialogTwo(){
    event.data = "This is another test!";  
    cSInterface.dispatchEvent(event);  

    alert("two");
}