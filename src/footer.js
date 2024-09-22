const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
    <footer>
      <ul class="socialMediaList">
        <li class="socialMediaListItem">
          <a href="https://www.facebook.com/dafnabyoga" class="socialMediaLink">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img">
              <title>Facebook</title>
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        </li>
        <li class="socialMediaListItem">
          <a href="https://www.youtube.com/@dafnabyoga" class="socialMediaLink">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube" role="img">
              <title>Youtube</title>
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
              <path d="m10 15 5-3-5-3z"/>
            </svg>
          </a>
        </li>
        <li class="socialMediaListItem">
          <a href="https://www.instagram.com/dafna.b.yoga/" class="socialMediaLink">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram" role="img">
              <title>Instagram</title>
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
        </li>
      </ul>
      <p class="footerText">dafnab.yoga@gmail.com</p>
      <p class="footerText">© Dafna Baruch 2024</p>
    </footer>
`;

export function addFooter(whereAdd) {
  if (!document.querySelector('footer')){ // Ensure it only creates a footer if there are none.
  whereAdd.append(headerTemplate.content.cloneNode(true));
  }
}