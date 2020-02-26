/**
* スプレッドシートに送信
**/
const sendForm = () => document.getElementById("formID").submit();

/**
* ### 構造

*    <td id="スプレッドシートのカラム名">
*      <label for="キャラ名">
*        <div class="card-2">
*          <div class="content-img">
*            <img src="">
*          </div>
*          <p class="content-1">スキル説明</p>
*        </div>
*      </label>
*      <input id="キャラ名" type="checkbox" name="スプレッドシートのカラム名" value="キャラ名">
*    </td>
*/
const createTableData = () => {
  const columnName01 = 'buff';
  const tdId = document.getElementById(columnName01);

  nightmareList.buff.forEach(function (nightmare) {
    const labelName = nightmare[0];
    const imgNum = nightmare[1];
    const nightmareDescription1 = nightmare[2];
    const nightmareDescription2 = (nightmare.length === 4) ? nightmare[3] : 'none';

    const label = document.createElement('label');
    label.setAttribute('for', labelName);

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card-2');
    cardDiv.classList.add(labelName);
    cardDiv.addEventListener('click', () => window.setTimeout(() => sendForm(), 0));

    const contentImg = document.createElement('div');
    contentImg.classList.add('content-img');

    const IMGURL = `https://sinoalice.game-db.tw/images/card/CardS${imgNum}.png`;
    const img = document.createElement('img');
    img.setAttribute('src', IMGURL);
    img.classList.add(labelName);

    const skillDescription1 = document.createElement('p');
    skillDescription1.classList.add('content-1');
    skillDescription1.textContent = nightmareDescription1;

    const skillDescription2 = document.createElement('p');
    skillDescription2.classList.add('content-2');
    skillDescription2.textContent = nightmareDescription2;
    if (nightmareDescription2 === 'none') skillDescription2.style.visibility = 'hidden';

    contentImg.appendChild(img);
    cardDiv.appendChild(contentImg);
    cardDiv.appendChild(skillDescription1);
    cardDiv.appendChild(skillDescription2);
    label.appendChild(cardDiv);

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('id', labelName);
    checkBox.setAttribute('name', columnName01);
    checkBox.setAttribute('value', labelName);

    tdId.appendChild(label);
    tdId.appendChild(checkBox);
  });
};

createTableData();
