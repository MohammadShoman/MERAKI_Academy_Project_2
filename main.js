console.log("e-commerce");

const allItems = [
  [
    { name: "Tshirt", description: "use it", img: "./images/download.jfif" },
    { name: "Tshirt", description: "use it", img: "./images./img_2.JPG" },
    { name: "Tshirt", description: "use it", img: "./images/img_3.jfif" },
    { name: "Tshirt", description: "use it", img: "./images/img_4.jfif" },
    { name: "Tshirt", description: "use it", img: "./images/img_5.jfif" },
  ],
  [
    { name: "Tshirt", description: "use it", img: "./images/jeans1.jfif" },
    { name: "Tshirt", description: "use it", img: "./images./jeans2.jfif" },
    { name: "Tshirt", description: "use it", img: "./images/jeans3.jfif" },
    { name: "Tshirt", description: "use it", img: "./images/jeans4.jfif" },
    { name: "Tshirt", description: "use it", img: "./images/jeans5.jfif" },
  ],
  [
    { name: "Tshirt", description: "use it", img: "./images/shoes.jfif" },
    { name: "Tshirt", description: "use it", img: "./images./shoes1.JPG" },
    { name: "Tshirt", description: "use it", img: "./images/shoes3.jfif" },
    { name: "Tshirt", description: "use it", img: "./images/shoes4.jfif" },
    { name: "Tshirt", description: "use it", img: "./images/shoes5.jfif" },
  ],
];
const items = $("#items");
const items2 = $("#items2");
const items3 = $("#items3");

$("#t-shirt").on("click", function () {
  $("#items").html("");

  for (i = 0; i < allItems[0].length; i++) {
    const myItem = $(`<div class="item">
      <img class="image" src=${allItems[0][i]["img"]}>
      <p>${allItems[0][i]["name"]}</p>
      <p>${allItems[0][i]["description"]}</p>
      <button>cart</button>
  </div>`);
    myItem.appendTo(items);
  }
  $("#items").show();
  $("#items2").hide();
  $("#items3").hide();
});

$("#jeans").on("click", function () {
  $("#items2").html("");

  for (i = 0; i < allItems[1].length; i++) {
    const myItem = $(`<div class="item">
    <img class="image" src=${allItems[1][i]["img"]}>
    <p>${allItems[1][i]["name"]}</p>
    <p>${allItems[1][i]["description"]}</p>
    <button>cart</button>
</div>`);
    myItem.appendTo(items2);
  }
  $("#items2").show();
  $("#items3").hide();
  $("#items").hide();
});



$("#shoes").on("click", function () {
  $("#items3").html("");
  for (i = 0; i < allItems[2].length; i++) {
    const myItem = $(`<div class="item">
      <img class="image" src=${allItems[2][i]["img"]}>
      <p>${allItems[2][i]["name"]}</p>
      <p>${allItems[2][i]["description"]}</p>
      <button>cart</button>
  </div>`);
    myItem.appendTo(items3);
  }
  $("#items3").show();
  $("#items").hide();
  $("#items2").hide();
  
  
});
