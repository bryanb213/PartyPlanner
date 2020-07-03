import React, { Component } from 'react';
import axios from 'axios';
import New from './New';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: [],
            api: [],
            query: "",
            city: [],
            wind: []
        }
        this.fetchWeather = this.fetchWeather.bind(this);
    }

    fetchWeather = (event) => {
        event.preventDefault();
        const { query } = this.state;
        var apiKey = 'e7f6b2ade7d4404e80c9d27e0ad3d479';
        var requestOne = axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${apiKey}`);
        var requestTwo = axios.get(`http://localhost:5000/home/search/${query}`);

        axios.all([requestOne])
            .then(axios.spread((weatherData, backendData) => {
                this.setState({
                    weather: weatherData.data.list,
                    city: weatherData.data.city,
                    //api: backendData.data,
                    wind: weatherData.data.list.map(x => x.wind)
                })
                console.log(this.state);
            }))
    }

    render() {
        //console.log(this.state.query)
        const { weather } = this.state;

        const logic = weather.map(a => {
            if (a.wind.speed > 5) {
                return (
                    <div>
                        <h5>too fast</h5>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h5>too slow</h5>
                    </div>
                )
            }
        });


        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Party Panner</h1>
                        <small>Plan the perfect picnic!</small>
                        <hr />

                        <form onSubmit={e => this.fetchWeather(e)}>
                            <div class="form-group">
                                <label for="formGroupExampleInput2">Enter Your City</label>
                                <input value={this.state.query} onChange={e => this.setState({ query: e.target.value })} name="query" type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ex: Chicago" />
                                <br/>
                                <button className="btn btn-primary">Submit</button>                            
                            </div>
                        </form>
                    </div>
                </div>
                <New weather={this.state.weather} />
            </div>
        );
    }
}

export default Home;
