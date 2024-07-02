const cards = document.getElementById('cards');

const planos = [
  {
    plano: 'Basic',
    price: '$19.99',
    priceAnual: '$199.99',
    storage: '500 GB Storage',
    users: '2 Users Allowed',
    send: 'Send up to 3 GB',
  },
  {
    plano: 'Professional',
    price: '$24.99',
    priceAnual: '$249.99',
    storage: '1 TB Storage',
    users: '5 Users Allowed',
    send: 'Send up to 10 GB',
    bg: '#696fdd',
  },
  {
    plano: 'Master',
    price: '$39.99',
    priceAnual: '$399.99',
    storage: '2 TB Storage',
    users: '10 Users Allowed',
    send: 'Send up to 20 GB',
  },
];

const cardsTemplate = (plan) => `
        <ul
            class="relative mt-8 md:mt-0 md:w-[calc(100%/3)] 2xl:w-[calc(100%/4)] md:grow-0 md:shrink md:basis-[25%] 2xl:basis-[20%]">
            <li
              class="${
                plan === planos[1]
                  ? ' bg-[#696fdd] text-white md:h-[50vh] '
                  : ' bg-white '
              } mx-4 md:mx-0 rounded-md px-4 pt-4 pb-5 flex flex-col items-center card-1 isVisible shadow-card  ">
              <p class="opacity-70 my-4" id="planos">${
                plan.plano
              }</p>            
              <p class="text-5xl text-center my-3 opacity-70">${
                plan.priceAnual
              }</p>
              <div class="border-b w-full"></div>
              <p class="text-center my-3 opacity-70">${plan.storage}</p>
              <div class="border-b w-full"></div>
              <p class="text-center my-3 opacity-70">${plan.users}</p>
              <div class="border-b w-full"></div>
              <p class="text-center my-3 opacity-70">${plan.send}</p>
              <div class="border-b w-full"></div>
              <button
                class=" ${
                  plan === planos[1]
                    ? ' border-[1px] border-black hover:border-white border-solid '
                    : ' btnHover '
                } linearGradient self-stretch uppercase py-2 rounded-md mt-8 text-white text-sm ">
                Learn More
              </button>
            </li>
            <li
              class="${
                plan === planos[1]
                  ? ' bg-[#696fdd] text-white md:h-[50vh] '
                  : ' bg-white '
              } mx-4 md:mx-0 rounded-md px-4 pt-4 pb-5 flex flex-col items-center card-2 isVisible isHidden shadow-card md:grow-0 md:shrink md:basis-[25%] 2xl:basis-[20%] ">
              <p class="opacity-70 my-4">${plan.plano}</p>
              <p class="text-5xl text-center my-3 opacity-70">${plan.price}</p>
              <div class="border-b w-full"></div>
              <p class="text-center my-3 opacity-70">${plan.storage}</p>
              <div class="border-b w-full"></div>
              <p class="text-center my-3 opacity-70">${plan.users}</p>
              <div class="border-b w-full"></div>
              <p class="text-center my-3 opacity-70">${plan.send}</p>
              <div class="border-b w-full"></div>
              <button
                class=" ${
                  plan === planos[1]
                    ? ' border-[1px] border-black hover:border-white border-solid '
                    : ' btnHover '
                }  linearGradient self-stretch uppercase py-2 rounded-md mt-8 text-white text-sm ">
                Learn More
              </button>
            </li>
          </ul>
  `;

let replicatedCards = '';
for (let i = 0; i < planos.length; i++) {
  replicatedCards += cardsTemplate(planos[i]);
}
cards.innerHTML = replicatedCards;

export { cardsTemplate };
