import React, {Component} from 'react';
import WeatherForm from "./Weather-form.jsx";
import 'bulma/css/bulma.min.css'
import axios from "axios";
import weather from "./Weather.jsx";
import Weather from "./Weather.jsx";

class WeatherWrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            error: ''
        }
    }

    getWeather = city => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=446fa0bde2ce56d08377042b154ab285`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    data: response.data,
                    error: ''
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    data: null,
                    error: 'Please enter a valid city name'
                })
            })
    }

    displayWeather = () => {
        return <Weather data={this.state.data} />
    }

    render() {
        return (
            <div className="box has-background-light">
                <div className={this.state.data && "block"}>
                    <div className="content has-text-centered is-large">
                        <h1 className="has-text-black">Weather</h1>
                    </div>
                    <h1>City</h1>
                    <WeatherForm getWeather={this.getWeather}/>
                </div>
                <div className="block">
                    {
                        (this.state.data && !this.state.error) ? (
                            this.displayWeather()
                        ) : (
                            <div>
                                <h1 className="has-text-danger">{this.state.error}</h1>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default WeatherWrapper;