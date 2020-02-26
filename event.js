const img = document.getElementsByTagName('img');
const card = document.getElementsByClassName('card-2');

const switchClass = (elements) => {
  for (let i = 0; i < card.length; i++) {
    const element = elements[i];

    element.addEventListener('click', () => {
      element.classList.contains('has') ? 
      element.classList.remove('has') : 
      element.classList.add('has');
    });
  }
};

switchClass(img);
switchClass(card);