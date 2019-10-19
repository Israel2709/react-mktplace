import React, { Component } from 'react'
import Card from './Card';

class Cardwrapper extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        )
    }
}

export default Cardwrapper