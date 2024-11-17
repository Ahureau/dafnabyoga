import "./styles/main.css";
import "./styles/index.css";
import "./styles/about.css";
import "./styles/yoga.css";
import "./styles/contact.css";
import "./styles/corporate.css";

import { addHeader } from './header.js';
import { addFooter } from "./footer.js";
import { addMailingSection } from "./mailingList.js";

const body = document.body;

addHeader(body);
addMailingSection(body);
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



  const scriptURL = 'https://script.google.com/macros/s/AKfycbxGzFYRbOIv6wUkb8fXUCQeHhyg2ORtn5F0iuM3uy8J6HjUNEHLslHwFW45hZESw_kSfA/exec';
  const form = document.querySelector('#form');
  const btn = document.querySelector('#submit');
  
  form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerHTML = "Loading...";
  
    console.log(form);
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        btn.disabled = false;
        btn.innerHTML = "Submit";
        alert('Success!', response);
      })
      .catch(error => {
        btn.disabled = false;
        btn.innerHTML = "Submit";
        alert('Error!', error.message);
      });
  });
  
  

