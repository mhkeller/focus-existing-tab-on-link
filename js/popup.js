(function(){

	chrome.tabs.getSelected(null, function(tab) {
	    chrome.tabs.sendRequest(tab.id, "request", function(result) {
	        console.log("Received from content script:", result)
	    });
	});

}).call(this)