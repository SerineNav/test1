import React, { Component } from "react";


const API_KEY = "ca660033da76b74e8f92f9effc6cf68b";
class Weather extends Component {
    state = {
        loading: true,
        city: "Yerevan"
    }
    componentDidMount() {
        const weatherURL =
            `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}`
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                console.log("Data List Loaded", data)

            })
    }
    render() {


        return (
            <div>
                <h1>Weather App!</h1>

            </div>
        )
    }

}
export default Weather;