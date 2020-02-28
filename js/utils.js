class Utils {
  /**
  * カラム名のディスプレイ表記
  *
  **/
  columnMap = {
    buff: 'バフ',
    debuff: 'デバフ',
    incrementSkill: 'スキル強化',
    decrementSkill: 'スキル軽減',
    skillRate: '補助',
    disadvantage: '劣勢',
    sp: 'SP',
    other: 'その他',
  }

  /**
  * 画像URL
  * @param imgNum カード番号: string
  **/
  IMGURL = imgNum => `https://sinoalice.game-db.tw/images/card/CardS${imgNum}.png`;

  /**
  * ナイトメアリストのデータマップ
  */
  nightmareDataMap(nightmare) {
    return {
      labelName: nightmare[0],
      imgNum: nightmare[1],
      nightmareDescription1: nightmare[2],
      nightmareDescription2: (nightmare.length === 4) ? nightmare[3] : 'none'
    }
  }

  /**
  * APIでデータを受け取る
  **/
  async getData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  /**
  * クラスをつけ外す
  * @param targetElement 指定先エレメント: HTMLElement[]
  * @param className クラス名: string
  **/
  switchClass(targetElements, className) {
    targetElements.forEach((targetElement) => {
      targetElement.classList.contains(className) ?
        targetElement.classList.remove(className) :
        targetElement.classList.add(className);
    })
  }

  /**
  * フォームを送信する
  **/
  sendForm(formId) {
    document.getElementById(formId).submit();
  };
}