const mailingTemplate = document.createElement('template');

mailingTemplate.innerHTML = `
    <section id="mailingListSection" class="newsletter max1400 doubleElement">
      <div class="halfContainer mailingListImage">
        <img src="images/DSCF8389_11zon.webp" alt="Dafna in front of hay" loading="lazy" height="300px" class="image">
      </div>
      <div class="halfContainer">
        <h2>Join my newsletter</h2>
          <form id="newsletterEmailForm" class="halfContainerSmallGap">
            <div class="smallInputGap">
              <label for="newsletterEmail">Email</label>
              <input type="email" id="newsletterEmail" name="email" placeholder="youremail@email.com" maxlength="100" pattern="^.{2,}@.{2,}\..{2,}$" autocomplete="email" required>
            </div>
            <ul class="mailingListList">
              <li>
                <p>
                  Get notified first about workshops and events
                </p>
              </li>
              <li>
                <p>
                  Receive enriching content to improve your health and wellbeing
                </p>
              </li>
              <li>
                <p>
                  Sent once every couple of months
                </p>
              </li>
            </ul>
            <input type="submit" value="Subscribe" class="button greenButton">
            <output id="confirmation" name="confirmation" for="newsletterEmail" class="hidden">Thanks for signing up, I'll be in touch soon!</output>
          </form>
      </div>
    </section>
`;

export function addMailingSection(whereAdd) {
  if (!document.querySelector('#mailingListSection')){ // Ensure it only creates a mailing section if there are none.
  whereAdd.append(mailingTemplate.content.cloneNode(true));
  }
}

export function showConfirmation() {
  const confirmationElement = document.getElementById('confirmation');
  confirmationElement.classList.remove('hidden');
  confirmationElement.classList.add('visible');
}