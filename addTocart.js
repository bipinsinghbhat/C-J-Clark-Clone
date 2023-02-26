const btnCheckout=document.querySelectorAll(".checkout");
const appendcards=document.querySelector(".cart");
const checkouttotal=document.querySelector(".checkout-total");
const Estimatedtotal=document.querySelector("#Estimated-total");
const subtotal=document.querySelector("#subtotal");

const applybutton=document.querySelector(".apply");
const applyinput=document.querySelector("#promo");
let Lsdata=JSON.parse(localStorage.getItem("buy"))||[];
let tsum=localStorage.getItem("sum");
let sum=0;
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
            sum+=Lsdata[i].price;
                // tsum=sum;
                // localStorage.setItem("sum",tsum)
                console.log(sum);
                 subtotal.innerText= "$"+Math.floor(sum);
                Estimatedtotal.innerText="$"+Math.floor(sum); 
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
                sum-=Lsdata[i].price;
                 
                console.log(sum);
                 subtotal.innerText= "$"+Math.floor(sum);
                Estimatedtotal.innerText="$"+Math.floor(sum); 
            }
            redercart(Lsdata)
            
            // sumtotal(Lsdata)
            localStorage.setItem("buy",JSON.stringify(Lsdata))
        }
    }
    
}
function del(a){
    
    // let i=1;
    for(i=0;i<Lsdata.length;i++){
        if(Lsdata[i].id==a){
            sum-=Lsdata[i].price*Lsdata[i].quantity;
            // localStorage.setItem("sum",tsum)
        console.log(sum);
         subtotal.innerText= "$"+Math.floor(sum);
        Estimatedtotal.innerText="$"+Math.floor(sum);
            Lsdata.splice(i,1);
            redercart(Lsdata)
            // sumtotal(Lsdata)
            localStorage.setItem("buy",JSON.stringify(Lsdata))
        }
    }
            
        }

    
        sumtotal(Lsdata)
        function sumtotal(data){
            // sum=0;
        for(let i=0;i<data.length;i++){
            console.log(data[i].price)
            sum+=data[i].price*data[i].quantity;
        }
        tsum=sum;
        localStorage.setItem("sum",tsum)
        console.log(sum);
         subtotal.innerText= "$"+Math.floor(sum);
        Estimatedtotal.innerText="$"+Math.floor(sum);
        }
        
        
        applybutton.addEventListener("click",(e)=>{
            e.preventDefault();
            if(applyinput.value=="masai30"){
                sum-=sum*0.3;
            }
            // tsum=sum;
        Estimatedtotal.innerText="$"+Math.floor(sum);
        // localStorage.setItem("sum",tsum)
        })
        for(let i=0;i<btnCheckout.length;i++){
            btnCheckout[i].addEventListener("click",(e)=>{
                e.preventDefault();
                tsum=Math.floor(sum);
                localStorage.setItem("sum",tsum)
                location.href="./login.html"
            })
        }
        