chrome.webNavigation.onCompleted.addListener(function (tabId, changeInfo, tab) { 
   // alert("hi");
   var a;
   chrome.storage.sync.get("variableName", function(result){
    // Showing the requested variable value
    console.log(result.variableName);
    if(result.variableName!=undefined){ 
    // alert(result.variableName);
    a=result.variableName;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
         chrome.tabs.sendMessage(tabs[0].id, {action: a}, function(response) {}); //Sends the payload to main.js 
      });

   }
   // break;
   }); 
   if (changeInfo.status == 'complete') {
   console.log("updated");   
      if(a!=undefined){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
         chrome.tabs.sendMessage(tabs[0].id, {action: a}, function(response) {});  
      });
   }

      $("#hi").click(function(){
      // setInterval(function(){
            console.log("here");
            var a=$("#inp").val();
            chrome.storage.sync.set({"variableName": a});      
    
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
         chrome.tabs.sendMessage(tabs[0].id, {action: a}, function(response) {}); //Sends the payload to main.js 
      });
   });
   }
});