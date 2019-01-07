chrome.browserAction.onClicked.addListener(function (tab) {
    var textArea = document.createElement('textarea');
    textArea.value = tab.title + "\n" + tab.url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
});