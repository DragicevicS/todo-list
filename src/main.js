import checked from './images/checked.png';
import unchecked from './images/unchecked.png';
import star from './images/star.png';
import starEmpty from './images/star-empty.png';
import info from './images/info.png';
import remove from './images/remove.png';
import { isToday, isThisWeek } from 'date-fns';
import editTaskLoad from './edit-task';

const newDiv = () => document.createElement('div');
const newImg = () => document.createElement('img');
const newSpan = () => document.createElement('span');

const body = document.querySelector('body');
const main = document.querySelector('main');
const contentDiv = document.querySelector('.content');
const h2 = document.createElement('h2');
const taskListDiv = newDiv();
taskListDiv.classList.add('task-list-div');

const detailsDiv = newDiv();
detailsDiv.classList.add('details-div');
detailsDiv.style.display = 'none';
detailsDiv.appendChild(newDiv());
detailsDiv.appendChild(newDiv());
detailsDiv.appendChild(newDiv());
detailsDiv.appendChild(newDiv());
detailsDiv.appendChild(newDiv());
detailsDiv.appendChild(newDiv());
detailsDiv.lastElementChild.classList.add('details-btn-div');

const editBtn = document.createElement('button');
editBtn.setAttribute('type', 'button');
editBtn.textContent = 'Edit';
editBtn.classList.add('details-btn', 'edit-btn');
const okBtn = document.createElement('button');
okBtn.setAttribute('type', 'button');
okBtn.textContent = 'Ok';
okBtn.classList.add('details-btn', 'ok-btn');
detailsDiv.lastElementChild.appendChild(editBtn);
detailsDiv.lastElementChild.appendChild(okBtn);

function listTasks(category) { // displays tasks filtering them based on category
  taskListDiv.textContent = '';
  let defaultTaskList = [];
  let taskList = localStorage.getItem('taskList');
  taskList = JSON.parse(taskList || JSON.stringify(defaultTaskList));
  
  for (let i=0; i < taskList.length; i++) {
    // creating img elements for every task
    const checkedImg = newImg();
    checkedImg.setAttribute('src', checked);
    checkedImg.classList.add('list-img', 'checked');
    const uncheckedImg = newImg();
    uncheckedImg.setAttribute('src', unchecked);
    uncheckedImg.classList.add('list-img', 'checked');
    const starImg = newImg();
    starImg.setAttribute('src', star);
    starImg.classList.add('list-img', 'important');
    const starEmptyImg = newImg();
    starEmptyImg.setAttribute('src', starEmpty);
    starEmptyImg.classList.add('list-img', 'important');
    const infoImg = newImg();
    infoImg.setAttribute('src', info);
    infoImg.classList.add('list-img', 'info');
    const removeImg = newImg();
    removeImg.setAttribute('src', remove);
    removeImg.classList.add('list-img', 'remove');

    function appendList() { // appends all html elements for selected task 
      let task = taskList[i];
      let taskInfo = newDiv();
      taskInfo.setAttribute('id', i);
      taskInfo.classList.add('list-item');

      if (task.checked == 'false') {
        taskInfo.appendChild(uncheckedImg);
        taskInfo.style.textDecoration = 'none';
        taskInfo.style.opacity = '1';
      }
      if (task.checked == 'true') {
        taskInfo.appendChild(checkedImg);
        taskInfo.style.textDecoration = 'line-through';
        taskInfo.style.opacity = '0.4';
      }

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

    // filtering task based on which category they belong and displaying them accordingly
    appendList();
    if (category == 'today') if (!isToday(new Date(taskList[i].date))) taskListDiv.children[i].style.display = 'none';
    if (category == 'this week') if (!isThisWeek(new Date(taskList[i].date))) taskListDiv.children[i].style.display = 'none';
    if (category == 'important') if (taskList[i].important != 'true') taskListDiv.children[i].style.display = 'none';
    if (category == 'work') if (taskList[i].category != 'Work') taskListDiv.children[i].style.display = 'none';
    if (category == 'personal') if (taskList[i].category != 'Personal') taskListDiv.children[i].style.display = 'none';
    if (category == 'hobbies') if (taskList[i].category != 'Hobbies') taskListDiv.children[i].style.display = 'none';
    if (category == 'other') if (taskList[i].category != 'Other') taskListDiv.children[i].style.display = 'none';
  };

  toggleDoneStatus(category);
  toggleImportantStatus(category); 
  removeTask(category);
  toggleTaskDetails(category);
  main.appendChild(detailsDiv);
};

const toggleDoneStatus = (category) => { // toggles status of a task in local storage
  const checkedBtn = document.querySelectorAll('.checked');
  for (let i=0; i < checkedBtn.length; i++) {
    checkedBtn[i].addEventListener('click', (e) => {
      const taskId = e.target.closest('div').id;
      const taskList = JSON.parse(localStorage.getItem('taskList'));
      taskList[taskId].checked = taskList[taskId].checked == 'true' ? 'false' : 'true';
      localStorage.setItem('taskList', JSON.stringify(taskList));
      listTasks(category);
    });
  };
};

const toggleImportantStatus = (category) => { // toggles importance status of a task in local storage
  const importantBtn = document.querySelectorAll('.important');
  for (let i=0; i < importantBtn.length; i++) {
    importantBtn[i].addEventListener('click', (e) => {
      const taskId = e.target.closest('div').id;
      const taskList = JSON.parse(localStorage.getItem('taskList'));
      taskList[taskId].important = taskList[taskId].important == 'true' ? 'false' : 'true';
      localStorage.setItem('taskList', JSON.stringify(taskList));
      listTasks(category);
    });
  };
};

const toggleTaskDetails = () => { // toggles display of the details window
  const infoBtn = document.querySelectorAll('.info');
  for (let i=0; i < infoBtn.length; i++) {
    infoBtn[i].addEventListener('click', (e) => {
      const taskId = e.target.closest('div').id;
      const taskList = JSON.parse(localStorage.getItem('taskList'));

      // display information about selected task
      detailsDiv.style.display = detailsDiv.style.display == 'flex' ? 'none' : 'flex';
      detailsDiv.firstElementChild.textContent = `Title: ${taskList[taskId].title}`;
      const details = taskList[taskId].details == '' ? 'none' : taskList[taskId].details;
      detailsDiv.children[1].textContent = `Details: ${details}`;
      detailsDiv.children[2].textContent = `Due date: ${taskList[taskId].date}`;
      detailsDiv.children[3].textContent = `Category: ${taskList[taskId].category}`;
      const important = taskList[taskId].important == 'true' ? 'yes' : 'no';
      detailsDiv.children[4].textContent = `Important: ${important}`;

      editBtn.addEventListener('click', (e) => {
        if (e.target.classList == 'details-btn edit-btn') editTaskLoad(taskId);
      });
      // clicking anywhere on the body hides details window
      if (detailsDiv.style.display == 'flex') {
        body.addEventListener('click', (e) => {
          if (e.target.classList != 'details-div' && e.target.classList != 'list-img info') detailsDiv.style.display = 'none';
        });
      };
    });
  };
};

const removeTask = (category) => { // removing tasks from locale storage
  const removeBtn = document.querySelectorAll('.remove');
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

// loading functions for each category
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