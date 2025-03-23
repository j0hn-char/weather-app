import React, {Component} from 'react';
import 'bulma/css/bulma.min.css';

class WeatherForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            location: ''
        }
    }

    submitHandler = e => {
        e.preventDefault()
        if(this.state.location) {
            this.props.getWeather(this.state.location)
            this.setState({
                location: ''
            })
        }
    }

    render() {
        const { location } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}
                      className="field is-grouped">
                    <input type="text"
                           value={location}
                           onChange={e =>
                               this.setState({location: e.target.value})}
                           className="input is-link has-background-light has-text-black"/>
                    <button type="submit" className="button is-link">search</button>
                </form>
            </div>
        );
    }
}

export default WeatherForm;