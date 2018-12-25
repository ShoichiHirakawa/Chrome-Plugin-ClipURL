(function() {
  var main;

  main = function() {
    chrome.tabs.getSelected(null, function(tab){
      copy(tab);
      window.close();
    });
  };

  main();

}).call(this);
