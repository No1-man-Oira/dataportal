const img = (imgNum, labelName) => `<img src="${IMGURL(imgNum)}" class="${'cardImg ' + labelName}">`;
const description1 = (nightmareDescription1) => `<p class="content-1">${nightmareDescription1}</p>`;
const description2 = (nightmareDescription2) => `
  <p class="content-2" ${(nightmareDescription2 === 'none') ? 'style="visibility: hidden;"' : ''}>
    ${nightmareDescription2}
  </p>
`;
const checkbox = (labelName, skillType) => `<input id="${labelName}" type="checkbox" name="${skillType}" value="${labelName}">`;
const label = (skillType) => {
  let label = '';

  nightmareList[skillType].forEach((nightmare) => {
    const nightmareData = nightmareDataMap(nightmare);

    label += `
      <label for="${nightmareData.labelName}">
        <div class="${'card-2 ' + nightmareData.labelName}">
          <div class="content-img">
            ${img(nightmareData.imgNum, nightmareData.labelName)}
          </div>
            ${description1(nightmareData.nightmareDescription1)}
            ${description2(nightmareData.nightmareDescription2)}
        </div>
      </label>
      ${checkbox(nightmareData.labelName, skillType)}
    `
  });

  return label;
}
const tbody = (skillType) => `
  <tbody>
    <td id="${skillType}">
      ${label(skillType)}
    </td>
  </tbody>
`;
