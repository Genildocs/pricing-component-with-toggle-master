const cardOne = document.querySelectorAll('.card-1');
const cardTwo = document.querySelectorAll('.card-2');
const select = document.getElementById('select');

const toogle = (cards) => {
  cards.forEach((card) => {
    card.classList.toggle('isHidden');
  });
};

const selectPlan = () => {
  if (select.style.transform === 'translateX(15px)') {
    select.style.transform = 'translateX(0px)';
  } else {
    select.style.transform = 'translateX(15px)';
  }

  toogle(cardOne);
  toogle(cardTwo);
};

export { selectPlan };
