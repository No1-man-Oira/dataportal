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
  const columnName01 = 'saber';
  const tdIdSaber = document.getElementById(columnName01);

  servantList.saber.forEach(function (servant) {
    const servantName = servant[0];
    const servantImg = servant[1];
    const servantDescription = servant[2];

    const label = document.createElement('label');
    label.setAttribute('for', servantName);

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card-2');
    cardDiv.classList.add(servantName);
    cardDiv.addEventListener('click', () => window.setTimeout(() => sendForm(), 0));

    const contentImg = document.createElement('div');
    contentImg.classList.add('content-img');

    const img = document.createElement('img');
    img.setAttribute('src', servantImg);
    img.classList.add(servantName);

    const skillDescription = document.createElement('p');
    skillDescription.classList.add('content-1');
    skillDescription.textContent = servantDescription;

    contentImg.appendChild(img);
    cardDiv.appendChild(contentImg);
    cardDiv.appendChild(skillDescription);
    label.appendChild(cardDiv);

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('id', servantName);
    checkBox.setAttribute('name', columnName01);
    checkBox.setAttribute('value', servantName);

    tdIdSaber.appendChild(label);
    tdIdSaber.appendChild(checkBox);
  });
};

createTableData();
