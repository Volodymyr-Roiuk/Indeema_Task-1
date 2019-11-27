const formSubmit = (event) => {
  const money = Number(document.querySelector('#money').value);
  const price = Number(document.querySelector('#price').value);
  let resultStr = '';

  if (money < price) {
    resultStr = 'Покупець дав недостатню суму';
  } else if (isNaN(money)) {
    resultStr = 'В поле Сума введено некоректні дані';
  } else if (isNaN(price)) {
    resultStr = 'В поле Ціна введено некоректні дані';
  } else {
    resultStr = countChange(money, price);
  }

  alert(resultStr);
};

const countChange = (moneyValue, price) => {
  let change = moneyValue - price;
  let changeInCents = 0;

  const  dollars = Math.floor(change);
  change -= dollars;

  const  fiftyCents = Math.floor(change / 0.50);
  changeInCents += fiftyCents * 50;
  change %= 0.50;

  const twentyFiveCents = Math.floor( change / 0.25);
  changeInCents += twentyFiveCents * 25;
  change %= 0.25;

  const tenCents = Math.floor(change / 0.10);
  changeInCents += tenCents * 10;
  change %= 0.10;
  change += 0.001;

  const fiveCents = Math.floor(change / 0.05);
  changeInCents += fiveCents * 5;
  change %= 0.05;

  const oneCents = Math.floor(change / 0.01);
  changeInCents += oneCents;

  let resultStr = `Ваша решта: ${dollars} долари, ${changeInCents} центів. (по номіналу:`;

  if (dollars) resultStr += ` ${dollars} доллари,`;
  if (fiftyCents) resultStr += ` ${fiftyCents * 50} центів,`;
  if (twentyFiveCents) resultStr += ` ${twentyFiveCents * 25} центів,`;
  if (tenCents) resultStr += ` ${tenCents * 10} центів,`;
  if (fiveCents) resultStr += ` ${fiveCents * 5} центів,`;
  if (oneCents) resultStr += ` ${oneCents} центи по 1,`;

  resultStr = resultStr.replace(/,$/, ')');

  return resultStr;
};

const form = document.querySelector('form');
form.addEventListener('submit', formSubmit);
