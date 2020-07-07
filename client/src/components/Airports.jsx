import React from 'react'
import { Link } from 'react-router-dom';

export default function Airports(props) {
    //console.log('propss', props);
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="list-group">
                    <li className="list-group-item list-group-item-action active">
                        Select your Airport
                    </li>
                    {
                        props.airportData.map(x => (
                            <Link to={{pathname: "details/{x.airportsId}", state: { cityName: x.airportCity, cityId: x.airportId }}} 
                            className="list-group-item list-group-item-action">
                            {x.airportName}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
