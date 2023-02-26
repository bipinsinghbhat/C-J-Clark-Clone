let fetchedData=[];
let url="https://63f70593e8a73b486aef34da.mockapi.io/boot";
let product=document.getElementById("products");
let color=document.getElementById("color");
let material=document.getElementById("Material");
let size=document.getElementById("size");
let price=document.getElementById("price");

// fetch the data
fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((acctualdata) => {
      fetchedData = acctualdata;
      console.log(fetchedData);
      display(fetchedData);
    })
    .catch((Error) => {
      console.log(Error);
    });

    // display the data
 


function display(data) {
    data.forEach((element) => {
      let card = document.createElement("div");
      let image = document.createElement("img");
      image.setAttribute("src", element.avatar);
      
      let image1 = document.createElement("img");
      image1.setAttribute("src", element.avatar1);
      

      let title = document.createElement("h3");
      title.innerText = element.name;
      let price = document.createElement("h4");
      price.innerText = `$${element.price}`;
     
      let descriptions = document.createElement("p");
      descriptions.innerText = element.description;

      let cart = document.createElement("button");
      cart.innerText = "Add to cart";
      cart.addEventListener("click", () => {
        let cartdata = JSON.parse(localStorage.getItem("buy")) || [];
        let isPresent = false;
        for (let i = 0; i < cartdata.length; i++) {
          if (cartdata[i].id == element.id) {
            isPresent = true;
            break;
          }
        }
        if (isPresent == true) {
          alert("Product Already In Cart")
        }
        else {
          element.quantity=1;
          cartdata.push(element);
          localStorage.setItem("buy", JSON.stringify(cartdata));
          alert("Product Added To Cart")
        }
      })

      card.append(image,image1, title, price, descriptions, cart)
      product.append(card)
    });

    // filtered by color
    color.addEventListener("change",()=>{
        let touch=fetchedData.filter((element)=>{
          if(element.color==color.value){
            return true;
          }
          else{
            return false;
          }
        })
        product.innerHTML=null
        display(touch);
      })
    //   filter by material

      material.addEventListener("change",()=>{
        let touch=fetchedData.filter((element)=>{
          if(element.Material==material.value){
            return true;
          }
          else{
            return false;
          }
        })
        product.innerHTML=null
        display(touch);
      })

    //   filtered by size
    size.addEventListener("change",()=>{
        let touch=fetchedData.filter((element)=>{
          if(element.size==size.value){
            return true;
          }
          else{
            return false;
          }
        })
        product.innerHTML=null
        display(touch);
      })

    //   filter by price
    price.addEventListener("change",()=>{
        let touch=fetchedData.filter((element)=>{
          if(element.price<price.value){
            return true;
          }
          else{
            return false;
          }
        })
        product.innerHTML=null
        display(touch);
      })

// sorting things
let sort=document.getElementById("port");
sort.addEventListener('change',(e)=>{
  e.preventDefault();
     console.log(fetchedData)

   
      
      if(sort.value=="lh"){
      fetchedData.sort((a,b)=> ((a.price))-((b.price)));
       product.innerHTML=null;
      display(fetchedData)
      console.log(fetchedData)
    }
    else if(sort.value=="hl"){
      fetchedData.sort((a,b)=>((b.price))-((a.price)));
       product.innerHTML=null;
      display(fetchedData)
      console.log(fetchedData)
    }
})

  }
  // console.log(fetchData)