menu.onclick = function myFunction(){
    let x = event.clientX;     // Get the horizontal coordinate
    let y = event.clientY;

    console.log(x, y);
    let elem = document.getElementById("myTopnav");
    if (elem.className === "topnav"){
        elem.classList.add("responsive");
    }
    else{
        elem.className = "topnav";
    }
}