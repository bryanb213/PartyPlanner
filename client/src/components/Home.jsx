import React, { Component } from 'react';
import { getWeather } from '../actions/weather';
import Airports from './Airports';
import { connect } from 'react-redux';


class Home extends Component {
    constructor(props){
        super(props);
            this.state = {
                query: ''
            }
    }
    fetchWeather = (event) => {
        event.preventDefault();
        const { query } = this.state;
        getWeather(query);
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
                                <input value={this.props.query} onChange={e => this.setState({ query: e.target.value })} name="query" type="text" className="form-control" id="search" placeholder="Ex: Chicago" />
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

const mapStateToProps = state => ({
    query: state.query
});

export default connect(mapStateToProps, {getWeather})(Home);
