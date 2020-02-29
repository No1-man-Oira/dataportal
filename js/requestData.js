/**
 * ナイトメア所持データを取得
 */
const getHasNightmareData = async () => {
  const data = await getData('https://script.google.com/macros/s/AKfycbzaTUARnpJ-zaVfIjOnlUnONAbHFdXp82MGnLhj6lW-nCJjmHg/exec');

  const keys = Object.keys(data[0]);
  keys.forEach((key) => {
    // 名前はスキップ
    if (key !== 'name') setCard(data, key);
  });

  document.getElementById('loading').style.display = 'none';
  document.getElementById('contents').style.display = 'block';
}

getHasNightmareData();
