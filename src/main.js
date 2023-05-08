import checked from './images/checked.png';
import unchecked from './images/unchecked.png';
import star from './images/star.png';
import starEmpty from './images/star-empty.png';
import info from './images/info.png';
import remove from './images/remove.png';
import { format, isThisWeek } from 'date-fns';

const newDiv = () => document.createElement('div');
const newImg = () => document.createElement('img');
const newLi = () => document.createElement('li');
const newA = () => document.createElement('a');
const newSpan = () => document.createElement('span');

const contentDiv = document.querySelector('.content');
const h2 = document.createElement('h2');
const taskListDiv = newDiv();
taskListDiv.classList.add('task-list-div');

function listTasks(category) {
  taskListDiv.textContent = '';
  let defaultTaskList = [];
  let taskList = localStorage.getItem('taskList');
  taskList = JSON.parse(taskList || JSON.stringify(defaultTaskList));

  for (let i=0; i < taskList.length; i++) {
    let currentDate = new Date().toJSON().slice(0, 10);
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

    function appendList() {
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

    if (category == 'home') { appendList(); removeTask(category); }
    else if (category == 'today') { if (taskList[i].date == currentDate) appendList(); removeTask(category); }
    else if (category == 'this week') { if (isThisWeek(new Date(taskList[i].date))) appendList(); removeTask(category); }
    else if (category == 'important') { if (taskList[i].important == 'true') appendList(); removeTask(category); }
    else if (category == 'work') { if (taskList[i].category == 'Work') appendList(); removeTask(category); }
    else if (category == 'personal') { if (taskList[i].category == 'Personal') appendList(); removeTask(category); }
    else if (category == 'hobbies') { if (taskList[i].category == 'Hobbies') appendList(); removeTask(category); }
    else if (category == 'other') { if (taskList[i].category == 'Other') appendList(); removeTask(category); }
    else return;
  };
};

const removeTask = (category) => {
  const removeBtn = document.querySelectorAll('.remove-img');
  for (let i=0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener('click', (e) => {
    const taskId = e.target.closest('div').id;
    const taskList = JSON.parse(localStorage.getItem('taskList'));
    taskList.splice(taskId, 1);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    listTasks(category);
  });
  };
};

export function homeLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Home - All Tasks';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  listTasks('home');
};

export function todayLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Today';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
  listTasks('today');
};

export function thisWeekLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'This week';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
  listTasks('this week');
};

export function importantLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Important';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
  listTasks('important');
};

export function workLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Work';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
  listTasks('work');
};

export function personalLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Personal';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
  listTasks('personal');
};

export function hobbiesLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Hobbies';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
  listTasks('hobbies');
};

export function otherLoad() {
  contentDiv.textContent = '';
  h2.textContent = 'Other';
  contentDiv.appendChild(h2);
  contentDiv.appendChild(taskListDiv);
  taskListDiv.textContent = '';
  listTasks('other');
};