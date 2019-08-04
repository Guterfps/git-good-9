import React, { Component } from 'react'
import Transcation from './Transction'

class Transcations extends Component{
    render(){
        return(
            <div>
                {this.props.data.map(t=>{return(
                  <Transcation transcation={t} />
                )})}
            </div>
        )
    }
}

export default Transcations