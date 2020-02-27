/**
* 属性を複数追加する
* @param target 追加先エレメント: HTMLElement
* @param attributes 追加属性: [type: string, value: string][]
**/
const setAttributes = (target, attributes) => {
  attributes.forEach((attribute) => {
    target.setAttribute(attribute[0], attribute[1]);
  });
}

/**
* 画像URL
* @param imgNum カード番号: string
**/
const IMGURL = (imgNum) => `https://sinoalice.game-db.tw/images/card/CardS${imgNum}.png`;

/**
* カラム名のディスプレイ表記
*
**/
const columnMap = {
  buff: 'バフ',
  debuff: 'デバフ'
}
