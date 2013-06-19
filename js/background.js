// Return the value for a given key in an array of objects, in this case an array of tabs
function extractValues(key, arr){
  var values = [];
  for (var i = 0; i < arr.length; i++) {
    values.push(arr[i][key]);
  }
  return values;
}

// Tests if an element is in an array
function isHere(arr,el) {
    return (arr.indexOf(el) != -1);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.tabs.getAllInWindow(null, function(tabs){
      // Don't have more than one window open at a time or it might get confused
      var windowId = tabs[0].windowId;
      var this_url = request.this_url;

      var tab_urls = extractValues('url', tabs);
      var tab_idxs = extractValues('index',  tabs);

      var open     = isHere(tab_urls, this_url);
      sendResponse({is_open: open});

      console.log(tab_urls, this_url);

      if(open){
        var idx       = tab_urls.indexOf(this_url);
        var tab_idx   = tab_idxs[idx];
        highlightInfo = {
          windowId: windowId,
          tabs: [tab_idx]
        }
        chrome.tabs.highlight(highlightInfo, function(reaction){
          // Just bring the tab to the front, no reaction necessary
        });
      }
    });
    
    return true

  });
