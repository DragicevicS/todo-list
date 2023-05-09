export default function editTaskLoad(id) {
  const newDiv = () => document.createElement('div');
  const newLabel = () => document.createElement('label');
  const newOption = () => document.createElement('option');
  const newInput = () => document.createElement('input');

  let defaultTaskList = [];
  let taskList = localStorage.getItem('taskList');
  taskList = JSON.parse(taskList || JSON.stringify(defaultTaskList));

  const contentDiv = document.querySelector('.content');
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  h2.textContent = 'Edit task';
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
  titleInput.value = taskList[id].title;
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  const detailsLabel = newLabel();
  detailsLabel.textContent = 'Details';
  const detailsTextarea = document.createElement('textarea');
  detailsTextarea.setAttribute('name', 'details');
  detailsTextarea.setAttribute('id', 'details');
  detailsTextarea.setAttribute('rows', '3');
  detailsTextarea.setAttribute('maxlength', '250');
  detailsTextarea.setAttribute('placeholder', 'Short description of the task...');
  detailsTextarea.setAttribute('autocomplete', 'off');
  detailsTextarea.value = taskList[id].details;
  form.appendChild(detailsLabel);
  form.appendChild(detailsTextarea);

  const categoryLabel = newLabel();
  categoryLabel.textContent = 'Choose category';
  const categorySelect = document.createElement('select');
  categorySelect.setAttribute('name', 'category');
  categorySelect.setAttribute('id', 'category');
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
  if (taskList[id].category == 'Work') optionWork.selected = true;
  if (taskList[id].category == 'Personal') optionPersonal.selected = true;
  if (taskList[id].category == 'Hobbies') optionHobbies.selected = true;
  if (taskList[id].category == 'Other') optionOther.selected = true;
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
  const importantInputNoLabel = newLabel();
  importantInputNoLabel.textContent = 'No';
  importantInputNoLabel.setAttribute('for', 'no');
  if (taskList[id].important == 'true') importantInputYes.checked = true;
  if (taskList[id].important == 'false') importantInputNo.checked = true;
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
  dateInput.value = taskList[id].date;
  dateDiv.appendChild(dateInput);
  form.appendChild(dateDiv);

  const btnDiv = newDiv();
  btnDiv.classList.add('btn-div');
  const submitEditBtn = newInput();
  submitEditBtn.setAttribute('type', 'submit');
  submitEditBtn.setAttribute('name', 'submit');
  submitEditBtn.setAttribute('id', 'submit');
  submitEditBtn.classList.add('btn');
  submitEditBtn.value = 'Edit'
  btnDiv.appendChild(submitEditBtn);
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.classList.add('btn');
  btnDiv.appendChild(cancelBtn);
  form.appendChild(btnDiv);

  const para = document.createElement('p');
  form.appendChild(para);

  function validateForm() {
    if (titleInput.value == '') {
      titleInput.style.borderColor = '#ff8080';
      para.textContent = 'Please fill out all the required fields.';
    } else titleInput.style.borderColor = '#BBE1FA';
    if (dateInput.value == '') {
      dateInput.style.borderColor = '#ff8080';
      para.textContent = 'Please fill out all the required fields.';
    } else dateInput.style.borderColor = '#BBE1FA';
  };

  submitEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm();
    if (titleInput.value != '' && dateInput.value != '') {
      taskList[id].title = document.getElementById('title').value;
      taskList[id].details = document.getElementById('details').value;
      taskList[id].category = document.getElementById('category').value;
      taskList[id].important = document.querySelector('input[name="important"]:checked').id;
      taskList[id].date = document.getElementById('date').value;

      window.localStorage.setItem('taskList', JSON.stringify(taskList));

      para.textContent = 'Task edited successfully!'
    };
  });
};