/**
* クリックでクラスを付け外し
**/
const onClickSwitchClass = () => {
  const card = document.getElementsByClassName('card-2');
  const img = document.getElementsByClassName('cardImg');

  for (let i = 0; i < card.length; i++) {
    const targetCard = card[i];
    const targetImg = img[i];
    targetCard.addEventListener('click', () => switchClass([targetCard, targetImg], 'has'));
  }
};

onClickSwitchClass();
