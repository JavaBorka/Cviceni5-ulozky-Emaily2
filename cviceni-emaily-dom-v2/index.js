// import { Email } from "./Email/index.js";
import { EmailSection } from "./EmailSection/index.js";

/*
const renderSection = (emails, element) => {
  element.append(
    ...emails.map(email => Email(email))
  )
};

fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread`)
  .then((response) => response.json())
  .then((data) => renderSection(data.emails, document.getElementById('unread')));

fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read`)
  .then((response) => response.json())
  .then((data) => renderSection(data.emails, document.getElementById('read')));
*/

/**********  Cvičení 2 **********/

// Ve vašem projektu předělejte metodu renderSection na komponentu EmailSection. Komponenta bude očekávat props ve tvaru:
// const { heading, emails, folder } = props;

// <section class="inbox">
// <h2>Nepřečtené</h2>
// <div class="emails" id="unread"></div>
// </section>

const appElm = document.querySelector('#app')
appElm.append(
  EmailSection({
    heading: 'Nepřečtené',
    emails: [],
    folder: 'unread',
  }),
  EmailSection({
    heading: 'Přečtené',
    emails: [],
    folder: 'read',
  }),
)
