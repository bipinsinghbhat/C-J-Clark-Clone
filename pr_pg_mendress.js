let container=document.getElementById("container")

// fetch("https://buy-fashion.onrender.com/Mensdress")
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
// })

// async function getData(){
//    try {
//     let resp=await fetch("https://buy-fashion.onrender.com/Mensdress")
//     let data=await resp.json()
//     console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
// }
// getData()








fetch(`https://buy-ffashion.onrender.com/Mensdress`)
 
.then((res)=>{
  return res.json()
})
.then((actdata)=>{
  console.log(actdata)
 
  display(actdata)
})


function display(data){
container.innerText=null
 data.forEach((element)=>{
  let card=document.createElement("div")
  let image=document.createElement("img")
  image.setAttribute("src",element.img)
  let name=document.createElement("h2")
  name.innerText=element.title
  let price=document.createElement("h2")
  price.innerText=element.price;
  let description=document.createElement("h2")
description.innerText=element.description;
let type=document.createElement("h2")
type.innerText=element.type;
let id=document.createElement("h2")
id.innerText=element.id;

let Buy=document.createElement("button");
Buy.innerText="Buy"
Buy.addEventListener("click",()=>{
  
let orderdata=JSON.parse(localStorage.getItem("buy"))||[] 
  let present=false;
  for(let i=0;i<orderdata.length;i++){
    if(element.id===orderdata[i].id){
      present=true;
    }
  }
  if(present==true){
alert("Already Placed Order")
  }
  else{
    orderdata.push(element)
    localStorage.setItem("buy",JSON.stringify(orderdata))
  alert("Successfully Placed Order")
  }
})

card.append(image,name,price,description,type,id,Buy)
 container.append(card)
})
}

