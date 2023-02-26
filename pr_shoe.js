

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



window.addEventListener("load",()=>{
  fetchdata(1)
})


let container=document.getElementById("container")
let pagination=document.getElementById("pag")

let filterselect=document.getElementById("filterr3")
let fetcheddata=[]


filterselect.addEventListener("change",()=>{
  let filtereddata=fetcheddata.filter((element)=>{
    if(element.type===filterselect.value){
      return true;
    }
    else{
      return false;
    }
  })
  display(filtereddata)
})


function fetchdata(pageNumber=1){ 
fetch(`https://buy-ffashion.onrender.com/Mensshoe?_limit=9&_page=${pageNumber}`)
 
.then((res)=>{
 let totalusers=res.headers.get("X-Total-Count")
 showpagination(totalusers,9)
  return res.json()
})
.then((actdata)=>{
  fetcheddata=actdata
  console.log(actdata)
 
  display(actdata)
})
}

function showpagination(totalItems,limit){
  const numofbtns=Math.ceil(totalItems/limit);
  pagination.innerHTML=`
  ${getbutton(1,1)}
  ${getbutton(2,2)}
  `




let paginationbtn=document.querySelectorAll(".pagination-button")


for(let btn of paginationbtn){
  btn.addEventListener("click",function(e){
    let pageNumber=e.target.dataset["pageNumber"];
    fetchdata(pageNumber)

  })
}
}

function getbutton(text,pageNumber){
  return`
  <button class="pagination-button" data-page-number="${pageNumber}">${text}</button>
  
  `
}



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
let description=document.createElement("h4")
description.innerText=element.description;
let divv=document.createElement("div")
divv.classList="smallbox"
let type=document.createElement("h4")
type.innerText=element.type;


let Buy=document.createElement("button");
Buy.innerText="Add To Cart"
Buy.addEventListener("click",()=>{
  
let orderdata=JSON.parse(localStorage.getItem("cart"))||[] 
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
divv.append(type,Buy)
card.append(image,name,price,description,divv)
 container.append(card)
})
} 



