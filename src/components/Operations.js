import React, { Component } from 'react'
import axios from 'axios'

class Operations extends Component{
    constructor(){
        super()
        this.state={
            amount:0,
            vendor:'',
            category:''
        }
    }
    Transcation=(event)=>{
        const target=event.target
        const name=target.name
        const value = name==='amount' ? parseInt(target.value): target.value
        this.setState({
            [name]: value
        })
    }
    DepositTranscation=()=>{
  this.props.addtTranscation(this.state)
    }
    WithdrawTranscation=()=>{
        this.props.addtTranscation({
            amount:-this.state.amount,
            vendor:this.state.vendor,
            category:this.state.category
        })
    }
    // async componentDidMount(){
    //   await  axios.post('http://localhost:8000/transaction',this.state)
    // }
    render(){
        return(
            <div>
                <input name='amount' type='number' placeholder='Amount' onChange={this.Transcation} value={this.state.amount}></input>
                <input name='vendor' type='text' placeholder='Vendor' onChange={this.Transcation} value={this.state.vendor}></input>
                <input name='category' type='text' placeholder='Category' onChange={this.Transcation} value={this.state.category}></input>
                <button onClick={this.DepositTranscation}>Deposit</button>
                <button onClick={this.WithdrawTranscation}>Withdraw</button>
            </div>
        )
    }
}

export default Operations