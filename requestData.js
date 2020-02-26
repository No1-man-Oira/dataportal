const getData = async () => {
  const response = await fetch('https://script.google.com/macros/s/AKfycbyDHR0CRMH8vAUGPHpOv-rKOt9pquHJzTygGn1vE0KQMYnYOSEY/exec');
  const data = await response.json();
  const saber = data[0].saber.split(',');

  saber.forEach((name) => {
    const elements = document.getElementsByClassName(name);
    if (elements) {
      elements[0].classList.add('has'); // カード
      elements[1].classList.add('has'); // img
    }

    const checkbox = document.getElementById(name);
    if (checkbox) checkbox.checked = true;
  });

  document.getElementById('loading').style.display = 'none';
  document.getElementById('contents').style.display = 'block';
}

getData();
