const box = document.getElementById("box");

box.addEventListener("keydown",function (){
    alert("You pressed down key");
});

box.addEventListener("keyup",function (){
    alert("You pressed up key");
});