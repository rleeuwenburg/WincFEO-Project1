const eventClickColormenuButton = function () {
  const colormenuButton = document.querySelector('#colormenu-button');
  const colormenu = document.querySelector('.colormenu');
  colormenuButton.addEventListener('click', function (event) {
    colormenu.classList.toggle('colormenu-appears');
  });
};

document.addEventListener('DOMContentLoaded', function (event) {
  eventClickColormenuButton();
});
