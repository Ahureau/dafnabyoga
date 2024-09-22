import "./styles/main.css";

import { addHeader } from './header.js';
import { addFooter } from "./footer.js";

const body = document.body;

addHeader(body);
addFooter(body);

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburgerButton');
    const headerLinks = document.querySelector('.headerLinks');
    const menuClose = document.getElementById('menuClose');

    hamburgerButton.addEventListener('click', () => {
        headerLinks.classList.add('active');
    });

    menuClose.addEventListener('click', () => {
        headerLinks.classList.remove('active');
    });
  });
  
  

