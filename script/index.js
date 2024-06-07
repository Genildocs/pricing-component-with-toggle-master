const btnSelect = document.getElementById("btnSelect");
const select = document.getElementById("select");
const cardOne = document.querySelector(".card-1");
const cardTwo = document.querySelector(".card-2");

//Functions
const toogle = () => {
  cardOne.classList.toggle("hidden");
  cardTwo.classList.toggle("!flex");
};
const selectPlan = () => {
  if (select.style.transform === "translateX(15px)") {
    select.style.transform = "translateX(0px)";
  } else {
    select.style.transform = "translateX(15px)";
  }

  toogle();
};
//Events
btnSelect.addEventListener("click", selectPlan);
