const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<header class="header">
      <div class="headerContent">
        <a href="index.html" class="logo">
          <p class="srOnly">Home</p>
          <img src="./images/Logo.webp" alt="Dafna – Room for healing" width="75" height="80" aria-hidden="true" class="logo">
        </a>
          <nav class="headerNav">
            <button id="hamburgerButton">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
                <p class="srOnly">Menu</p>
              </svg>
            </button>
            <ul class="headerLinks">
              <li class="menuListItem mobileMenuSpecifics" id="menuClose">
                <button class="closeButton">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                  </svg>
                  <p class="srOnly">Close</p>
                </button>
              </li>
              <li class="menuListItem homeLinkMobile"><a href="index.html" class="link">Home</a></li>
              <li class="menuListItem"><a href="bodywork.html" class="link">Holistic bodywork</a></li>
              <li class="menuListItem"><a href="yoga.html" class="link">Yoga</a></li>
              <li class="menuListItem"><a href="corporate.html" class="link">Corporate</a></li>
              <li class="menuListItem"><a href="about.html" class="link">About</a></li>
              <li class="menuListItem"><a href="contact.html" class="button greenButton">Get in touch</a></li>
              <li id="mobileMenuLogo" aria-hidden="true">
                <img src="./images/Logo.webp" alt="Dafna – Room for healing" width="150" height="160" aria-hidden="true" class="largeLogo">
              </li>
            </ul>
          </nav>
      </div>
    </header>
`;

export function addHeader(whereAdd) {
  if (!document.querySelector('.header')){ // Ensure it only creates a header if there are none.
  whereAdd.prepend(headerTemplate.content.cloneNode(true));
  }
}