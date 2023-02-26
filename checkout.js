let Lsdata=JSON.parse(localStorage.getItem("buy"))||[];
let tsum=localStorage.getItem("sum");
const appendcards=document.querySelector(".cart");
const Estimatedtotal=document.querySelector("#Estimated-total");
const button=document.querySelector("#btn");
const subtotal=document.querySelector("#subtotal");
Estimatedtotal.innerText=tsum;
subtotal.innerText=tsum;
const payment=document.querySelector(".address");
const product=document.querySelector(".product");

redercart(Lsdata)

function redercart(data){
    let cart= data.map((el)=>{
       return getcard(el.id,el.quantity,el.img,el.title,el.description,el.type,el.price)
    }).join("")
    appendcards.innerHTML=`${cart}`
}
// appendcards.innerHTML=
function getcard(id,quanty,img,tital,des,typ,price){
    let card=` <div class="carts">
    <div>
    <img src=${img} alt="">
</div>
<div>
<h4> <b>Title</b>:${tital}</h4>
<p> <b>Description</b>:${des}</p>
<p> <b>Type</b>:${typ}</p>
<span id="price"><b>Price</b>:$${price}</span>


<span id="remove" style="color:#0579D0;"><a href="./addTocart.html">Edit</a></span>
</div>
</div>

</div>
    
    `
    return card;
}
button.addEventListener("click",(e)=>{
e.preventDefault;

    payment.innerHTML=`<img src="https://cdn.dribbble.com/users/147386/screenshots/5315437/success-tick-dribbble.gif" alt=""
    style="margin:auto;"
    > <h2 style="text-align:center">Payment Successful</h2>
    <p style="text-align:center">order placed suceessfully</p>`
    Lsdata=[];
    tsum=0;
    redercart(Lsdata)
    Estimatedtotal.innerText=tsum;
subtotal.innerText=tsum;
setTimeout(() => {
    location.href="./thanks.html"
}, 5000);
})
const FNAME_REQUIRED = "Please fill the required imformation";
// let createAccount=document.querySelector("#btn");
const email=document.getElementById("email");
const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
const password=document.getElementById("password");
const form = document.querySelector("form");
const registerdata=JSON.parse(localStorage.getItem("register"))||[];
