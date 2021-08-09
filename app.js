var price = document.getElementById("price");
var goomba = document.getElementById("goombaSubmit");
var bobomb = document.getElementById("bobombSubmit");
var cheep = document.getElementById("cheepSubmit");


goomba.addEventListener("click", function(){
    //changePrice(5*document.getElementById("goomba").value);
    changePrice();
});
bobomb.addEventListener("click", function(){
    //changePrice(7*document.getElementById("bobomb").value);
    changePrice();
});

cheep.addEventListener("click", function(){
    console.log(price.innerText);
    //changePrice(11*document.getElementById("cheep").value);
    changePrice();
});



function changePrice(){
var updatePrice =((11*document.getElementById("cheep").value) + (7*document.getElementById("bobomb").value) +(5*document.getElementById("goomba").value))
price.innerText = "Total Price: $"+updatePrice;
}

console.log(document.getElementsByClassName("price").innerText);