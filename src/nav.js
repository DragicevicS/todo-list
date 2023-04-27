import navLogo from './images/nav-logo.png';
import star from './images/star.png';
import week from './images/week.png';
import today from './images/today.png';
import home from './images/home.png';
import work from './images/work.png';
import personal from './images/personal.png';
import hobbies from './images/hobbies.png';

export default function navLoad() {
  const nav = document.querySelector('nav');
  nav.style.display = 'flex';
  const newDiv = () => document.createElement('div');
  const newImg = () => document.createElement('img');
  const newLi = () => document.createElement('li');
  const newA = () => document.createElement('a');
  const newP = () => document.createElement('p');

  const navLogoDiv = newDiv();
  navLogoDiv.classList.add('nav-logo-div');

  nav.appendChild(navLogoDiv);

  const navLogoImg = newImg();
  navLogoImg.setAttribute('src', navLogo);
  const h1 = document.createElement('h1');
  h1.textContent = 'TDL';

  navLogoDiv.appendChild(navLogoImg);
  navLogoDiv.appendChild(h1);

  const ul1 = document.createElement('ul');
  ul1.classList.add('ul-1');
  const ul2 = document.createElement('ul');
  ul2.classList.add('ul-2');

  nav.appendChild(ul1);

  ul1.appendChild(newLi());
  ul1.appendChild(newLi());
  ul1.appendChild(newLi());
  ul1.appendChild(newLi());

  const homeA = newA();
  ul1.firstElementChild.appendChild(homeA);
  homeA.appendChild(newImg());
  homeA.appendChild(newP());
  homeA.firstElementChild.setAttribute('src', home);
  homeA.lastElementChild.textContent = 'Home';

  const todayA = newA();
  ul1.children[1].appendChild(todayA);
  todayA.appendChild(newImg());
  todayA.appendChild(newP());
  todayA.firstElementChild.setAttribute('src', today);
  todayA.lastElementChild.textContent = 'Today';

  const thisWeekA = newA();
  ul1.children[2].appendChild(thisWeekA);
  thisWeekA.appendChild(newImg());
  thisWeekA.appendChild(newP());
  thisWeekA.firstElementChild.setAttribute('src', week);
  thisWeekA.lastElementChild.textContent = 'This Week';

  const importantA = newA();
  ul1.lastElementChild.appendChild(importantA);
  importantA.appendChild(newImg());
  importantA.appendChild(newP());
  importantA.firstElementChild.setAttribute('src', star);
  importantA.lastElementChild.textContent = 'Important';

  nav.appendChild(document.createElement('hr'));

  nav.appendChild(ul2);

  ul2.appendChild(newLi());
  ul2.appendChild(newLi());
  ul2.appendChild(newLi());
  ul2.appendChild(newLi());

  const workA = newA();
  ul2.firstElementChild.appendChild(workA);
  workA.appendChild(newImg());
  workA.appendChild(newP());
  workA.firstElementChild.setAttribute('src', work);
  workA.lastElementChild.textContent = 'Work';

  const personalA = newA();
  ul2.children[1].appendChild(personalA);
  personalA.appendChild(newImg());
  personalA.appendChild(newP());
  personalA.firstElementChild.setAttribute('src', personal);
  personalA.lastElementChild.textContent = 'Personal';

  const hobbiesA = newA();
  ul2.children[2].appendChild(hobbiesA);
  hobbiesA.appendChild(newImg());
  hobbiesA.appendChild(newP());
  hobbiesA.firstElementChild.setAttribute('src', hobbies);
  hobbiesA.lastElementChild.textContent = 'Hobbies';
};