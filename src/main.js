import checked from './images/checked.png';
import unchecked from './images/unchecked.png';
import star from './images/star.png';
import starEmpty from './images/star-empty.png';
import info from './images/info.png';
import remove from './images/remove.png';

const newDiv = () => document.createElement('div');
const newImg = () => document.createElement('img');
const newLi = () => document.createElement('li');
const newA = () => document.createElement('a');
const newSpan = () => document.createElement('span');

const contentDiv = document.querySelector('.content');
const h2 = document.createElement('h2');
const taskListDiv = newDiv();
taskListDiv.classList.add('task-list-div');

function listTasks() {
  taskListDiv.textContent = '';
  let defaultTaskList = [];
  let taskList = localStorage.getItem('taskList');
  taskList = JSON.parse(taskList || JSON.stringify(defaultTaskList));
  
  for (let i=0; i < taskList.length; i++) {
    const checkedImg = newImg();
    checkedImg.setAttribute('src', checked);
    checkedImg.classList.add('list-img');
    const uncheckedImg = newImg();
    uncheckedImg.setAttribute('src', unchecked);
    uncheckedImg.classList.add('list-img');
    const starImg = newImg();
    starImg.setAttribute('src', star);
    starImg.classList.add('list-img');
    const starEmptyImg = newImg();
    starEmptyImg.setAttribute('src', starEmpty);
    starEmptyImg.classList.add('list-img');
    const infoImg = newImg();
    infoImg.setAttribute('src', info);
    infoImg.classList.add('list-img');
    const removeImg = newImg();
    removeImg.setAttribute('src', remove);
    removeImg.classList.add('list-img', 'remove-img');

    let task = taskList[i];
    let taskInfo = newDiv();
    taskInfo.setAttribute('id', i);
    taskInfo.classList.add('list-item');

    if (task.checked == 'false') taskInfo.appendChild(uncheckedImg);
    if (task.checked == 'true') taskInfo.appendChild(checkedImg);

    const title = newSpan();
    title.textContent = task.title;
    taskInfo.appendChild(title);

    const date = newSpan();
    date.textContent = task.date;
    taskInfo.appendChild(date);

    if (task.important == 'false') taskInfo.appendChild(starEmptyImg);
    if (task.important == 'true') taskInfo.appendChild(starImg);

    taskInfo.appendChild(infoImg);
    taskInfo.appendChild(removeImg);

    taskListDiv.appendChild(taskInfo);
  };
};





export function homeLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Home - All Tasks';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  listTasks();

  const removeBtn = document.querySelectorAll('.remove-img');
  for (let i=0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener('click', (e) => {
    const taskId = e.target.closest('div').id;
    const taskList = JSON.parse(localStorage.getItem('taskList'));
    taskList.splice(taskId, 1);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    listTasks();
  });
  };
};

export function todayLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Today';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
};

export function thisWeekLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'This week';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
};

export function importantLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Important';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
};

export function workLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Work';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
};

export function personalLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Personal';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
};

export function hobbiesLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Hobbies';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
};

export function otherLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Other';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
};