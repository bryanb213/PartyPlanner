import React from 'react'

export default function New(props) {
    console.log(props)
    return (
        <div className="row">
            <div className="col-md-6">
                
                <div className="card border-primary mb-3" style={{'maxWidth': '18rem'}}>
                    <div className="card-header">{props.city.name}, {props.city.country}</div>
                    <div className="card-body text-primary">
                        <h5 className="card-title">Primary card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
