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
            wind: [],
            visable: false
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
                    wind: weatherData.data.list.map(x => x.wind),
                    visable: true
                })
                //console.log(this.state);
            }))
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
                                <label htmlFor="formGroupExampleInput2">Enter Your City</label>
                                <input value={this.state.query} onChange={e => this.setState({ query: e.target.value })} name="query" type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ex: Chicago" />
                                <br/>
                                <button className="btn btn-primary">Submit</button>                            
                            </div>
                        </form>
                    </div>
                </div>
                { this.state.visable ? <New city={this.state.city}/> : null}
            </div>
        );
    }
}

export default Home;
