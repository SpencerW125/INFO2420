PrintButton1 = new Image
PrintButton2 = new Image
logo1 = new Image
logo2 = new Image

if (document.images) {
	PrintButton1.src = "images/Thumbnails/Print1.gif"
	PrintButton2.src = "images/Thumbnails/Print2.gif"
	logo1.src = "images/Logo-1.jpg"
	logo2.src = "images/Logo-2.jpg"
}


		var logoArray = new Array(
			'Image1Lg.jpg',
		);


		var titleArray = new Array(
			'Hunting',
			'Hiking',
			'Skiing',
			'Scuba diving'
			
		);
			
		var imgPath = "images/Logo-1.png";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      		textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
			
		var theImage = document.getElementById('theImage');
			
		const logo = document.getElementById('logo')
		
		logo.addEventListener('mouseover', function() {
			logo.src = 'images/Logo-2.jpg';
		})
			
		logo.addEventListener('mouseout', function() {
			logo.src = 'images/Logo-1.jpg';
		})
		}
		

