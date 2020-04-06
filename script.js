const eventClickColormenuButton = function () {
  const colormenuButton = document.querySelector('#colormenu-button');
  const colormenu = document.querySelector('.colormenu');
  colormenuButton.addEventListener('click', function (event) {
    colormenu.classList.toggle('colormenu-appears');
  });
};

// const eventClickHomeButton = function () {
//   const clickHomeButton = document.querySelector('#grey');
//   const colormenu = document.querySelector('.colormenu');
//   clickHomeButton.addEventListener('click', function (e) {
//     document.body.style.backgroundColor = 'grey';
//     colormenu.classList.remove('colormenu-appears');
//   });
// };

// const eventClickRedButton = function () {
//   const clickRedButton = document.querySelector('#red');
//   const colormenu = document.querySelector('.colormenu');
//   clickRedButton.addEventListener('click', function (e) {
//     document.body.style.backgroundColor = clickRedButton.id;
//     colormenu.classList.remove('colormenu-appears');
//   });
// };

const eventClickColorButton = function () {
  const colorButtons = document.getElementsByName('color');
  const colormenu = document.querySelector('.colormenu');
  const h2 = document.getElementById('select');
  colorButtons.forEach((colorButton) =>
    colorButton.addEventListener('click', function (e) {
      document.body.style.backgroundColor = colorButton.id;
      h2.innerHTML = `selected color: ${colorButton.id}`;
      colormenu.classList.remove('colormenu-appears');
    })
  );
};

document.addEventListener('DOMContentLoaded', function (event) {
  eventClickColormenuButton();
  //   eventClickHomeButton();
  //   eventClickRedButton();
  eventClickColorButton();
});
