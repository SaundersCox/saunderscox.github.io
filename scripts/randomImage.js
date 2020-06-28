const NUM_IMAGES = 2

randomImage()

function randomImage() {
    n = Math.floor(Math.random() * NUM_IMAGES);
    document.getElementById("imgClickAndChange").src = "me" + n + ".jpg";
}