// /**
	//  * Listens for the app launching then creates the window
	//  *
	//  * @see http://developer.chrome.com/apps/app.window.html
	//  */
	// // chrome.browserAction.onClicked.addListener(function(tab) {
	// // 	console.log("HYON");
	// // // 	//var word=prompt("Enter phrase/word to filter");
	// // //   //console.log(word);
	// // // 	//var word=prompt("Enter phrase/word to filter");
	// // //   	//	console.log(word);
	// // // 		// var color='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	// // // 		// // $('p').toggle();
	// // // 		// $('p').each(function(){
	// // // 		// 	var text=$(this).text();
	// // // 		// 	console.log(text)
	// // // 		// 	if (text.search(word)>-1){
	// // // 		// 		console.log(this);
	// // // 		// 		$('<span><p style=color:yellow!important; background color:red!important; font-size:32px!important;>ALERT</p><span class="coming btn"><a id="yo">Let me see</a></span></span>').insertBefore(this);
	// // // 		// 		this.toggle();
	// // // 		// 	}
	// // // 		// });
	// // });

	// chrome.extension.onMessage.addListener(
	// 	console.log("HALLO");
	//   $('#hi').on('click', function(){
	// 		//console.log('SUP');
	// 		chrome.
	// 		$("#inp").submit();
	// });
	// 	$("#inp").submit(function(){
	// 		word=$(this).val();
	// 		console.log(word);
	// 		action(word);
	// 	});
	// 	$('#yo').on('click',function(){
	// 		$this.parent().parent().next().toggle();
	// 	});
	// });
	// chrome.browserAction.onClicked.addListener(function (tab) {
	//     // ...check the URL of the active tab against our pattern and...
	//     console.log("HALLO");
	//         // ...if it matches, send a message specifying a callback too
	//         chrome.tabs.sendMessage(tab.id, {text: 'report_back'});
	// });
// function popup() {
//     chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
//     var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
//    });
// }

// document.addEventListener("DOMContentLoaded", function() {
//   $("#hi").addEventListener("click", popup);
// });

$(function(){
	
	$("#hi").click(function(){
		setInterval(function(){
	console.log("here");
	var a=$("#inp").val();
// $("body").click(function(){         
    
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
         chrome.tabs.sendMessage(tabs[0].id, {action: a}, function(response) {});  
      });


  },1000);


});






});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) { 
   var a=$("#inp").val(); 
   if (changeInfo.status == 'complete') {
   console.log("updated");   
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
         chrome.tabs.sendMessage(tabs[0].id, {action: a}, function(response) {});  
      });
   }
});

// chrome.browserAction.onClicked.addListener(click);

// chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
// 	// console.log("sdkjbdssl");
// 	// var a = 'Aaa';
// 	// console.log($('#swml-loc').html());
// 	alert(response);
	
// });



// chrome.browserAction.onClicked.addListener(function(tab){
// $(function(){
// 	alert("hi");
// // 	$('#hi').click(function(){
// // 		console.log("friends");
// // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// //   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function() {
// //     // alert("response.farewell");
// //   });
// // };
// // });
// });
// });