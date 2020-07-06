import React from 'react'

export default function Airports(props) {
    console.log('my props', props);
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="list-group">
                    <li className="list-group-item list-group-item-action active">
                        Select your Airport
                    </li>
                    {
                        props.airportData.map(x => (
                            <a href="#" className="list-group-item list-group-item-action">{x.airportName}</a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
