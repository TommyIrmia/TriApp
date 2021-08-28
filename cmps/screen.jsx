import { eventBusService } from "../services/event-bus-service.js";
import { Redirect } from '../../lib/react-router-dom.min.js';



export class Screen extends React.Component {

    state = {
        isOpen: false,
        link: ''
    }

    removeEventBus;
    removeEventBus2;

    componentDidMount() {
        this.removeEventBus = eventBusService.on('toggle-screen', () => {
            this.toggleScreen()
        })
    }

    componentWillUnmount() {
    }

    toggleScreen = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (<section>
            <div className={`compose-screen ${(this.state.isOpen) ? 'open' : ''}`}
            ></div>
        </section >
        )
    }
}