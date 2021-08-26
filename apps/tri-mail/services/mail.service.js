import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const MailService = {
    query,
    getDate,
    getName,
    toggleRead,
    getNumOfUnread,
    deleteEmail,
    getEmailById
}

const gLoggedinUser = {
    email: 'user@triApp.com',
    fullname: 'Hakuna Matata'
}

const gEmails = storageService.loadFromStorage('InboxDB') || _createInboxEmails();

function query() {
    return Promise.resolve(gEmails)
}

function deleteEmail(emailToDlt) {
    const emailIdx = gEmails.findIndex(email => email.id === emailToDlt.id);
    gEmails.splice(emailIdx, 1)
    storageService.saveToStorage('InboxDB', gEmails);
    return Promise.resolve(gEmails)
}

function toggleRead(emailId, isRead) {
    const email = getEmailById(emailId)
        .then(email => {
            email.isRead = isRead;
        })
    storageService.saveToStorage('InboxDB', gEmails)
}

function getEmailById(id) {
    return Promise.resolve(gEmails.find(email => email.id === id));
}

function getNumOfUnread(emails) {
    const unReadEmails = emails.filter(email => !email.isRead);
    return unReadEmails.length
}

function getDate(date) {
    const newDate = new Date(date);
    const dates = newDate.toDateString().split(' ');

    return dates[1] + ' ' + dates[2]
}

function getName(email) {
    const deconstructedEmail = email.split('@');
    return deconstructedEmail[0];
}

function _createEmail(subject, body, from, to) {
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead: ((Math.random() > 0.5) ? true : false),
        isStar: ((Math.random() > 0.5) ? true : false),
        isSent: false,
        isDraft: false,
        isTrash: false,
        recievedAt: new Date(),
        from,
        to,
    }
}

function _createInboxEmails() {
    const inboxEmails = [
        _createEmail('Credit Card Invoice', 'Look at your payments here', 'LeumiCard@leumi.co.il', gLoggedinUser.email),
        _createEmail('I LOVE YOU!', 'Please lets get back together', 'Lover@loveme.co.il', gLoggedinUser.email),
        _createEmail('Spam Spam Spam', 'This is a click bite email, I dare you', 'spammer@spam.com', gLoggedinUser.email),
        _createEmail('Coding is AWESOME', 'All of this is hard coded dude!', 'CodimgAcademy@code.co.il', gLoggedinUser.email),
        _createEmail('Job Application', 'You are accepted to our honorable institute', 'usaGov@gov.com', gLoggedinUser.email),
        _createEmail('Commercial for soap', 'Here you will find the best soap ever!', 'Laline@laline.com', gLoggedinUser.email),
        _createEmail('GIVE ME MY MONEY', 'YOU OWE ME ALOT OF MONEY CMON', 'tomermorad@gmail.com', gLoggedinUser.email),
        _createEmail('Confirm your email address', 'Please confirm your address, it is not active', 'spotify@spot.co.il', gLoggedinUser.email),
        _createEmail('Your invoice waits here', 'Hello, this is your invoice for the prev month', 'Bezeq@bezeq.co.il', gLoggedinUser.email),
        _createEmail('Your account has been hacked', 'WARNING!!! your account has been hacked by a user in Beijin', 'google@google.com', gLoggedinUser.email),
        _createEmail('Your order has been accepted(16452)', 'The order you made from us has been accepted and is on the way!', 'Amazon@amaz.co.il', gLoggedinUser.email),
        _createEmail('Credit Card Invoice', 'Look at your payments here', 'LeumiCard@leumi.co.il', gLoggedinUser.email),
        _createEmail('I LOVE YOU!', 'Please lets get back together', 'Lover@loveme.co.il', gLoggedinUser.email),
        _createEmail('Spam Spam Spam', 'This is a click bite email, I dare you', 'spammer@spam.com', gLoggedinUser.email),
        _createEmail('Coding is AWESOME', 'All of this is hard coded dude!', 'CodimgAcademy@code.co.il', gLoggedinUser.email),
        _createEmail('Job Application', 'You are accepted to our honorable institute', 'usaGov@gov.com', gLoggedinUser.email),
        _createEmail('Commercial for soap', 'Here you will find the best soap ever!', 'Laline@laline.com', gLoggedinUser.email),
        _createEmail('GIVE ME MY MONEY', 'YOU OWE ME ALOT OF MONEY CMON', 'tomermorad@gmail.com', gLoggedinUser.email),
        _createEmail('Confirm your email address', 'Please confirm your address, it is not active', 'spotify@spot.co.il', gLoggedinUser.email),
        _createEmail('Your invoice waits here', 'Hello, this is your invoice for the prev month', 'Bezeq@bezeq.co.il', gLoggedinUser.email),
        _createEmail('Your account has been hacked', 'WARNING!!! your account has been hacked by a user in Beijin', 'google@google.com', gLoggedinUser.email),
        _createEmail('Your order has been accepted(16452)', 'The order you made from us has been accepted and is on the way!', 'Amazon@amaz.co.il', gLoggedinUser.email),
    ]
    storageService.saveToStorage('InboxDB', inboxEmails)
    return inboxEmails
}