window.addEventListener("load", function () {
	var like = document.getElementsByClassName("likeTarget");
	var numberOfLikes = document.getElementsByClassName("likeNum");

	for (i=0; i < like.length; i++){
		like[i].addEventListener("click", function() {
			if(this.innerHTML === "Like"){
				this.innerHTML = "Unlike";
			} else{
				this.innerHTML = "Like";
			}
		});
	};

});
