import React, { Component } from 'react'


class Operations extends Component{
    constructor(){
        super()
        this.state={
            amount:0,
            vendor:'',
            category:''
        }
        this.ahi=false
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
        this.props.balance-this.state.amount>500 ?
        this.props.addtTranscation({
            amount:-this.state.amount,
            vendor:this.state.vendor,
            category:this.state.category
        }) : this.ahi=true
    }
    
    render(){
        return(
            <div>
                <input name='amount' type='number' placeholder='Amount' onChange={this.Transcation} value={this.state.amount}></input>
                <input name='vendor' type='text' placeholder='Vendor' onChange={this.Transcation} value={this.state.vendor}></input>
                <input name='category' type='text' placeholder='Category' onChange={this.Transcation} value={this.state.category}></input>
                <button onClick={this.DepositTranscation}>Deposit</button>
                <button onClick={this.WithdrawTranscation}>Withdraw</button>
                <div>{this.ahi ? 'Insufficient Funds' :null}</div>
            </div>
        )
    }
}

export default Operations