const cards = document.getElementsByClassName('card-2');
const imgs = document.getElementsByClassName('cardImg');

/**
* クリックでクラスを付け外し
**/
const onClickSwitchClass = () => {
  for (let i = 0; i < cards.length; i++) {
    const targetCard = cards[i];
    const targetImg = imgs[i];
    targetCard.addEventListener('click', () => switchClass([targetCard, targetImg], 'has'));
  }
};

/**
* カードをクリックでフォームを送信
**/
const setCardOnClickEvent = () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () =>
      window.setTimeout(() => 
        sendForm('hasNightmareData'), 
        10
      )
    );
  }
}

onClickSwitchClass();
setCardOnClickEvent();
