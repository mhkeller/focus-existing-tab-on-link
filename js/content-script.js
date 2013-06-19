(function(){
	// What is the class you're targeting?
	$tab_links = $('.tab-link');

	function isHere(arr,el) {
	    return (arr.indexOf(el) != -1);
	};

	function unq(arr){
		var unq_arr = [];
		var counter = 0;
		$.each(arr, function(ind, val){
			if(isHere(unq_arr,val) == false){
				counter++
				unq_arr.push(val);
				console.log(counter, val)
			}
		});
		return unq_arr
	};

	function findAllLinks(targeted_class){
		var hrefs_to_preload = [];
		$.each(targeted_class, function(ind, val){
			var href = $(val).attr('href');
			hrefs_to_preload.push(href);
		});
		return hrefs_to_preload
	}
	var hrefs_to_preload = findAllLinks($tab_links);
	var unq_hrefs_to_preload = unq(hrefs_to_preload);

	chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
		// console.log(unq_hrefs_to_preload)
	 //    sendResponse(unq_hrefs_to_preload);
 		chrome.runtime.sendMessage({url_list: unq_hrefs_to_preload}, function(response) {
		  // if(!response.is_open){
		  // 	window.open(url)
		  // }
		});
	});

	$tab_links.click(function(){
		var url = $(this).attr('href');
		chrome.runtime.sendMessage({this_url: url}, function(response) {
		  if(!response.is_open){
		  	window.open(url)
		  }
		});
		return false; // Stop the link from opening
	});

}).call(this)


