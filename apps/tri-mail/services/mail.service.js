import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const MailService = {
    query,
}

const loggedinUser = {
    email: 'user@triApp.com',
    fullname: 'Hakuna Matata'
}

const gInboxEmails = storageService.loadFromStorage('InboxDB') || _createInboxEmails();

const gSentEmails = [];

const gStarredEmails = []


function query() {
    return Promise.resolve(gInboxEmails)
}


function _createInboxEmails() {
    const inboxEmails = [
        _createInboxEmail('Credit Card Invoice', 'Look at your payments here', 'LeumiCard@leumi.co.il'),
        _createInboxEmail('I LOVE YOU!', 'Please lets get back together', 'Lover@loveme.co.il'),
        _createInboxEmail('Spam Spam Spam', 'This is a click bite email, I dare you', 'spammer@spam.com'),
        _createInboxEmail('Coding is AWESOME', 'All of this is hard coded dude!', 'CodimgAcademy@code.co.il'),
        _createInboxEmail('Job Application', 'You are accepted to our honorable institute', 'usaGov@gov.com'),
        _createInboxEmail('Commercial for soap', 'Here you will find the best soap ever!', 'Laline@laline.com'),
        _createInboxEmail('GIVE ME MY MONEY', 'YOU OWE ME ALOT OF MONEY CMON', 'tomermorad@gmail.com'),
        _createInboxEmail('Confirm your email address', 'Please confirm your address, it is not active', 'spotify@spot.co.il'),
        _createInboxEmail('Your invoice waits here', 'Hello, this is your invoice for the prev month', 'Bezeq@bezeq.co.il'),
        _createInboxEmail('Your account has been hacked', 'WARNING!!! your account has been hacked by a user in Beijin', 'google@google.com'),
        _createInboxEmail('Your order has been accepted(16452)', 'The order you made from us has been accepted and is on the way!', 'Amazon@amaz.co.il'),
    ]
    storageService.saveToStorage('InboxDB', inboxEmails)
    return inboxEmails
}

function _createInboxEmail(subject, body, from) {
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead: ((Math.random() > 0.5) ? true : false),
        recievedAt: new Date(),
        from
    }
}