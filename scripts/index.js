console.log("is this thing on? hello?");

// when we click any .picture-frame
const targetElements = document.querySelectorAll("[data-target]");

// we see an enlarged version of image that is
// inside that .picture-frame

function respondToClick(event) {
    console.log('hello.');
    console.log('How do you do?');
    console.log('I am very well, thank you.');

    console.log(event.target.parentElement);
    // ad the "big" class to the thing that got clicked"

    // event.target.parentElement.classList.add('big');

}

function attachClickHandler(oneElement) {
    
    oneElement.addEventListener("click", respondToClick);
}


targetElements.forEach(attachClickHandler);