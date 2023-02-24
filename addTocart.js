const btnCheckout=document.querySelector(".checkout");
const appendcards=document.querySelector(".cart");
const checkouttotal=document.querySelector(".checkout-total");
const Estimatedtotal=document.querySelector(".Estimated-total");
const applybutton=document.querySelector(".apply");
const applyinput=document.querySelector("#promo");
let Lsdata=JSON.parse(localStorage.getItem("buy"))||[];
console.log(Lsdata)
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
<h4>${tital}</h4>
<p>${des}</p>
<p>${typ}</p>
<span id="price">$${price}</span>
<div>
<button id="dec" onclick="decre(${id})">-</button>
<button class="number">${quanty}</button>
<button id="inc" onclick="incre(${id})">+</button>
</div>

<span id="remove" style="color:#0579D0;" onclick="del(${id})">Remove</span>
</div>
</div>

</div>
    
    `
    return card;
}
let num=document.querySelector(".number");
console.log(num.innerText);
function incre(a){
    // let i=1;
    for(i=0;i<Lsdata.length;i++){
        if(Lsdata[i].id==a){
            Lsdata[i].quantity++;
            redercart(Lsdata)
            localStorage.setItem("buy",JSON.stringify(Lsdata))
        }
    }
    
}
function decre(a){
    // let i=1;
    for(i=0;i<Lsdata.length;i++){
        if(Lsdata[i].id==a){
            if(Lsdata[i].quantity!=1){

                Lsdata[i].quantity--;
            }
            redercart(Lsdata)
            localStorage.setItem("buy",JSON.stringify(Lsdata))
        }
    }
    
}
function del(a){
    
    // let i=1;
    for(i=0;i<Lsdata.length;i++){
        if(Lsdata[i].id==a){
            Lsdata.splice(i,1);
            redercart(Lsdata)
            localStorage.setItem("buy",JSON.stringify(Lsdata))
        }
    }
            
        }
    
