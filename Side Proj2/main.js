

// chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
//  if (request.action == "getDOM"){
//  	console.log("HYON");
//    sendResponse({dom: "The dom that you want to get"});
// }
//  else{
//    sendResponse({}); // Send nothing..
// }
// });

$(function(){

	console.log('SUP2');
	page=$('body');
	tester(page);
	var word="";
	console.log($('body').html());
	$('#hi').on('click', function(){
		//console.log('SUP');
		tester(page);
		$("#inp").submit();
		chrome.tabs.sendMessage({text: 'report_back'});
	//var word=prompt("Enter phrase/word to filter");
  	//	console.log(word);
		var color='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		// $('p').toggle();
		$('p').each(function(){
			var text=$(this).text();
			console.log(text)
			if (text.search(word)>-1){
				console.log(this);
				$('<span><p style=color:yellow!important; background color:red!important; font-size:32px!important;>ALERT</p><span class="coming btn"><a id="yo">Let me see</a></span></span>').insertBefore(this);
				this.toggle();
			}
	});
	$("#inp").submit(function(){
		tester(page);
		word=$(this).val();
		console.log(word);
		chrome.tabs.sendMessage(tab.id, {text: 'report_back'});
		var all=$('body').children('div');
		all.each(function(){
			var text=$(this).text();
			console.log(text);
			if (text.search(word)>-1){
				console.log(this);
				$('<span><p style=color:yellow!important; background color:red!important; font-size:32px!important;>ALERT</p><span class="coming btn"><a id="yo">Let me see</a></span></span>').insertBefore(this);
				this.toggle();
			}
	});
	});
	$('#yo').on('click',function(){
		$this.parent().parent().next().toggle();
	});
	// $('body').on('click', function(){
	// 	var word=prompt("Enter phrase/word to filter");
 //  		console.log(word);
	// 	var color='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	// 	// $('p').toggle();
	// 	$('p').each(function(){
	// 		var text=$(this).text();
	// 		console.log(text)
	// 		if (text.search(word)>-1){
	// 			console.log(this);
	// 			$('<span><p style=color:yellow!important; background color:red!important; font-size:32px!important;>ALERT</p><span class="coming btn"><a id="yo">Let me see</a></span></span>').insertBefore(this);
	// 			this.toggle();
	// 		}
	// 	});
	// });
});
	});
var tester = function(page){
	console.log("here");
	console.log($('body').html());
}