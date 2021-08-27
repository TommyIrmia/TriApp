import { ShortPreview } from './short-preview.jsx'
import { LongPreview } from './long-preview.jsx'
import { MailService } from '../services/mail.service.js'

export class MailPreview extends React.Component {

    state = {
        isClicked: false,
    }

    onToggleEmailPreview = (email, isRead) => {
        MailService.toggleRead(email.id, isRead)
        this.setState({ isClicked: !this.state.isClicked })
        this.props.loadEmails();
    }

    render() {
        const { email, onStarEmail, onToggleRead, onDeleteEmail } = this.props;
        const { isClicked } = this.state;
        return (
            <React.Fragment>
                {!isClicked && <ShortPreview email={email}
                    onStarEmail={onStarEmail}
                    onToggleEmailPreview={this.onToggleEmailPreview}
                    onToggleRead={onToggleRead}
                    onDeleteEmail={onDeleteEmail}
                />}
                {isClicked && <LongPreview email={email}
                    onStarEmail={onStarEmail}
                    onToggleEmailPreview={this.onToggleEmailPreview}
                    onToggleRead={onToggleRead}
                    onDeleteEmail={onDeleteEmail}
                />}
            </React.Fragment>


        )
    }
}