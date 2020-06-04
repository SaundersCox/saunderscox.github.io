function changeImage() {
	var str = document.getElementById("imgClickAndChange").src;
	var res = str.substring(str.length - 5, str.length - 4);
	
	if (res == NUM_IMAGES-1) {
		document.getElementById("imgClickAndChange").src = "me0.jpg";
	}
	else {
		var next = str.substring(0, str.length - 7);
		next += "me" + (parseInt(res)+1) + ".jpg"
		document.getElementById("imgClickAndChange").src = next;
	}
}
