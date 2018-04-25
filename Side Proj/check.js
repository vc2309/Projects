var a=[];
chrome.webNavigation.onCompleted.addListener(function (tabId, changeInfo, tabs) //Page is loaded
{
   // alert("check.js");
   chrome.storage.sync.get("variableName", function(result)	//On page load, get all words which must be blocked
   {
	    // Showing the requested variable value
	    
	    
	    if(result.variableName!=undefined && result.variable!="")
	    { 
	    
		    a=result.variableName;
		    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
		    {
		        chrome.tabs.sendMessage(tabs[0].id, {action: a}, function(response)
		         {
		         	console.log("Sen")
		         }); //Sends the payload to main.js 
		      });

   }
   
   }); 
   if (changeInfo.status == 'complete') {
   console.log("updated");   
      if(a!=undefined && a!=""){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
         chrome.tabs.sendMessage(tabs[0].id, {action: a}, function(response) {});  
      });
   }

   //    $("#hi").click(function(){
      
   //          console.log("here");
   //          var x=$("#inp").val();
   //          a.push(x);
   //          chrome.storage.sync.set({"variableName": a});      
    
   //    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
   //       chrome.tabs.sendMessage(tabs[0].id, {action: a}, function(response) {}); //Sends the payload to main.js 
   //    });
   // });
   }
});

var getArr = function(){
chrome.storage.sync.get("variableName", function(result)	//On page load, get all words which must be blocked
   {
   	console.log("getArr");
   	return result.variableName;
   });


}