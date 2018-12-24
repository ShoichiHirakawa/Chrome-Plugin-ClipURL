// Generated by CoffeeScript 1.8.0
(function() {
  var main;

  main = function() {
    chrome.tabs.getSelected(null, function(tab){
      var textArea = document.createElement('textarea');
      textArea.value = tab.title + "\n" + tab.url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      window.close();
    });
  };

  main();

}).call(this);