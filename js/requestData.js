const setCard = (data, key) => {
  const column = data[0][key].split(',');

  column.forEach((name) => {
    const elements = document.getElementsByClassName(name);

    if (elements.length) {
      elements[0].classList.add('has'); // カード
      elements[1].classList.add('has'); // img
    }

    const checkbox = document.getElementById(name);
    if (checkbox) checkbox.checked = true;
  });
}

/**
 * ナイトメア所持データを取得
 */
const getHasNightmareData = async () => {
  const utils = new Utils();
  const data = await utils.getData('https://script.google.com/macros/s/AKfycbzaTUARnpJ-zaVfIjOnlUnONAbHFdXp82MGnLhj6lW-nCJjmHg/exec');

  const keys = Object.keys(data[0]);
  keys.forEach((key) => {
    if (key !== 'name') setCard(data, key);
  });

  document.getElementById('loading').style.display = 'none';
  document.getElementById('contents').style.display = 'block';
}

getHasNightmareData();
