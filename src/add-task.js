export default function addTaskLoad() {
  const newDiv = () => document.createElement('div');
  const newImg = () => document.createElement('img');
  const newLabel = () => document.createElement('label');
  const newInput = () => document.createElement('input');
  const newP = () => document.createElement('p');

  const contentDiv = document.querySelector('.content');
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  h2.textContent = 'Add a task';
  contentDiv.appendChild(h2);

  const form = document.createElement('form');
  contentDiv.appendChild(form);

  const titleLabel = newLabel();
  titleLabel.textContent = 'Title';
  titleLabel.setAttribute('for', 'title');
  const titleInput = newInput();
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'title');
  titleInput.setAttribute('id', 'title');
  titleInput.setAttribute('placeholder', 'What do you need to do?');
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  const detailsLabel = newLabel();
  detailsLabel.textContent = 'Details';
  detailsLabel.setAttribute('for', 'details');
  const detailsInput = newInput();
  detailsInput.setAttribute('type', 'textarea');
  detailsInput.setAttribute('name', 'details');
  detailsInput.setAttribute('id', 'details');
  detailsInput.setAttribute('placeholder', 'Short description of the taks...');
  form.appendChild(detailsLabel);
  form.appendChild(detailsInput);
};