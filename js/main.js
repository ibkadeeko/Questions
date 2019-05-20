const menuToggle = document.querySelector('.menu-toggle'); // Menu Toggle
const navBar = document.querySelector('nav'); // Menu Toggle
const questionForm = document.querySelector('#question-form');

/** Toggles the menu display in a smaller view port */
if (menuToggle && navBar) {
  menuToggle.addEventListener('click', () => {
    navBar.classList.toggle('menu');
  });
}

/**
 * Returns all the values entered into a form when submitted
 * @param {object} evt - event
 * @param {object} form - HTML form Element
 */
function getValues(evt, form) {
  evt.preventDefault();
  const { elements } = form;
  const values = {};
  for (let i = 0; i < elements.length - 1; i += 1) {
    const item = elements.item(i);
    values[item.name] = item.value;
  }
  return values;
}

if (questionForm) {
  questionForm.addEventListener('submit', (evt) => {
    const values = getValues(evt, questionForm);
    console.log(values);
  });
}
