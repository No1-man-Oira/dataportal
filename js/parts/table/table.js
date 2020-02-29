let tableChildren = '';
const skillTypeList = Object.keys(nightmareList);
skillTypeList.forEach((skillType) => {
  tableChildren += thead(skillType) + tbody(skillType);
});

document.write(`
  <table class="table is-fullwidth" id="contentTable">
    ${tableChildren}
  </table>
`);
  