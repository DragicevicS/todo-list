import sidebar from './images/sidebar.png';
import account from './images/account.png';
import add from './images/add.png';
import addTaskLoad from './add-task';

export default function headerLoad() {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const newDiv = () => document.createElement('div');
  const newImg = () => document.createElement('img');

  const sidebarBtnDiv = newDiv();
  sidebarBtnDiv.classList.add('sidebar-btn-div');
  const h1Div = newDiv();
  h1Div.classList.add('h1-div');
  const profileDiv = newDiv();
  profileDiv.classList.add('profile-div');

  header.appendChild(sidebarBtnDiv);
  header.appendChild(h1Div);
  header.appendChild(profileDiv);

  const sidebarImg = newImg();
  sidebarImg.setAttribute('src', sidebar);

  sidebarBtnDiv.appendChild(sidebarImg);

  const h1 = document.createElement('h1');
  h1.textContent = 'ToDo List';

  h1Div.appendChild(h1);

  const addImg = newImg();
  addImg.setAttribute('src', add);
  const accountImg = newImg();
  accountImg.setAttribute('src', account);

  profileDiv.appendChild(addImg);
  profileDiv.appendChild(accountImg);

  // hiding / displaying the navigation on click
  sidebarImg.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
      nav.style.display = 'none';
      header.style.gridArea = '1/1/2/3';
      main.style.gridArea = '2/1/3/3';
      footer.style.gridArea = '3/1/4/3'
    } else {
      nav.style.display = 'flex';
      header.style.gridArea = '1/2/2/3';
      main.style.gridArea = '2/2/3/3';
      footer.style.gridArea = '3/2/4/3'
    };
  });

  // displaying "Add task" form on main
  addImg.addEventListener('click', addTaskLoad);

};