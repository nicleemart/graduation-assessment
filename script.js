window.addEventListener("load", function () {
	var like = document.getElementsByClassName("commentActions__likeTarget");
	var numberOfLikesElem = document.getElementsByClassName("commentActions__likeNum");

	for (i=0; i < like.length; i++){
		like[i].addEventListener("click", likeFeature.bind(null, i));
		// Loop through like class when clicked, use bind to attach function and param to click event
	};

	function likeFeature(index){
		// Use index variable to indicate position in array
		var numberOfLikes = numberOfLikesElem[index].innerHTML;

		if (like[index].innerHTML === "Like"){
				like[index].innerHTML = "Unlike";
				numberOfLikes++;
				numberOfLikesElem[index].innerHTML = numberOfLikes;

		} else{
				like[index].innerHTML = "Like";
				numberOfLikes--;
				numberOfLikesElem[index].innerHTML = numberOfLikes;
		}
	}

});
