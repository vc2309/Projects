var id=0;
$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});
function modify(elem){
  id=id+1;
  $('<span id="thisone"><p style=color:yellow!important; background color:red!important; font-size:32px!important;>ALERT</p><span class="coming btn"><button id="'+id+'" class="yo">Let me see</button></span></span>').insertBefore(elem);
  $(elem).hide();
  $(elem).addClass("marked");
}

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) 
{
  console.log(msg.action);
  console.log("LOOPING NOW");
  var KEYWORDS=msg.action;
      setInterval(function(){
      
      for (t in KEYWORDS)
      {  
        // console.log(KEYWORDS[t]);
        var text=KEYWORDS[t];
            if(text.length>2){
                  var all=$(":contains('"+text+"')");
                  var list=["P","SPAN","LI"];
                  $.each(all,function(ind,val){
                    
                    if(($(val).children().length===0) || list.indexOf($(val).prop("tagName"))>-1 ){
                      if($(this).hasClass("marked")==false){
                      modify($(this));}
                    }
                  });
                }
      }
    },500);
   
});

$(function(){

$(".yo").click(function(){
alert(this.id);
var id=this.id;
obj=$('#'+id);
if (obj.hasClass("marked")) {obj.show();
}

});

});

