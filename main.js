console.log("e-commerce");

const allItems = [
  [
    { name: "Tshirt", description: "use it", img: "./images/download.jfif" },
    { name: "Tshirt", description: "use it", img: "./images./img_2.JPG" },
    { name: "Tshirt", description: "use it", img: "./images/img_3.jfif" },
    { name: "Tshirt", description: "use it", img: "./images/img_4.jfif" },
    { name: "Tshirt", description: "use it", img: "./images/img_4.jfif" },
  ],
  [
    { name: "Tshirt", description: "use it", img: "./images/download.jfif" },
    { name: "Tshirt", description: "use it", img: "./images./img_2.JPG" },
    { name: "Tshirt", description: "use it", img: "./images/img_3.jfif" },
    { name: "Tshirt", description: "use it", img: "./images/img_4.jfif" },
    { name: "Tshirt", description: "use it", img: "./images/img_4.jfif" },
  ],
  [
    { name: "Tshirt", description: "use it", img: "./images/download.jfif" },
    { name: "Tshirt", description: "use it", img: "./images./img_2.JPG" },
    { name: "Tshirt", description: "use it", img: "./images/img_3.jfif" },
    { name: "Tshirt", description: "use it", img: "./images/img_4.jfif" },
    { name: "Tshirt", description: "use it", img: "./images/img_4.jfif" },
  ],
];
const items = $("#items");
const items2 = $("#items2");
const items3 = $("#items3");
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

  for (i = 0; i < allItems[1].length; i++) {
    const myItem = $(`<div class="item">
    <img class="image" src=${allItems[1][i]["img"]}>
    <p>${allItems[1][i]["name"]}</p>
    <p>${allItems[1][i]["description"]}</p>
    <button>cart</button>
</div>`);
    myItem.appendTo(items2);
  }
  for (i = 0; i < allItems[1].length; i++) {
    const myItem = $(`<div class="item">
    <img class="image" src=${allItems[2][i]["img"]}>
    <p>${allItems[2][i]["name"]}</p>
    <p>${allItems[2][i]["description"]}</p>
    <button>cart</button>
</div>`);
    myItem.appendTo(items3);
  }
};

getItems();
