const newDiv = () => document.createElement('div');
const newImg = () => document.createElement('img');
const newLi = () => document.createElement('li');
const newA = () => document.createElement('a');
const newP = () => document.createElement('p');

const contentDiv = document.querySelector('.content');

export function homeLoad() {
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  contentDiv.appendChild(h2);
  h2.textContent = 'Home - All Tasks';
  const taskListDiv = newDiv();
  taskListDiv.classList.add('task-list-div');
  contentDiv.appendChild(taskListDiv);
};

export function todayLoad() {
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  contentDiv.appendChild(h2);
  h2.textContent = 'Today';
  const taskListDiv = newDiv();
  taskListDiv.classList.add('task-list-div');
  contentDiv.appendChild(taskListDiv);
};

export function thisWeekLoad() {
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  contentDiv.appendChild(h2);
  h2.textContent = 'This week';
  const taskListDiv = newDiv();
  taskListDiv.classList.add('task-list-div');
  contentDiv.appendChild(taskListDiv);
};

export function importantLoad() {
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  contentDiv.appendChild(h2);
  h2.textContent = 'Important';
  const taskListDiv = newDiv();
  taskListDiv.classList.add('task-list-div');
  contentDiv.appendChild(taskListDiv);
};

export function workLoad() {
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  contentDiv.appendChild(h2);
  h2.textContent = 'Work';
  const taskListDiv = newDiv();
  taskListDiv.classList.add('task-list-div');
  contentDiv.appendChild(taskListDiv);
};

export function personalLoad() {
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  contentDiv.appendChild(h2);
  h2.textContent = 'Personal';
  const taskListDiv = newDiv();
  taskListDiv.classList.add('task-list-div');
  contentDiv.appendChild(taskListDiv);
};

export function hobbiesLoad() {
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  contentDiv.appendChild(h2);
  h2.textContent = 'Hobbies';
  const taskListDiv = newDiv();
  taskListDiv.classList.add('task-list-div');
  contentDiv.appendChild(taskListDiv);
};

export function otherLoad() {
  contentDiv.textContent = '';
  const h2 = document.createElement('h2');
  contentDiv.appendChild(h2);
  h2.textContent = 'Other';
  const taskListDiv = newDiv();
  taskListDiv.classList.add('task-list-div');
  contentDiv.appendChild(taskListDiv);
};