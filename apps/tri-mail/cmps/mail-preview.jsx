import { ShortPreview } from './short-preview.jsx'
import { LongPreview } from './long-preview.jsx'
import { MailService } from '../services/mail.service.js'

export class MailPreview extends React.Component {

    state = {
        isClicked: false,
    }

    componentDidMount() {
        // console.log(this.props.email);
    }

    onToggleEmailPreview = (email) => {
        MailService.toggleRead(email.id, true)
        this.setState({ isClicked: !this.state.isClicked })
    }


    render() {
        const { email } = this.props;
        const { isClicked } = this.state;
        return (
            <React.Fragment>
                {!isClicked && <ShortPreview email={email} onToggleEmailPreview={() => this.onToggleEmailPreview(email)} />}
                {isClicked && <LongPreview email={email} onToggleEmailPreview={() => this.onToggleEmailPreview(email)}/>}
            </React.Fragment>


        )
    }
}