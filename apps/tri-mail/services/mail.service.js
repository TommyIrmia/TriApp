import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const MailService = {
    query,
    getEmailsByFolder,
    getDate,
    getName,
    getBody,
    toggleRead,
    getNumOfUnread,
    deleteEmail,
    getEmailById,
    sendEmail,
    toggleStar,
    getFolder,
    setFolder,
    setFilter,
    setDraft,
    saveDraft,
}

const gLoggedInUser = {
    email: 'user@triApp.com',
    fullname: 'Hakuna Matata'
}

const gEmails = storageService.loadFromStorage('EmailsDB') || _createEmails();
let gFilter = {
    folder: 'inbox',
    filterBy: {
        word: '',
        type: 'all'
    },
};
let gDraft = null;


function query() {
    let emailsToShow = getEmailsByFolder()

    if (gFilter.filterBy) {
        const { word, type } = gFilter.filterBy;
        const filteredEmails = emailsToShow.filter(email => {
            const subject = email.subject.toLowerCase();
            return (subject.includes(word))
        })

        if (type === 'all') return Promise.resolve(filteredEmails)

        const emailsByType = filteredEmails.filter(email => {
            if (type === 'read') return email.isRead;
            if (type === 'unread') return !email.isRead;
        })
        return Promise.resolve(emailsByType)
    }
    return Promise.resolve(emailsToShow);
}

function getEmailsByFolder() {
    switch (gFilter.folder) {
        case 'inbox':
            return gEmails.filter(email => !email.isSent && !email.isTrash && !email.isDraft);
        case 'sent':
            return gEmails.filter(email => email.isSent && !email.isTrash);
        case 'starred':
            return gEmails.filter(email => email.isStar && !email.isTrash);
        case 'trash':
            return gEmails.filter(email => email.isTrash);
        case 'draft':
            return gEmails.filter(email => email.isDraft && !email.isTrash)

    }
}

function getFolder() {
    return gFilter.folder
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

function getBody(txt) {
    // const newTxt = txt.replace(/\n/g, '<br />');
    const newTxts = txt.split('\n')
    return newTxts
}

function getEmailById(id) {
    return Promise.resolve(gEmails.find(email => email.id === id));
}

function getNumOfUnread() {
    const unReadEmails = gEmails.filter(email => !email.isRead && !email.isSent);
    return unReadEmails.length
}

function saveDraft(email) {
    const { subject, to, body } = email
    if (!subject) return
    gDraft = _createEmail(subject, body, to, gLoggedInUser.email, true, false, false, true)
}

function setDraft() {
    if (!gDraft) return;
    gEmails.unshift(gDraft)
    storageService.saveToStorage('EmailsDB', gEmails);
    return Promise.resolve();
}

function setFilter(filterBy) {
    gFilter.filterBy = filterBy;
    console.log(gFilter);
}

function setFolder(folder) {
    gFilter.folder = folder;
}

function sendEmail(email) {
    const { subject, to, cc, body } = email;
    const from = gLoggedInUser.email;
    const newEmail = _createEmail(subject, body, to, from, true, true, false);
    gEmails.unshift(newEmail);
    storageService.saveToStorage('EmailsDB', gEmails);
    return Promise.resolve();
}

function deleteEmail(emailToDlt) {
    if (!emailToDlt.isTrash) {
        emailToDlt.isTrash = true;
    } else {
        const emailIdx = gEmails.findIndex(email => email.id === emailToDlt.id);
        gEmails.splice(emailIdx, 1)
    }
    storageService.saveToStorage('EmailsDB', gEmails);
    return Promise.resolve()
}

function toggleStar(emailId) {
    const email = getEmailById(emailId)
        .then(email => {
            email.isStar = !email.isStar;
        })
    storageService.saveToStorage('EmailsDB', gEmails)
    return Promise.resolve();
}

function toggleRead(emailId, isRead) {
    const email = getEmailById(emailId)
        .then(email => {
            email.isRead = isRead;
        })
    storageService.saveToStorage('EmailsDB', gEmails)
}

function _createEmail(subject, body, from, to, isRead, isSent, isStar, isDraft) {
    isStar = (!isStar) ? false : (Math.random() > 0.5) ? true : false;
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead: isRead || ((Math.random() > 0.5) ? true : false),
        isStar: isStar,
        isSent: isSent || false,
        isDraft: isDraft || false,
        isTrash: false,
        recievedAt: new Date(),
        from,
        to,
    }
}

function _createEmails() {
    const emails = [
        _createEmail('Credit Card Invoice', 'Look at your payments here', 'LeumiCard@leumi.co.il', gLoggedInUser.email),
        _createEmail('I LOVE YOU!', 'Please lets get back together', 'Lover@loveme.co.il', gLoggedInUser.email),
        _createEmail('Spam Spam Spam', 'This is a click bite email, I dare you', 'spammer@spam.com', gLoggedInUser.email),
        _createEmail('Coding is AWESOME', 'All of this is hard coded dude!', 'CodimgAcademy@code.co.il', gLoggedInUser.email),
        _createEmail('Job Application', 'You are accepted to our honorable institute', 'usaGov@gov.com', gLoggedInUser.email),
        _createEmail('Commercial for soap', 'Here you will find the best soap ever!', 'Laline@laline.com', gLoggedInUser.email),
        _createEmail('GIVE ME MY MONEY', 'YOU OWE ME ALOT OF MONEY CMON', 'tomermorad@gmail.com', gLoggedInUser.email),
        _createEmail('Confirm your email address', 'Please confirm your address, it is not active', 'spotify@spot.co.il', gLoggedInUser.email),
        _createEmail('Your invoice waits here', 'Hello, this is your invoice for the prev month', 'Bezeq@bezeq.co.il', gLoggedInUser.email),
        _createEmail('Your account has been hacked', 'WARNING!!! your account has been hacked by a user in Beijin', 'google@google.com', gLoggedInUser.email),
        _createEmail('Your order has been accepted (16452)', 'The order you made from us has been accepted and is on the way!', 'Amazon@amaz.co.il', gLoggedInUser.email),
        _createEmail('Credit Card Invoice', 'Look at your payments here', 'LeumiCard@leumi.co.il', gLoggedInUser.email),
        _createEmail('I LOVE YOU!', 'Please lets get back together', 'Lover@loveme.co.il', gLoggedInUser.email),
        _createEmail('Spam Spam Spam', 'This is a click bite email, I dare you', 'spammer@spam.com', gLoggedInUser.email),
        _createEmail('Coding is AWESOME', 'All of this is hard coded dude!', 'CodimgAcademy@code.co.il', gLoggedInUser.email),
        _createEmail('Job Application', 'You are accepted to our honorable institute', 'usaGov@gov.com', gLoggedInUser.email),
        _createEmail('Commercial for soap', 'Here you will find the best soap ever!', 'Laline@laline.com', gLoggedInUser.email),
        _createEmail('GIVE ME MY MONEY', 'YOU OWE ME ALOT OF MONEY CMON', 'tomermorad@gmail.com', gLoggedInUser.email),
        _createEmail('Confirm your email address', 'Please confirm your address, it is not active', 'spotify@spot.co.il', gLoggedInUser.email),
        _createEmail('Your invoice waits here', 'Hello, this is your invoice for the prev month', 'Bezeq@bezeq.co.il', gLoggedInUser.email),
        _createEmail('Your account has been hacked', 'WARNING!!! your account has been hacked by a user in Beijin', 'google@google.com', gLoggedInUser.email),
        _createEmail('Your order has been accepted (16452)', 'The order you made from us has been accepted and is on the way!', 'Amazon@amaz.co.il', gLoggedInUser.email),
    ]
    storageService.saveToStorage('EmailsDB', emails)
    return emails
}