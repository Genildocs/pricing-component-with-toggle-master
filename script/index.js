import { cardsTemplate } from './plan.js';
import { selectPlan } from './functions.js';
const btnSelect = document.getElementById('btnSelect');

cardsTemplate;

//Events
btnSelect.addEventListener('click', selectPlan);
