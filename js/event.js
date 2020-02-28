const card = document.getElementsByClassName('card-2');
const img = document.getElementsByClassName('cardImg');

/**
* クリックでクラスを付け外し
**/
const switchClass = () => {
  const switchHas = (element) => {
    element.classList.contains('has') ?
      element.classList.remove('has') :
      element.classList.add('has');
  }

  for (let i = 0; i < card.length; i++) {
    const targetCard = card[i];
    const targetImg = img[i];

    targetCard.addEventListener('click', () => {
      switchHas(targetCard);
      switchHas(targetImg);
    });
  }
};

/**
* スプレッドシートに送信
**/
const sendForm = () => document.getElementById("formID").submit();

switchClass();
