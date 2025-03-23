import React, {Component} from 'react';
import 'bulma/css/bulma.min.css';

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            main: {},
            weather: [{}]
        }
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        if (nextProps.data !== nextState.data) {
            return {
                name: nextProps.data.name,
                main: nextProps.data.main,
                weather: nextProps.data.weather
            }
        }
        return null
    }

    chooseIcon = id => {
        console.log(id)
        switch(true) {
            case(id >= 200 && id < 300):
                return <img src="src/assets/icons8-storm-96.png" alt="thunderstorm" />
            case(id >= 300 && id < 400):
                return <img src="src/assets/icons8-rain-cloud-96.png" alt="drizzle" />
            case(id >= 500 && id < 600):
                return <img src="src/assets/icons8-rain-96.png" alt="rain" />
            case(id >= 600 && id < 700):
                return <img src="src/assets/icons8-snow-96.png" alt="snow" />
            case(id >= 700 && id < 800):
                return <img src="src/assets/icons8-dust-96.png" alt="dust" />
            case(id === 800):
                return <img src="src/assets/icons8-sun-96.png" alt="sun" />
            case(id >= 801 && id < 810):
                return <img src="src/assets/icons8-clouds-96.png" alt="clouds" />
            default:
                return <p>Couldn't retrieve weather icon</p>
        }
    }

    render() {

        const {name, main, weather} = this.state
        const {temp, humidity} = main
        const {description, id} = weather[0]

        return (
            <div className="has-text-centered">
                <div className="content">
                    <h1 className="has-text-black has-text-weight-normal">{name}</h1>
                </div>
                <div>
                    {
                        this.chooseIcon(id)
                    }
                </div>
                <h1>{description}</h1>
                <div className="content">
                    <h1 className="has-text-grey has-text-weight-normal">{(temp - 273.15).toFixed(1)} °C</h1>
                </div>
                <h1>Humidity: {humidity}%</h1>
            </div>
        );
    }
}

export default Weather;