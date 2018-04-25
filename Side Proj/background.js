
// var check=new getArr();
var a=[];
$(function(){
	
	$("#hi").click(function(){
		var b;
    chrome.storage.sync.get("variableName", function(result)  //On page load, get all words which must be blocked
   {
    console.log(result.variableName);
    if(result.variableName!=undefined)
     { 
         a=result.variableName;
        }
        else
        {
          a=[];
        }

// a=b;
	 console.log(a);
  	var x=$("#inp").val();
    a.push(x);
    console.log("background.js");
    console.log(a);        
      chrome.storage.sync.set({"variableName": a});
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
         chrome.tabs.sendMessage(tabs[0].id, {action: a}, function(response) {});  
      });
   });
});
});

// chrome.webNavigation.onCompleted.addListener(function (tabId, changeInfo, tab) { 
//    alert("hi");
//    var a;
//    chrome.storage.sync.get("variableName", function(result){
//     // Showing the requested variable value
//     console.log(result.variableName);
//     if(result.variableName!=undefined){ 
//     // alert(result.variableName);
//     a=result.variableName;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//          chrome.tabs.sendMessage(tabs[0].id, {action: a}, function(response) {}); //Sends the payload to main.js 
//       });

//    }
//    // break;
//    }); 
//    if (changeInfo.status == 'complete') {
//    console.log("updated");   
//       if(a!=undefined){
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//          chrome.tabs.sendMessage(tabs[0].id, {action: a}, function(response) {});  
//       });
//    }

//       $("#hi").click(function(){
//       // setInterval(function(){
//             console.log("here");
//             var a=$("#inp").val();
//             chrome.storage.sync.set({"variableName": a});      
    
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//          chrome.tabs.sendMessage(tabs[0].id, {action: a}, function(response) {}); //Sends the payload to main.js 
//       });
//    });
//    }
// });

// });

// chrome.webNavigation.onCompleted.addListener(function (tabId, changeInfo, tab) { 
//    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//          chrome.tabs.sendMessage(tabs[0].id, {action: "hullo"}, function(response) {});  
//       });
//    var a;
//    chrome.storage.sync.get("variableName", function(result){
//     // Showing the requested variable value
//     console.log(result.variableName);
//     if(result.variableName!=undefined){ 
//     // alert(result.variableName);
//     a=result.variableName;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//          chrome.tabs.sendMessage(tabs[0].id, {action: a}, function(response) {}); //Sends the payload to main.js 
//       });

//    }
//    // break;
//    }); 
//    if (changeInfo.status == 'complete') {
//    console.log("updated");   
//       if(a!=undefined){
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//          chrome.tabs.sendMessage(tabs[0].id, {action: a}, function(response) {});  
//       });
//    }

//       $("#hi").click(function(){
//       // setInterval(function(){
//             console.log("here");
//             var a=$("#inp").val();
//             chrome.storage.sync.set({"variableName": a});      
    
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//          chrome.tabs.sendMessage(tabs[0].id, {action: a}, function(response) {}); //Sends the payload to main.js 
//       });
//    });
//    }
// });