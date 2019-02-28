console.log("is this thing on? hello?");

// when we click any .picture-frame
const targetElements = document.querySelectorAll("[data-target]");

// we see an enlarged version of image that is
// inside that .picture-frame

function respondToClick() {
    console.log('hello.');
    console.log('How do you do?');
    console.log('I am very well, thank you.');
}

targetElements[0].addEventListener("click", respondToClick);