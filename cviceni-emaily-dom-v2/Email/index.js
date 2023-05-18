console.log('Funguju!')

/*
<div class="email">
<div class="email__head">
  <button class="email__icon email__icon--${iconClass}"></button>
  <div class="email__info">
    <div class="email__sender">${email.sender.name}</div>
    <div class="email__subject">${email.subject}</div>
  </div>
  <div class="email__time">${email.time}</div>
</div>
<div class="email__body"></div>
</div>
*/

export const Email = (props) => {
    const { sender, subject, time, unread } = props
    
    const emailElm = document.createElement('div')
    emailElm.classList.add('email')

    let iconClass = 'opened'
    if (unread) {
        iconClass = 'closed'
    }

    emailElm.innerHTML = `
        <div class="email__head">
            <button class="email__icon email__icon--${iconClass}"></button>
            <div class="email__info">
                <div class="email__sender">${sender.name}</div>
                <div class="email__subject">${subject}</div>
            </div>
            <div class="email__time">${time}</div>
        </div>
        <div class="email__body"></div>
    `
     return emailElm
}