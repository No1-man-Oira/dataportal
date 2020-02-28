/**
* クリックでクラスを付け外し
**/
const onClickSwitchClass = () => {
  const utils = new Utils();
  const card = document.getElementsByClassName('card-2');
  const img = document.getElementsByClassName('cardImg');

  for (let i = 0; i < card.length; i++) {
    const targetCard = card[i];
    const targetImg = img[i];

    targetCard.addEventListener('click', () => utils.switchClass([targetCard, targetImg], 'has'));
  }
};

onClickSwitchClass();
