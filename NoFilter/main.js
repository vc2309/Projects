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

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  console.log(msg.action);
      setInterval(function(){
      var text=msg.action;
      // var data=imdb.get('The Toxic Avenger', {apiKey: 'foo', timeout: 30000});
      // console.log(data);
      if(text.length>2){
            // console.log(text);
            var all=$(":contains('"+text+"')");
            // console.log($(all));
            var list=["P","SPAN","LI"];
            $.each(all,function(ind,val){
              // var cont=c.text().toLowerCase();
              // console.log($(val).children().length);
              if(($(val).children().length===0) || list.indexOf($(val).prop("tagName"))>-1 ){
                if($(this).hasClass("marked")==false){
                modify($(this));}
              }
            });
          }
        },1000);
   
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

