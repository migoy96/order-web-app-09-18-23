let shoeList = {
    shoes: [
        {img: "images/air-jordan-1-low-og.webp",
         name: "Air Jordan 1 Low OG",
         price: 7895,
         id: 1 },

        {img: "images/air-jordan-1-low-se-2.webp",
         name: "Air Jordan 1 Low SE",
         price: 5119,
         id: 2 },

        {img: "images/air-jordan-1-low-se-craft.webp",
         name: "Air Jordan 1 Low SE Craft",
         price: 5119,
         id: 3 },

        {img: "images/air-jordan-1-low-se.webp",
         name: "Air Jordan 1 Low SE",
         price: 7095,
         id: 4 },

         {img: "images/air-jordan-1-mid-se-2.webp",
         name: "Air Jordan 1 Mid SE",
         price: 7595,
         id: 5 },

         {img: "images/air-jordan-1-mid-se-3.webp",
         name: "Air Jordan 1 Mid SE",
         price: 7595,
         id: 6 },

         {img: "images/air-jordan-1-mid-se-craft-2.webp",
         name: "Air Jordan 1 Mid SE Craft",
         price: 7595,
         id: 7 },

         {img: "images/air-jordan-1-mid-se-craft.webp",
         name: "Air Jordan 1 Mid SE Craft",
         price: 7595,
         id: 8 },

         {img: "images/air-jordan-1-mid-se.webp",
         name: "Air Jordan 1 Mid SE",
         price: 7595,
         id: 9 },

         {img: "images/air-jordan-1-retro-high-og.webp",
         name: "Air Jordan 1 Retro High OG",
         price: 9895,
         id: 10 },

         {img: "images/ajko-1.webp",
         name: "AJKO 1",
         price: 7895,
         id: 11 },

         {img: "images/air-jordan-1-mid-se-craft-2.webp",
         name: "Air Jordan 1 Mid SE Craft",
         price: 7595,
         id: 12 }
    ],

    orderList: [],

    priceList: [],

    delBtn:[],

    showCard(){
        let itemList = document.getElementById("itemList");
        let shoes = "";
        this.shoes.forEach(
            function(shoeinList){
                shoes += `<div class="card d-inline-flex m-3 border-2" style="width: 17rem;box-shadow: 0px 5px 11px 1px rgba(120,104,104,0.54);
                -webkit-box-shadow: 0px 5px 11px 1px rgba(120,104,104,0.54);
                -moz-box-shadow: 0px 5px 11px 1px rgba(120,104,104,0.54);">
                <img src="${shoeinList.img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title fs-6" id="name${shoeinList.id}">${shoeinList.name}</h5>
                  <p class="card-text" id="price${shoeinList.id}"> ${shoeinList.price}</p>
                  <a href="#" class="btn btn-secondary" onclick="addToCart(${shoeinList.id});">Add to Cart</a>
                </div>
              </div>`;
            });
            itemList.innerHTML = shoes;
    },

    showList(){
        let cartList = document.getElementById("cartList");
        let orderList = "";
        this.orderList.forEach(
            function(shoeinList){
                orderList += `<li style="list-style: none; margin-bottom: 15px;"> ${shoeinList.name} </li>`;
            });
            cartList.innerHTML = orderList;
            
    },

    showPriceList(){
        let amount = document.getElementById("priceList");
        let priceList = "";
        let totalCost = 0;
        this.priceList.forEach(
            function(shoeinList){
                priceList += `<li style="list-style: none; margin-bottom: 15px;">${formatCurrency(shoeinList.price, "PHP")}</li>`;
                totalCost += Number(shoeinList.price);
            });
            output = formatCurrency(totalCost, "PHP");
            amount.innerHTML = priceList;
            document.getElementById("totalPrice").innerText = `Total Price: ${output}`;
            
    },

    showDelButton(){
        let del = document.getElementById("delete_btn");
        let delBtn = "";
        this.delBtn.forEach(
            function(shoeinList){
                delBtn += `<li style="list-style: none; margin-bottom: 15px;"><button style="width: 25px; border-style:none; border-radius:50%;" class="bg-danger" onclick="del();">X</button></li>`;
            }
        );
        del.innerHTML = delBtn;

    }

    
}

function formatCurrency(value, currency){
    const userLanguage = window.navigator.language;
        return new Intl.NumberFormat(userLanguage,{
            style: "currency",
            currency: currency,
        }).format(value);
};

shoeList.showCard();
shoeList.showList();
shoeList.showPriceList();
shoeList.showDelButton();


function addToCart(id){
    let order = document.getElementById("name"+id).innerHTML;
    let price = document.getElementById("price"+id).innerHTML;     

        shoeList.orderList.push({name:order});
        shoeList.priceList.push({price:price});
        shoeList.delBtn.push({});
        shoeList.showList();
        shoeList.showPriceList();
        shoeList.showDelButton();
}

function del(){
    shoeList.orderList.pop();
    shoeList.priceList.pop();
    shoeList.delBtn.pop();
    shoeList.showList();
    shoeList.showPriceList();
    shoeList.showDelButton();
}