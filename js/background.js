function extractValues(key, tabs){
  var values = [];
  for (var i = 0; i < tabs.length; i++) {
    values.push(tabs[i][key]);
  }
  return values;
}

function isHere(arr,el) {
    return (arr.indexOf(el) != -1);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.tabs.getAllInWindow(null, function(tabs){
      // Don't have more than one tab open at a time or it might get confused
      var windowId = tabs[0].windowId;
      var this_url = request.this_url;

      var tab_urls = extractValues('url', tabs);
      var tab_idxs  = extractValues('index',  tabs);

      var open = isHere(tab_urls, this_url);
      sendResponse({is_open: open});

      if(open){
        var idx = tab_urls.indexOf(this_url);
        var tab_idx = tab_idxs[idx];
        highlightInfo = {
          windowId: windowId,
          tabs: [tab_idx]
        }
        chrome.tabs.highlight(highlightInfo, function(reaction){
          // console.log(reaction);
        })
      }
    });
    return true

  });
