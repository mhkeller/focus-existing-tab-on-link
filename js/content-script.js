(function(){
	$('.in-tab').click(function(){
		var url = $(this).attr('href')
		chrome.runtime.sendMessage({this_url: url}, function(response) {
		  if(!response.is_open){
		  	window.open(url)
		  }
		});
		return false; // Stop the link from opening
	});
}).call(this);