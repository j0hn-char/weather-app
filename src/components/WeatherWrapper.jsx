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
            weather: {}
        }
    }

    getWeather = city => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=446fa0bde2ce56d08377042b154ab285`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    data: response.data
                })
            })
            .catch(error => {
                console.log(error)
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
                        this.state.data && (
                            this.displayWeather()
                        )
                    }
                </div>
            </div>
        );
    }
}

export default WeatherWrapper;