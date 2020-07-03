import React from 'react'

export default function New(props) {
    console.log(props)
    return (
        <div className="row">
            <div className="col-md-6">
                {
                    props.weather.map(x => (
                        <h1>{x.wind.speed}</h1>
                    ))
                }
                <div className="card border-primary mb-3" style={{'max-width': '18rem'}}>
                    <div className="card-header">Header</div>
                    <div className="card-body text-primary">
                        <h5 className="card-title">Primary card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
