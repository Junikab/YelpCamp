const form = document.querySelector("#myGroceries");
const item = document.querySelector("#item");
const list = document.querySelector('#list');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const itemName = item.value    
    const newLI= document.createElement('LI');
    newLI.innerText = itemName;
    list.append(newLI);
    item.value = ""
});



// const form = document.querySelector('form');
// // const Product = document.querySelector('#product');
// // const Quant = document.querySelector('#qty');
// const list = document.querySelector("#list");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const productName = form.elements.product.value;
//     const quantName = form.elements.qty.value;
//     const newLI = document.createElement("LI");
//     newLI.innerText = `${quantName} ${productName}`;
//     list.appendChild(newLI);
//    form.elements.product.value = "";
//    form.elements.qty.value = "";

// });
