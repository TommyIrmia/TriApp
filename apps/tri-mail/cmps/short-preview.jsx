import { MailService } from "../services/mail.service.js";



export function ShortPreview({email , onToggleEmailPreview}) {
    console.log(onToggleEmailPreview);
    return (
        <section className={`mail-preview ${email.isRead && 'read'}`} onClick={() => onToggleEmailPreview()}>
            <h1 className="from">{MailService.getName(email.from)}</h1>
            <div className="mail-info">
                <h1>{email.subject} </h1>
            </div>
            <h1 className="date">{MailService.getDate(email.recievedAt)}</h1>
            {/* <button>unRead</button> */}
        </section>
    )
}