import "./styles/main.css";
import "./styles/index.css";
import "./styles/about.css";
import "./styles/yoga.css";
import "./styles/contact.css";
import "./styles/corporate.css";

import { addHeader } from './header.js';
import { addFooter } from "./footer.js";
import { addMailingSection, showConfirmation } from "./mailingList.js";

const body = document.body;

addHeader(body);
addMailingSection(body);
addFooter(body);


// Event listener for DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    // Header
    const hamburgerButton = document.getElementById('hamburgerButton');
    const headerLinks = document.querySelector('.headerLinks');
    const menuClose = document.getElementById('menuClose');

    hamburgerButton.addEventListener('click', () => {
        headerLinks.classList.add('active');
    });

    menuClose.addEventListener('click', () => {
        headerLinks.classList.remove('active');
    });

    // Mailing list form submit
    const form = document.getElementById('newsletterEmailForm');
    const confirmationOutput = document.querySelector('output');
    let isFormSubmitted = false; // Flag to track form submission
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
    
        if (isFormSubmitted) {
            return;
        }

        isFormSubmitted = true; // Set the flag to true if the submission is successful
    
        showConfirmation(confirmationOutput);
    
        const data = new FormData(form);
        const action = "https://script.google.com/macros/s/AKfycbwrHzmv-Bc1c3pAVNNjY6GzuX2Wwm2gcyNz12wHLuhKTEW1kB1fN_IaxK_MGsNu7R1lTg/exec"; // Get the action attribute from the form
        fetch(action, {
            method: 'POST',
            body: data,
        })
        .catch((error) => {
            confirmationOutput.style.display = 'none'; // Hide the output element if there's an error
            console.error('Error:', error);
            alert("Error submitting the form.");
            isFormSubmitted = false; // Reset the flag if there's an error
        });
    });
});






  
  

