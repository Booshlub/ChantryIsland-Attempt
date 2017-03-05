(function(){
	// grab all of the images with a jquery selector, add event handling (on.click)	
	$('#allPhotos li').on('click', function () {
		
		$.getJSON('includes/getPhoto.php', { photo:this.id }, function(data) {
			//console.log(data);		
			// attr is the same as attribute; these are jquery methods (functions)
			$('#selectedPhoto').attr('src', 'img/' + data.photo_name);
		});
	});
})();