import { MailNav } from "../cmps/mail-nav.jsx";
import { MailService } from "../services/mail.service.js";

export class MailCompose extends React.Component {


    state = {
        email: {
            subject: '',
            to: '',
            cc: '',
            body: '',
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        console.log(field, value);
        this.setState((prevState) => ({ email: { ...prevState.email, [field]: value } }));
    };

    onSendEmail = (ev) => {
        ev.preventDefault();
        MailService.sendEmail(this.state.email)
            .then(() => {
                this.setState({ email: { subject: '', to: '', cc: '', body: '' } })
                this.onBack();

            })
    }

    onBack = () => {
        this.props.history.push('/mail')
    }

    render() {
        const { subject, to, cc, body } = this.state
        return (
            <section className="mail-compose">
                <MailNav />

                <section className="compose-container">
                    <div className="compose-header">New Email : </div>
                    <form>
                        <label htmlFor='to' className="flex">
                            <input
                                ref={this.inputRef} name='to' id='to'
                                type='text' placeholder='To : ' value={to}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label htmlFor='cc' className="flex">
                            <input
                                ref={this.inputRef} name='cc' id='cc'
                                type='text' placeholder='CC :' value={cc}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label htmlFor='subject' className="flex">
                            <input
                                ref={this.inputRef} name='subject' id='subject'
                                type='text' placeholder='Subject' value={subject}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label htmlFor='body' className="flex">
                            <textarea
                                ref={this.inputRef} name='body' id='body'
                                type='text' placeholder='Enter email here' value={body}
                                onChange={this.handleChange}
                            />
                        </label>
                        <button className="back-btn" onClick={this.onBack}>
                            <img src="././img/back.png" />
                        </button>
                        <button className="send-btn" onClick={this.onSendEmail}>
                            <img src="././img/send.png" />
                        </button>
                    </form>





                </section>




            </section>
        )
    }
}