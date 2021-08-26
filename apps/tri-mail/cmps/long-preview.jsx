import { MailService } from "../services/mail.service.js";

export function LongPreview({ email, onToggleEmailPreview, onDeleteEmail }) {
    return (
        <section className="long-preview" onClick={() => onToggleEmailPreview()}>
            <div className="btns">
                <button><img src="././img/expand.png" /></button>
                <button onClick={(event) => onDeleteEmail(event, email)} >
                    <img src="././img/trash.png" />
                </button>
            </div>
            <div>
                <h1>{email.subject}</h1>
                <h2>{MailService.getName(email.from)} <small>'{email.from}'</small></h2>
            </div>
            <p>{email.body}</p>
            <small>{MailService.getDate(email.recievedAt)} </small>
        </section>
    )
}