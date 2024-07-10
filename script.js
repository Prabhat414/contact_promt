var buy = document.querySelector("#buy");
var submit = document.querySelector("#submit");
var overlay = document.querySelector(".overlay");
var parent = document.querySelector(".parent");

buy.addEventListener("click",function(){
    console.log("first")
    overlay.style.display = "block";
    parent.style.display = "block";
    buy.style.opacity = 0;
});

submit.addEventListener("click",function(){
    console.log("first")
    overlay.style.display = "none";
    parent.style.display = "none";
    buy.style.opacity = 1;
})