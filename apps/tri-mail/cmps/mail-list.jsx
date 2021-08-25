import {MailPreview} from './mail-preview.jsx'

export function MailList () {

    return (
        <section className="mail-list">
            <MailPreview />
            <MailPreview />
            <MailPreview />
        </section>
    )
}