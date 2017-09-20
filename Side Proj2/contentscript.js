console.log('contentscript.js: setup "onRequest" listener');
chrome.extension.onRequest.addListener(function (request, sender,
sendResponse) {
  console.log('contentscript.js: ' + request.action);
  if (request.action == 'modify')
    document.body.appendChild(
      document.createTextNode('This does not work...'));
  sendResponse({});
});
console.log('contentscript.js: sending "show" request');
chrome.extension.sendRequest({action:'show'}, function(response) {});