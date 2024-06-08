const btnSelect = document.getElementById('btnSelect');
const select = document.getElementById('select');
const cardOne = document.querySelectorAll('.card-1');
const cardTwo = document.querySelectorAll('.card-2');

//Functions
const toogle = () => {
  cardOne.forEach((card) => {
    card.classList.toggle('isHidden');
  });
  cardTwo.forEach((card) => {
    card.classList.toggle('isHidden');
  });
};
const selectPlan = () => {
  if (select.style.transform === 'translateX(15px)') {
    select.style.transform = 'translateX(0px)';
  } else {
    select.style.transform = 'translateX(15px)';
  }

  toogle();
};
//Events
btnSelect.addEventListener('click', selectPlan);
