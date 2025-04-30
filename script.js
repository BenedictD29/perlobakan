elementImg = document.getElementById("idImage");
listImage = ["image.jpg", "image3.jpg"];
i = 0;
function gantiGbr(){
    elementImg.src = listImage[i];
    i = (i + 1) % listImage.length;
}
setInterval(gantiGbr,3000)