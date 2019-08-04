import React, { Component } from 'react'


class Transcation extends Component{
    render(){
        return(
            <div className={this.props.transcation.amount >= 0 ? 'green': 'red'}>
            amount:{this.props.transcation.amount} vendor:{this.props.transcation.vendor} category:{this.props.transcation.category}
            </div>
        )
    }
}

export default Transcation