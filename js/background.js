(function() {

    chrome.commands.onCommand.addListener(function (command) {
        if (command === 'copy') {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                copy(tabs[0]);
            });
        }        
    });

  }).call(this);