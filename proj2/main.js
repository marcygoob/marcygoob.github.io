// Marcy's Application
// Javascript marcy.js

'use strict';

(function(){
	var apiKey = 'f847ef7b3c2392ce972c1e4a88678bec',
		searchUrl = 'http://api.musixmatch.com/ws/1.1/track.search&api=' + apikey,
		trackUrl = 'http://api.musixmatch.com/ws/1.1/track.get&api=' + apikey,
		lyricsUrl = 'http://api.musixmatch.com/ws/1.1/track.lyrics.get&apikey=' + apikey,
		searchTerm,
		searchReq,
		lyricsReq,
		trackReq,
		tlReq;

	// Get Search Term
	$('#search-submit').on('click', function (event) {
		event.preventDefault();
		searchTerm = $('#search').val();
	});

	// Search
	searchReq = $.ajax({
		url: searchUrl + '&q=' + searchTerm,
		dataType: 'jsonp',
		type: 'GET'
	});

	searchReq.done(displaySearch);

	// Display Search
	// <a class="results-link" href="#" data-id="{{ song.id }}">Song Name, Artist Name</a>
	$('.results-link').on('click', function () {
		// get tracks and lyrics based on id.
	});

	// Get Track & Get Lyrics

	tlReq = $.when(
		lyricsReq = $.ajax({});
		trackReq = $.ajax({});
	);

	tlReq.then(displayTl);

	// Display Track and Lyrics

})();