// Select the form
const form = document.getElementById("MyForm")
form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    let radius = document.getElementById("radius").value;
    let volumeResut = document.getElementById("volume");

  

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    console.log(volume);
    


    volumeResut.value = volume.toFixed(3);
});
