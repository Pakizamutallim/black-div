// alert()

const buton = document.getElementById("btn");

function stretch() {
    const bDiv = document.getElementById("blackDiv"); 
    if (bDiv.style.width == "20%") {
        bDiv.style.width ="80%"
    }
    else if (bDiv.style.width == "80%") {
        bDiv.style.width = "20%"
    }
}
