import {MailPreview} from './mail-preview.jsx'

export function MailList ({emails}) {
    return (
        <section className="mail-list flex">
            {emails.map(email => <MailPreview key={email.id} email={email}/>)}
        </section>
    )
}