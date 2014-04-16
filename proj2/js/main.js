// Marcy's Application
// Javascript marcy.js

(function(){
	var apiKey = 'f847ef7b3c2392ce972c1e4a88678bec',
		searchUrl = 'http://api.musixmatch.com/ws/1.1/track.search',
		trackUrl = 'http://api.musixmatch.com/ws/1.1/track.get&apikey=' + apiKey,
		lyricsUrl = 'http://api.musixmatch.com/ws/1.1/track.lyrics.get&apikey=' + apiKey,
		searchTerm,
		searchReq,
		lyricsReq,
		trackReq,
		tlReq;

	// Get Search Term
	$('#searchForm').on('submit', function (event) {
		event.preventDefault();
		searchTerm = $('#search').val();

		// Search
		searchReq = $.ajax({
			url: searchUrl,
			dataType: 'jsonp',
			type: 'GET',
			data: {
				apikey: apiKey,
				format: 'jsonp',
				q: searchTerm
			}
		});

		searchReq.done(displaySearch);
	});

	function displaySearch(results) {
		var container = $('#searchResults'),
			tracks = results.message.body.track_list,
			$ul = $('<ul/>', {id: 'results'});
		
		container.empty();

		console.log(tracks);
		
		for (var i = tracks.length - 1; i >= 0; i--) {
			var item = tracks[i],
				title = item.track.track_name,
				artist = item.track.artist_name;
			$ul.append('<li>' + title + ', ' + artist + '</li>');
		};

		$('#searchResults').append($ul);
	}

	// Display Search
	// <a class="results-link" href="#" data-id="{{ song.id }}">Song Name, Artist Name</a>
	$('.results-link').on('click', function () {
		// get tracks and lyrics based on id.
	});

	// Get Track & Get Lyrics

	// tlReq = $.when(
	// 	lyricsReq = $.ajax({});
	// 	trackReq = $.ajax({});
	// );

	// tlReq.then(displayTl);

	// Display Track and Lyrics

})();