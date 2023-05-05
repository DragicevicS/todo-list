export default function addTaskLoad() {
  const newDiv = () => document.createElement('div');
  const newImg = () => document.createElement('img');
  const newLabel = () => document.createElement('label');
  const newOption = () => document.createElement('option');
  const newInput = () => document.createElement('input');

  const contentDiv = document.querySelector('.content');
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  h2.textContent = 'Add a task';
  contentDiv.appendChild(h2);

  const form = document.createElement('form');
  contentDiv.appendChild(form);

  const titleLabel = newLabel();
  titleLabel.textContent = 'Title';
  const titleInput = newInput();
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'title');
  titleInput.setAttribute('id', 'title');
  titleInput.setAttribute('placeholder', 'What do you need to do?');
  titleInput.setAttribute('autocomplete', 'off');
  titleInput.required = true;
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  const detailsLabel = newLabel();
  detailsLabel.textContent = 'Details (optional)';
  const detailsTextarea = document.createElement('textarea');
  detailsTextarea.setAttribute('name', 'details');
  detailsTextarea.setAttribute('id', 'details');
  detailsTextarea.setAttribute('rows', '3');
  detailsTextarea.setAttribute('maxlength', '250');
  detailsTextarea.setAttribute('placeholder', 'Short description of the task...');
  detailsTextarea.setAttribute('autocomplete', 'off');
  form.appendChild(detailsLabel);
  form.appendChild(detailsTextarea);

  const categoryLabel = newLabel();
  categoryLabel.textContent = 'Choose category';
  const categorySelect = document.createElement('select');
  categorySelect.setAttribute('name', 'category');
  categorySelect.setAttribute('id', 'category');
  categorySelect.required = true;
  const optionBlank = newOption();
  optionBlank.textContent = '';
  optionBlank.selected = true;
  optionBlank.value = '';
  const optionWork = newOption();
  optionWork.textContent = 'Work';
  optionWork.value = 'Work';
  const optionPersonal = newOption();
  optionPersonal.textContent = 'Personal';
  optionPersonal.value = 'Personal';
  const optionHobbies = newOption();
  optionHobbies.textContent = 'Hobbies';
  optionHobbies.value = 'Hobbies';
  const optionOther = newOption();
  optionOther.textContent = 'Other';
  optionOther.value = 'Other';
  categorySelect.appendChild(optionBlank);
  categorySelect.appendChild(optionWork);
  categorySelect.appendChild(optionPersonal);
  categorySelect.appendChild(optionHobbies);
  categorySelect.appendChild(optionOther);
  form.appendChild(categoryLabel);
  form.appendChild(categorySelect);

  const importantDiv = newDiv();
  importantDiv.classList.add('important-div');
  const importantLabel = newLabel();
  importantLabel.textContent = 'Important? ';
  importantDiv.appendChild(importantLabel);
  const importantInputDiv = newDiv();
  const importantInputYes = newInput();
  importantInputYes.setAttribute('type', 'radio');
  importantInputYes.setAttribute('name', 'important');
  importantInputYes.setAttribute('id', 'true');
  const importantInputYesLabel = newLabel();
  importantInputYesLabel.textContent = 'Yes';
  importantInputYesLabel.setAttribute('for', 'yes');
  const importantInputNo = newInput();
  importantInputNo.setAttribute('type', 'radio');
  importantInputNo.setAttribute('name', 'important');
  importantInputNo.setAttribute('id', 'false');
  importantInputNo.checked = true;
  const importantInputNoLabel = newLabel();
  importantInputNoLabel.textContent = 'No';
  importantInputNoLabel.setAttribute('for', 'no');
  importantInputDiv.appendChild(importantInputYes);
  importantInputDiv.appendChild(importantInputYesLabel);
  importantInputDiv.appendChild(importantInputNo);
  importantInputDiv.appendChild(importantInputNoLabel);
  importantDiv.appendChild(importantInputDiv);
  form.appendChild(importantDiv);

  const dateDiv = newDiv();
  dateDiv.classList.add('date-div');
  const dateLabel = newLabel();
  dateLabel.textContent = 'Date: ';
  dateDiv.appendChild(dateLabel);
  const dateInput = newInput();
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('name', 'date');
  dateInput.setAttribute('id', 'date');
  dateInput.required = true;
  dateDiv.appendChild(dateInput);
  form.appendChild(dateDiv);

  const btnDiv = newDiv();
  btnDiv.classList.add('btn-div');
  const submitBtn = newInput();
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('name', 'submit');
  submitBtn.setAttribute('id', 'submit');
  submitBtn.value = 'Add'
  btnDiv.appendChild(submitBtn);
  form.appendChild(btnDiv);


  const createTask = (title, details, category, important, date, checked) => {
    return {title, details, category, important, date, checked};
  };
  
  let defaultTaskList = [];
  let taskList = localStorage.getItem('taskList');
  taskList = JSON.parse(taskList || JSON.stringify(defaultTaskList));

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const details = document.getElementById('details').value;
    const category = document.getElementById('category').value;
    const important = document.querySelector('input[name="important"]:checked').id;
    const date = document.getElementById('date').value;

    const newTask = createTask(title, details, category, important, date, 'false');
    taskList.push(newTask);
    window.localStorage.setItem('taskList', JSON.stringify(taskList));
  });
};

