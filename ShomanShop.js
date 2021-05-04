console.log("e-commerce");

const allItems = [
  [
    {
      name: "T-shirt",
      price: "25.00 $",
      img: "./images/download.jfif",
      index: "0",
    },
    {
      name: "T-shirt1",
      price: "17.00 $",
      img: "./images./img_2.JPG",
      index: "1",
    },
    {
      name: "T-shirt2",
      price: "10.00 $",
      img: "./images/img_3.jfif",
      index: "2",
    },
    {
      name: "T-shirt3",
      price: "10.00 $",
      img: "./images/img_4.jfif",
      index: "3",
    },
    {
      name: "T-shirt4",
      price: "17.00 $",
      img: "./images/img_5.jfif",
      index: "4",
    },
    {
      name: "T-shirt5",
      price: "25.00 $",
      img: "./images/img_6.jfif",
      index: "5",
    },
  ],
  [
    {
      name: "Jeans",
      price: "25.00 $",
      img: "./images/jeans1.jfif",
      index: "0",
    },
    {
      name: "Jeans",
      price: "17.00 $",
      img: "./images./jeans2.jfif",
      index: "1",
    },
    {
      name: "Jeans",
      price: "10.00 $",
      img: "./images/jeans3.jfif",
      index: "2",
    },
    {
      name: "Jeans",
      price: "17.00 $",
      img: "./images/jeans4.jfif",
      index: "3",
    },
    {
      name: "Jeans",
      price: "25.00 $",
      img: "./images/jeans5.jfif",
      index: "4",
    },
    {
      name: "Jeans",
      price: "10.00 $",
      img: "./images/jeans6.jfif",
      index: "5",
    },
  ],
  [
    { name: "Shoes", price: "25.00 $", img: "./images/shoes.jfif", index: "0" },
    {
      name: "Shoes",
      price: "17.00 $",
      img: "./images./shoes1.JPG",
      index: "1",
    },
    {
      name: "Shoes",
      price: "10.00 $",
      img: "./images/shoes3.jfif",
      index: "2",
    },
    {
      name: "Shoes",
      price: "17.00 $",
      img: "./images/shoes4.jfif",
      index: "3",
    },
    {
      name: "Shoes",
      price: "25.00 $",
      img: "./images/shoes5.jfif",
      index: "4",
    },
    {
      name: "Shoes",
      price: "10.00 $",
      img: "./images/shoes6.jfif",
      index: "5",
    },
  ],
];
const items = $("#items");
const items2 = $("#items2");
const items3 = $("#items3");
const slider_btn = $(".slider-btn");
const home = $("#home");
const itemShop = $("#addedItem");
const allShopItem = $("#allItem");
const homeTitle = $(".homeTitle");
let counterShop = 0;

//localStorage.setItem("count99",JSON.stringify(counterShop))
//-------------------------------------------------------------------------------------------------------------------//

$(".form").hide();
$("#addedItem").hide();
$("#allItem").hide();
$("#items").hide();
$("#items2").hide();
$("#items3").hide();

//-------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------- home button -------------------------------------------------------//

$("#home").on("click", function () {
  $("#items").hide();
  $("#items2").hide();
  $("#items3").hide();
  $(".form").hide();
  $("#slider").show();
  $("#addedItem").hide();
  $("#allItem").show();
  $(".homeTitle").hide();
});
//------------------------------------------------------------------------------------------------------------------//
//------------------------------ slider button && home  --->  Shop Now button --------------------------------------//

const all = () => {
  $("#allItem").html("");
  for (j = 0; j < allItems.length; j++) {
    for (i = 0; i < allItems[j].length; i++) {
      const myItem = $(`<div class="item">
      <img class="image" src=${allItems[j][i]["img"]}>
      <p>${allItems[j][i]["name"]}</p>
      <p class="price">${allItems[j][i]["price"]}</p>
      <button class=" btn3" onclick="getItem('${allItems[j][i].index}')">Add Item</button>
  </div>`);
      myItem.appendTo(allShopItem);
    }
  }

  $("#items").hide();
  $("#items2").hide();
  $("#items3").hide();
  $(".homeTitle").hide();
  $("#slider").show();
  $("#addedItem").hide();
  $(".form").hide();
  $("#allItem").show();
};
$(".slider-btn").on("click", all);
//----------------------------------------------------------
$(".slider-btnS").on("click", all);

//------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------- T-Shirt ------------------------------------------------------------//

$("#t-shirt").on("click", function () {
  $("#items").html("");

  for (i = 0; i < allItems[0].length; i++) {
    const myItem = $(`<div class="item">
      <img class="image" src=${allItems[0][i]["img"]}>
      <p>${allItems[0][i]["name"]}</p>
      <p class="price">${allItems[0][i]["price"]}</p>
      <button class=" btn3" onclick="getItem('${allItems[0][i].index}')">Add Item</button>
  </div>`);
    myItem.appendTo(items);
  }
  $("#items").show();
  $("#items2").hide();
  $("#items3").hide();
  $(".homeTitle").hide();
  $("#slider").show();
  $(".form").hide();
  $("#addedItem").hide();
  $("#allItem").hide();
});
//-------------------------------------------------------------------------------------------------------------------//
//--------------------------------------- array to added on cart ----------------------------------------------------//

const counter = document.querySelector(".counter");
const array = JSON.parse(localStorage.getItem("cart22")) || [];
counter.innerText = array.length;
const getItem = (elem) => {
  array.push(allItems[0][elem]);
  counter.innerText = array.length;
  // console.log(elem);
  localStorage.setItem("cart22", JSON.stringify(array));
};
const getItemJeans = (elem) => {
  array.push(allItems[1][elem]);
  counter.innerText = array.length;
  localStorage.setItem("cart22", JSON.stringify(array));
};

const getShoesItem = (elem) => {
  array.push(allItems[2][elem]);
  counter.innerText = array.length;
  localStorage.setItem("cart22", JSON.stringify(array));
};

//-------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------- cart button -----------------------------------------------------//

const getItemShop = () => {
  $("#items2").hide();
  $("#items3").hide();
  $(".homeTitle").hide();
  $("#items").hide();
  $("#slider").hide();
  $("#addedItem").show();
  $("#allItem").hide();
  $(".form").hide();

  itemShop.html(``);

  let fav = JSON.parse(localStorage.getItem("cart22")) || array;

  for (let i = 0; i < fav.length; i++) {
    const myItem = $(`<div class="item-cart">
  <img class="image" src=${fav[i].img}>
  <p>${fav[i].name}</p>
  <p class="price">${fav[i].price}</p>
  <button class=" btn3" >Buy</button>
  <button class=" remove" onclick="removeItem('${i}')">remove</button>

</div>`);
    myItem.appendTo(itemShop);
  }
};

$(".shop").on("click", getItemShop);
const removeItem = (elem) => {
  array.splice(elem, 1);
  //console.log(elem)
  if (array.length > 0) {
    counter.innerText = array.length;
  } else {
    counter.innerText = array.length;
  }

  localStorage.setItem("cart22", JSON.stringify(array));
  getItemShop();
};
//-------------------------------------------------------------------------------------------------------------------//
//------------------------------------------- jeans button ----------------------------------------------------------//

$("#jeans").on("click", function () {
  $("#items2").html("");

  for (i = 0; i < allItems[1].length; i++) {
    const myItem = $(`<div class="item">
    <img class="image" src=${allItems[1][i]["img"]}>
    <p>${allItems[1][i]["name"]}</p>
    <p class="price">${allItems[1][i]["price"]}</p>
    <button class="btn3" onclick="getItemJeans('${allItems[1][i].index}')">Add Item</button>
</div>`);
    myItem.appendTo(items2);
  }
  $("#items2").show();
  $("#items3").hide();
  $("#items").hide();
  $(".homeTitle").hide();
  $("#slider").show();
  $("#addedItem").hide();
  $("#allItem").hide();
  $(".form").hide();
});

//------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------- shoes button --------------------------------------------------------//

$("#shoes").on("click", function () {
  $("#items3").html("");
  for (i = 0; i < allItems[2].length; i++) {
    const myItem = $(`<div class="item">
      <img class="image" src=${allItems[2][i]["img"]}>
      <p>${allItems[2][i]["name"]}</p>
      <p class="price">${allItems[2][i]["price"]}</p>
      <button class="btn3" onclick="getShoesItem('${allItems[2][i].index}')">Add Item</button>
      
  </div>`);
    myItem.appendTo(items3);
  }
  $("#items3").show();
  $("#slider").show();
  $("#items").hide();
  $("#items2").hide();
  $(".homeTitle").hide();
  $("#items").hide();
  $("#addedItem").hide();
  $("#allItem").hide();
  $(".form").hide();
});
//------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------- slider ------------------------------------------------------//

$(function () {
  //settings for slider
  var width = 1000;
  var animationSpeed = 1500;
  var pause = 7000;
  var currentSlide = 1;

  var $slider = $("#slider");
  var $slideContainer = $(".slides", $slider);
  var $slides = $(".slide", $slider);

  var interval;

  function startSlider() {
    interval = setInterval(function () {
      $slideContainer.animate(
        { "margin-left": "-=" + width },
        animationSpeed,
        function () {
          if (++currentSlide === $slides.length) {
            currentSlide = 1;
            $slideContainer.css("margin-left", 0);
          }
        }
      );
    }, pause);
  }
  function pauseSlider() {
    clearInterval(interval);
  }

  $slideContainer.on("mouseenter", pauseSlider).on("mouseleave", startSlider);

  startSlider();
});

//---------------------------------------------------- login icon -----------------------------------------------------//

const login = $(".loginIcon");
const login1 = $(".form");

$(".loginIcon").on("click", function () {
  $("#items3").hide();
  $("#slider").hide();
  $("#items").hide();
  $("#items2").hide();
  $(".homeTitle").hide();
  $("#addedItem").hide();
  $("#allItem").hide();
  $(".signup-form").hide();
  $(".login-form").show();
  $(".form").show();
});

//-------------------------------------------------------------------------------------------------------------------//
/*----------------------------------------------------- login -------------------------------------------------------*/

$(".login-form .option-1 a").on("click", function () {
  $(".login-form").hide();

  $(".signup-form").animate(
    {
      height: "toggle",
      opacity: "toggle",
    },
    "slow"
  );
});

$(".signup-form .option-1 a").on("click", function () {
  $(".signup-form").hide();

  $(".login-form").animate(
    {
      height: "toggle",
      opacity: "toggle",
    },
    "slow"
  );
});

//----------------------------------------------------------------------------------------------------------------//
//-------------------------------------------- login && register--------------------------------------------------------//
const registered = JSON.parse(localStorage.getItem("register")) || [
  {
    username: "mohammad",
    password: "123456789",
    email: "moha.shu66@gmail.com",
  },
];

//------------------------------------------------ register ----------------------------------------------------------//
const loginRegister = () => {
  let username = $("#username").val();
  let email = $("#email").val();
  let password = $("#password").val();
  let findUser = registered.filter(
    (elm) => elm.username === username || elm.email === email
  );

  if (!findUser.length) {
    registered.push({ username: username, password: password, email: email });

    localStorage.setItem("register", JSON.stringify(registered));
    $(".signup-form").hide();
    $(".login-form").show();
    console.log(registered);

    alert("signUp successfully");
  } else {
    alert("user already  exist");
  }
  console.log(registered);

  console.log(registered);
  //console.log(username)
};

//--------------------------------------------------- login ---------------------------------------------------------------//

const userLogin = () => {
  let loginUser = $("#loguser").val();
  let loginPass = $("#logpass").val();

  let findUser = registered.filter((elm) => elm.username === loginUser);

  if (
    findUser[0].username === loginUser &&
    findUser[0].password === loginPass
  ) {
    $(".login-form").hide();
    $(".form").hide();
    $("#slider").show();
    $(".homeTitle").show();

    alert("login successfully");
  } else {
    alert("incorrect username or password");
  }
};
//----------------------------------------------------------------------------------------------------------------//
/*--------------------------------------------------- dark mood ------------------------------------------------- */

$('.light').on('click', () => {
  if(!$('.light').hasClass("dark")) {
  $("body").css("background-color",'black');
  $("#header").css("background-color",'black')
  $(".item ").css("color","white")
  $(".footer").css({
    "background-color":"black",
    "color":"white",

  })
  $(".item-cart").css("color","white")
  $(".form").css("background-color","black")
$(".homeTitle").css("color","white")



  $('.light').addClass('dark')
  
} else {
            
      $("body").css("background-color",'white');
      $("#header").css("background-color",'white')
      $(".item ").css("color","black")
      $(".footer").css({
        "background-color":"white",
        "color":"black",
    
      })
      $(".item-cart").css("color","black")
      $(".form").css("background-color","white")
      $(".homeTitle").css("color","black")



      $('.dark').removeClass('dark')
  
  }
})