console.log("e-commerce");


const allItems = [
  { name: "Tshirt", description: "use it", img: "./images/download.jfif", },
];
const items = $("#items");
const getItems = () => {
  for (i = 0; i < allItems.length; i++) {
    const myItem = $(`<div class="item">
    <img class="image" src=${allItems[i]["img"]}>
    <p>${allItems[i]["name"]}</p>
    <p>${allItems[i]["description"]}</p>
    <button>cart</button>
</div>`);
myItem.appendTo(items);
  }
  
};



  getItems()

