export default function footerLoad() {
  const footer = document.querySelector('footer');
  const p = document.createElement('p');
  p.textContent = 'Copyright © 2023 DragicevicS';
  footer.appendChild(p);
};