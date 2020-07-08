import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


class AirportDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: null,
            airportData: null,
            city: null,
            temp: null,
            forecast: null
        }
    }
    componentDidMount() {
        const apiKey = 'e7f6b2ade7d4404e80c9d27e0ad3d479';
        const rr = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.location.state.cityName}&appid=${apiKey}&units=Imperial`);
        const requestOne = axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.location.state.cityName}&appid=${apiKey}&units=Imperial`);
        const requestTwo = axios.get(`http://localhost:5000/home/details/${this.props.location.state.cityId}`);

        axios.all([requestOne, requestTwo, rr])
            .then(axios.spread((weatherData, backendData, rr) => {
                this.setState({
                    weather: rr.data.weather,
                    city: weatherData.data.city,
                    airportData: backendData.data,
                    temp: rr.data.main,
                    forecast: weatherData.data.list
                })
            }))
            .catch(err => { console.log(err) })
    }
    
    render() {
        console.log("my state",this.state);
        //const iconUrl = `https://openweathermap.org/img/w/${this.state.temp[0].icon}.png`;
        return (
            <div className="row">
                <div className="col-md-6">
                    <Link to="/">home</Link>
                    <h1>weather details</h1>
                    <div className="media">
                        <img src="" className="align-self-start mr-3" alt="..." />
                            <div className="media-body">
                                <h5 className="mt-0">Top-aligned media</h5>
                                
                                <p>{this.state.city.name}</p>
                            </div>
                    </div>

                    </div>
                    <div className="col-md-6">
                        <h1>airport details</h1>

                    </div>
                </div>
        );
    }
}

export default AirportDetail;