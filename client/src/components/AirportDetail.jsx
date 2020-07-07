import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


class AirportDetail extends Component {
    componentDidMount() {
        const apiKey = 'e7f6b2ade7d4404e80c9d27e0ad3d479';
        const requestOne = axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.location.state.cityName}&appid=${apiKey}`);
        const requestTwo = axios.get(`http://localhost:5000/home/details/${this.props.location.state.cityId}`);

        axios.all([requestOne, requestTwo])
            .then(axios.spread((weatherData, backendData) => {
                this.setState({
                    weather: weatherData.data,
                    city: weatherData.data.city,
                    airportData: backendData.data,
                    wind: weatherData.data.list.map(x => x.wind)
                })
            }))
            .catch(err => { console.log(err) })
    }
    
    render() {
        console.log(this.state);
        return (
            <div className="row">
                <div className="col-md-6">
                    <Link to="/">home</Link>
                    <h1>airport details</h1>

                </div>
            </div>
        );
    }
}

export default AirportDetail;