// function clickDropdownButton() {
//   alert('hamburger');
// }

// const eventClickDropdownButton = function() {
//   const clickDropdownButton = document.querySelector('#dropdownButton');
//   console.log(clickDropdownButton);
//   clickDropdownButton.addEventListener('click', function(e) {
//     alert('hamburger');
//   });
// };

const eventClickDropdownButton = function() {
  const clickDropdownButton = document.querySelector('#dropdownButton');
  const dropdownColorMenu = document.querySelector('.dropdownColorMenu');
  clickDropdownButton.addEventListener('click', function(e) {
    dropdownColorMenu.classList.toggle('dropdownColorMenuAppears');
  });
};

const eventClickHomeButton = function() {
  const documentBody = document.body;
  const clickHomeButton = document.querySelector('#homeButton');
  const dropdownColorMenu = document.querySelector('.dropdownColorMenu');
  clickHomeButton.addEventListener('click', function(e) {
    documentBody.classList.remove(
      'redBackground',
      'orangeBackground',
      'yellowBackground',
      'greenBackground',
      'blueBackground',
      'brownBackground'
    ); // Dit moet makkelijker kunnen met for each functie, maar wegens gebrek aan tijd even zo.
    dropdownColorMenu.classList.remove('dropdownColorMenuAppears');
  });
};

const eventClickRedButton = function() {
  const documentBody = document.body;
  const clickRedButton = document.querySelector('#redButton');
  const dropdownColorMenu = document.querySelector('.dropdownColorMenu');
  clickRedButton.addEventListener('click', function(e) {
    documentBody.classList.remove(
      'redBackground',
      'orangeBackground',
      'yellowBackground',
      'greenBackground',
      'blueBackground',
      'brownBackground'
    );
    documentBody.classList.add('redBackground');
    dropdownColorMenu.classList.remove('dropdownColorMenuAppears');
  });
};

const eventClickOrangeButton = function() {
  const documentBody = document.body;
  const clickOrangeButton = document.querySelector('#orangeButton');
  const dropdownColorMenu = document.querySelector('.dropdownColorMenu');
  clickOrangeButton.addEventListener('click', function(e) {
    documentBody.classList.remove(
      'redBackground',
      'orangeBackground',
      'yellowBackground',
      'greenBackground',
      'blueBackground',
      'brownBackground'
    );
    documentBody.classList.add('orangeBackground');
    dropdownColorMenu.classList.remove('dropdownColorMenuAppears');
  });
};

const eventClickYellowButton = function() {
  const documentBody = document.body;
  const clickYellowButton = document.querySelector('#yellowButton');
  const dropdownColorMenu = document.querySelector('.dropdownColorMenu');
  clickYellowButton.addEventListener('click', function(e) {
    documentBody.classList.remove(
      'redBackground',
      'orangeBackground',
      'yellowBackground',
      'greenBackground',
      'blueBackground',
      'brownBackground'
    );
    documentBody.classList.add('yellowBackground');
    dropdownColorMenu.classList.remove('dropdownColorMenuAppears');
  });
};

const eventClickGreenButton = function() {
  const documentBody = document.body;
  const clickGreenButton = document.querySelector('#greenButton');
  const dropdownColorMenu = document.querySelector('.dropdownColorMenu');
  clickGreenButton.addEventListener('click', function(e) {
    documentBody.classList.remove(
      'redBackground',
      'orangeBackground',
      'yellowBackground',
      'greenBackground',
      'blueBackground',
      'brownBackground'
    );
    documentBody.classList.add('greenBackground');
    dropdownColorMenu.classList.remove('dropdownColorMenuAppears');
  });
};

const eventClickBlueButton = function() {
  const documentBody = document.body;
  const clickBlueButton = document.querySelector('#blueButton');
  const dropdownColorMenu = document.querySelector('.dropdownColorMenu');
  clickBlueButton.addEventListener('click', function(e) {
    documentBody.classList.remove(
      'redBackground',
      'orangeBackground',
      'yellowBackground',
      'greenBackground',
      'blueBackground',
      'brownBackground'
    );
    documentBody.classList.add('blueBackground');
    dropdownColorMenu.classList.remove('dropdownColorMenuAppears');
  });
};

const eventClickBrownButton = function() {
  const documentBody = document.body;
  const clickBrownButton = document.querySelector('#brownButton');
  const dropdownColorMenu = document.querySelector('.dropdownColorMenu');
  clickBrownButton.addEventListener('click', function(e) {
    documentBody.classList.remove(
      'redBackground',
      'orangeBackground',
      'yellowBackground',
      'greenBackground',
      'blueBackground',
      'brownBackground'
    );
    documentBody.classList.add('brownBackground');
    dropdownColorMenu.classList.remove('dropdownColorMenuAppears');
  });
};

document.addEventListener('DOMContentLoaded', function(event) {
  eventClickDropdownButton();
  eventClickHomeButton();
  eventClickRedButton();
  eventClickOrangeButton();
  eventClickYellowButton();
  eventClickGreenButton();
  eventClickBlueButton();
  eventClickBrownButton();
});
