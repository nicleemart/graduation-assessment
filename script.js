window.addEventListener("load", function () {
	var like = document.getElementsByClassName("likeTarget");
	var numberOfLikesElem = document.getElementsByClassName("likeNum");

	for (i=0; i < like.length; i++){
		like[i].addEventListener("click", likeFeature.bind(null, i));
	};

	function likeFeature(index){
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
