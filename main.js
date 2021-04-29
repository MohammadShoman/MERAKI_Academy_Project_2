console.log("e-commerce");

const allItems = [
  [
    { name: "Tshirt", description: "use it", img: "./images/download.jfif" },
    { name: "Tshirt", description: "use it", img: "./images./img_2.JPG" },
    { name: "Tshirt", description: "use it", img: "./images/img_3.jfif" },
    { name: "Tshirt", description: "use it", img: "./images/img_4.jfif" },
  ],
];
const items = $("#items");
const getItems = () => {
  for (i = 0; i < allItems[0].length; i++) {
    const myItem = $(`<div class="item">
    <img class="image" src=${allItems[0][i]["img"]}>
    <p>${allItems[0][i]["name"]}</p>
    <p>${allItems[0][i]["description"]}</p>
    <button>cart</button>
</div>`);
    myItem.appendTo(items);
  }
};

getItems();
