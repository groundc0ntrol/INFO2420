
var PrintButton1 = new Image();
var PrintButton2 = new Image();
var logo1 = new Image();
var logo2 = new Image();

if (document.images) {
    PrintButton1.src = "Images/print1.png";
    PrintButton2.src = "Images/print2.png";
    logo1.src = "Images/logo1.png";
    logo2.src = "Images/logo2.png";
}


var imgArray = new Array(
    "DogTrick2Lg.jpg",
    "HuntingDogsLg.jpg",
    "KidsDogLg.jpg",
    "BirdDogLg.jpg"
);


var titleArray = new Array(
    "Dog Performing a Trick",
    "Two Dogs",
    "Dog and Two Boys Portrait",
    "Dog and Parrot"
);


var imgPath = "Images/Fullsize/";


function swapImage(imgID) {
    var theImage = document.getElementById("theImage");
    var textDiv = document.getElementById("bottomText");

    if (!theImage || !textDiv) return;

    var newImg = imgArray[imgID];
    var textTitle = titleArray[imgID];

    theImage.src = imgPath + newImg;
    textDiv.innerHTML = textTitle;
}

function preloadImages() {
    for (var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image();
        tmpImg.src = imgPath + imgArray[i];
    }
}
