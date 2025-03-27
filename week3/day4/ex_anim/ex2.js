function myMove() {
    let box = document.getElementById("animate");
    let container = document.getElementById("container");
    
    let position = 0; 
    let interval = setInterval(function () {
        if (position >= container.offsetWidth - box.offsetWidth) {
            clearInterval(interval); 
        } else {
            position++; 
            box.style.left = position + "px";

        }
    }); 
}
