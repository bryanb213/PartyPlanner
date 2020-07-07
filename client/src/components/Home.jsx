import React, { Component } from 'react';
import axios from 'axios';
import Airports from './Airports';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: [],
            airportData: [],
            query: "",
            city: [],
            wind: [],
            visable: false
        }
        this.fetchWeather = this.fetchWeather.bind(this);
    }

    fetchWeather = (event) => {
        event.preventDefault();
        const { query } = this.state;
        //var apiKey = 'e7f6b2ade7d4404e80c9d27e0ad3d479';
        //var requestOne = axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${apiKey}`);
        var requestTwo = `http://localhost:5000/home/search/${query}`;

        // axios.all([requestOne, requestTwo])
        //     .then(axios.spread((weatherData, backendData) => {
        //         this.setState({
        //         //     //weather: weatherData.data
        //         //     //city: weatherData.data.city,
        //             airportData: backendData.data,
        //         //     //wind: weatherData.data.list.map(x => x.wind),
        //         visable: true
        //         })
        //         //console.log(this.state);
        //     }))

        axios.get(requestTwo)
        .then(res => {
            this.setState({
                
                airportData: res.data,
                visable: true
            })
            //console.log(this.state);
        })
        .catch(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Party Panner</h1>
                        <small>Plan the perfect picnic!</small>
                        <hr />

                        <form onSubmit={e => this.fetchWeather(e)} >
                            <div className="form-group">
                                <label htmlFor="search">Enter Your City</label>
                                <input value={this.state.query} onChange={e => this.setState({ query: e.target.value })} name="query" type="text" className="form-control" id="search" placeholder="Ex: Chicago" />
                                <br/>
                                <button className="btn btn-primary">Submit</button>                            
                            </div>
                        </form>
                    </div>
                </div>
                { this.state.visable ? <Airports airportData={this.state.airportData}/> : null}
                
            </div>
        );
    }
}

export default Home;
