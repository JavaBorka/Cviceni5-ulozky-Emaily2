import { Email } from "../Email/index.js"

export const EmailSection = (props) => {
    const { heading, emails, folder } = props
    
    const inboxElm = document.createElement('section')
    inboxElm.classList.add('inbox')
    inboxElm.innerHTML = `
        <h2>${heading}</h2>
        <div class="emails" id="${folder}">${emails}</div>
    `
    const emailsElm = inboxElm.querySelector('.emails')
    emailsElm.append(...emails.map(email => Email(email)))

    if (emails.length === 0) {
        fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=${folder}`)
        .then((response) => response.json())
        .then(data => {
            inboxElm.replaceWith(
                EmailSection({
                    heading: heading,
                    emails: data.emails,
                    folder: folder
                })
            )
        }) 
    } 

    return inboxElm
  }
