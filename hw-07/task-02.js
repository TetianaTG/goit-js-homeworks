'use strict';

'use strict';

const liCounter = () => {
  let elements = [...document.querySelectorAll('.item ul')];
  let header = [...document.querySelectorAll('.item h2')];

  for (let i = 0; i < header.length; i += 1) {
    let elementChildrens = [...elements[i].children];
    let ulElements = elementChildrens.reduce((acc, element) => acc + 1, 0);
    console.dir(`Категория: ${header[i].textContent}`);
    console.log(`Количество элементов: ${ulElements}`);
  }
};

liCounter();