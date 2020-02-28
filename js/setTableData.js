/**
* ### 構造
*
*    <thead>
*      <tr>
*        <th>
*          <a href="">
*            <article class="media">
*              <div class="media-content">
*                <div class="content">${@param columnMap[@param skillType]}</div>
*             </div>
*            </article>
*          </a>
*        </th>
*      </tr>
*    </thead>
*
* @param skillType スキルタイプ名
*/
const createTableHead = (skillType) => {
  const content = document.createElement('div');
  content.classList.add('content');
  content.textContent = columnMap[skillType];

  const mediaContent = document.createElement('div');
  content.classList.add('media-content');
  mediaContent.appendChild(content);

  const media = document.createElement('div');
  content.classList.add('media');
  media.appendChild(mediaContent);

  const href = '';
  const anchor = document.createElement('a');
  anchor.setAttribute('href', href);
  anchor.appendChild(media);

  const th = document.createElement('th');
  th.appendChild(anchor);

  const tr = document.createElement('tr');
  tr.appendChild(th);

  const thead = document.createElement('thead');
  thead.appendChild(tr);

  return thead;
}

/**
* ### 構造
*
*    <tbody>
*      <td id="${@param skillType}">
*        <label for="${@param labelName}">
*          <div class="card-2">
*            <div class="content-img">
*              <img src="${IMGURL(@param imgNum)}">
*            </div>
*            <p class="content-1">${@param nightmareDescription1}</p>
*            <p class="content-2">${@param nightmareDescription2}</p>
*          </div>
*        </label>
*        <input id="${@param labelName}" type="checkbox" name="${@param skillType}" value="${@param labelName}">
*      </td>
*    </tbody>
*
* @param skillType スキルタイプ名
*/
const createTableBody = (skillType) => {
  const td = document.createElement('td');

  nightmareList[skillType].forEach(function (nightmare) {
    const nightmareData = nightmareDataMap(nightmare);

    const img = document.createElement('img');
    img.setAttribute('src', IMGURL(nightmareData.imgNum));
    img.classList.add('cardImg', nightmareData.labelName);

    const contentImg = document.createElement('div');
    contentImg.classList.add('content-img');
    contentImg.appendChild(img);

    const card = document.createElement('div');
    card.classList.add('card-2', nightmareData.labelName);
    card.addEventListener('click',
      () => window.setTimeout(
        () => sendForm('hasNightmareData'),
        0
      )
    );
    card.appendChild(contentImg);

    const skillDescription1 = document.createElement('p');
    skillDescription1.classList.add('content-1');
    skillDescription1.textContent = nightmareData.nightmareDescription1;
    card.appendChild(skillDescription1);

    const skillDescription2 = document.createElement('p');
    skillDescription2.classList.add('content-2');
    skillDescription2.textContent = nightmareData.nightmareDescription2;
    if (nightmareData.nightmareDescription2 === 'none') skillDescription2.style.visibility = 'hidden';
    card.appendChild(skillDescription2);

    const label = document.createElement('label');
    label.setAttribute('for', nightmareData.labelName);
    label.appendChild(card);

    const checkBox = document.createElement('input');
    const attributes = [
      ['type', 'checkbox'],
      ['id', nightmareData.labelName],
      ['name', skillType],
      ['value', nightmareData.labelName]
    ];
    attributes.forEach((attribute) => {
      checkBox.setAttribute(attribute[0], attribute[1]);
    });

    td.appendChild(label);
    td.appendChild(checkBox);
  });

  const tbody = document.createElement('tbody');
  tbody.appendChild(td);

  return tbody;
};

const table = document.getElementById('contentTable');
const skillTypeList = Object.keys(nightmareList);
skillTypeList.forEach((skillType) => {
  table.appendChild(createTableHead(skillType));
  table.appendChild(createTableBody(skillType));
});
