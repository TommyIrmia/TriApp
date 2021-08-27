import { MailPreview } from './mail-preview.jsx'

export function MailList({ emails, onToggleRead, onDeleteEmail, loadEmails, onStarEmail }) {
    return (
        <section className="mail-list flex">
            {emails.map(email => <MailPreview key={email.id}
                email={email}
                onToggleRead={onToggleRead}
                onStarEmail={onStarEmail}
                onDeleteEmail={onDeleteEmail}
                loadEmails={loadEmails}
            />)}
        </section>
    )
}