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

// Mobile menu event listener
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


// Mailing list js
document.getElementById('newsletterEmailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const email = formData.get('email');

    fetch('https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec', {
        method: 'POST',
        body: new URLSearchParams({
            email: email,
            Date: new Date().toISOString() // Add the current date
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            document.querySelector('output[name="confirmation"]').style.display = 'block';
        } else {
            alert('Error: ' + data.error);
        }
    })
    .catch(error => {
        alert('Error: ' + error);
    });
});
  
  

