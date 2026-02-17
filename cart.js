let cart = {};
let total = 0;

function toggleCart(){
document.getElementById("cartSidebar").classList.toggle("active");
}

function changeQty(product, price, change){

if(!cart[product]){
cart[product] = {price:price, qty:0};
}

cart[product].qty += change;

// remove if 0
if(cart[product].qty <= 0){
delete cart[product];
document.getElementById("qty-"+product).innerText = 0;
}else{
document.getElementById("qty-"+product).innerText = cart[product].qty;
}

updateCartUI();
}

function updateCartUI(){
let cartDiv = document.getElementById("cartItems");
cartDiv.innerHTML = "";
total = 0;

for(let item in cart){
let subtotal = cart[item].price * cart[item].qty;
total += subtotal;

cartDiv.innerHTML += `
<div class="cart-item">
${item} x${cart[item].qty} = GHS ${subtotal}
</div>`;
}

document.getElementById("total").innerText = total;
document.getElementById("cartCount").innerText = Object.keys(cart).length;
}

function submitOrder(){

if(Object.keys(cart).length===0){
alert("Cart is empty");
return;
}

let cartArray = [];

for(let item in cart){
cartArray.push({
product:item,
price:cart[item].price,
quantity:cart[item].qty
});
}

let data = {
name: document.getElementById("name").value,
phone: document.getElementById("phone").value,
email: document.getElementById("email").value,
business: document.getElementById("business").value,
cart: cartArray,
total: total
};

fetch("PASTE_GOOGLE_SCRIPT_URL",{
method:"POST",
body: JSON.stringify(data)
})
.then(res=>res.text())
.then(res=>{
alert("Order placed successfully. Receipt sent.");

cart={};
total=0;
updateCartUI();

// reset all visible qty to 0
document.querySelectorAll("[id^='qty-']").forEach(el=>el.innerText="0");

toggleCart();
});
}
