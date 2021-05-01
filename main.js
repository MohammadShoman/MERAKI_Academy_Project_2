console.log("e-commerce");

const allItems = [
  [
    { name: "Tshirt", description: "25.00 $", img: "./images/download.jfif" },
    { name: "Tshirt", description: "17.00 $", img: "./images./img_2.JPG" },
    { name: "Tshirt", description: "10.00 $", img: "./images/img_3.jfif" },
    { name: "Tshirt", description: "10.00 $", img: "./images/img_4.jfif" },
    { name: "Tshirt", description: "17.00 $", img: "./images/img_5.jfif" },
    { name: "Tshirt", description: "25.00 $", img: "./images/img_6.jfif" }
  ],
  [
    { name: "Jeans", description: "25.00 $", img: "./images/jeans1.jfif" },
    { name: "Jeans", description: "17.00 $", img: "./images./jeans2.jfif" },
    { name: "Jeans", description: "10.00 $", img: "./images/jeans3.jfif" },
    { name: "Jeans", description: "17.00 $", img: "./images/jeans4.jfif" },
    { name: "Jeans", description: "25.00 $", img: "./images/jeans5.jfif" },
    { name: "Jeans", description: "10.00 $", img: "./images/jeans6.jfif" }
  ],
  [
    { name: "Shoes", description: "use it", img: "./images/shoes.jfif" },
    { name: "Shoes", description: "use it", img: "./images./shoes1.JPG" },
    { name: "Shoes", description: "use it", img: "./images/shoes3.jfif" },
    { name: "Shoes", description: "use it", img: "./images/shoes4.jfif" },
    { name: "Shoes", description: "use it", img: "./images/shoes5.jfif" },
    { name: "Shoes", description: "use it", img: "./images/shoes6.jfif" }
  ],
];
const items = $("#items");
const items2 = $("#items2");
const items3 = $("#items3");
const slider_btn=$(".slider-btn")


$(".slider-btn").on("click",function(){
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

$(function() {

  //settings for slider
  var width = 1000;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  //cache DOM elements
  var $slider = $('#slider');
  var $slideContainer = $('.slides', $slider);
  var $slides = $('.slide', $slider);

  var interval;

  function startSlider() {
      interval = setInterval(function() {
          $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
              if (++currentSlide === $slides.length) {
                  currentSlide = 1;
                  $slideContainer.css('margin-left', 0);
              }
          });
      }, pause);
  }
  function pauseSlider() {
      clearInterval(interval);
  }

  $slideContainer
      .on('mouseenter', pauseSlider)
      .on('mouseleave', startSlider);

  startSlider();


});