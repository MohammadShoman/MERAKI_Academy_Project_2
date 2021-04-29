console.log("e-commerce");

const allItems = [
  { name: "Tshirt", description: "use it", img: "./images/download.jfif" },
];
const items = $("#items");
const getItems = () => {
  for (i = 0; i < allItems.length; i++) {
    const myItem = $(`<div >
    <img src=${allItems[i]["img"]}>
    <p>${allItems[i]["name"]}</p>
</div>`);
myItem.appendTo(items);
  }
  
};


window.onload=()=>{
    getItems();
}