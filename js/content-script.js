(function(){
	// Get all the links!
	var tab_links = $('.tab-link');
	var tab_hrefs = [];
	$.each(tab_links, function(ind, val){
		var href = $(val).attr('href');
		tab_hrefs.push(href);
		console.log(ind, href)
	});


	$('.tab-link').click(function(){
		var url = $(this).attr('href');
		chrome.runtime.sendMessage({this_url: url}, function(response) {
		  if(!response.is_open){
		  	window.open(url)
		  }
		});
		return false; // Stop the link from opening
	});

}).call(this)


