import React ,{Component} from 'react';
import Operations from './components/Operations'
import Transcations from './components/Transcations'
import './App.css';
import axios from 'axios'


class App extends Component{
constructor(){
  super()
  this.state={
    data:[
      // { amount: 3200, vendor: "Elevation", category: "Salary" },
      // { amount: -7, vendor: "Runescape", category: "Entertainment" },
      // { amount: -20, vendor: "Subway", category: "Food" },
      // { amount: -98, vendor: "La Baguetterie", category: "Food" }
    ]
  }
}
balance(){
let sum =0
this.state.data.map(a=> sum+=a.amount)
return sum
}

async componentDidMount(){
  const res= await axios.get('http://localhost:8000/transcations')
  console.log(res.data)
  this.setState({data: res.data})
}
  addtTranscation=async (Transcation)=>{
 await axios.post('http://localhost:8000/transaction',Transcation)
  this.componentDidMount()
  // let Data=[...this.state.data]
  // Data.push(Transcation)
  
  // this.setState({
  //   data: Data
  // })
}


render(){
  return(
  <div>
    <span className='balance'>{this.balance()}</span>
    <div><Transcations data={this.state.data} /></div>
    <Operations addtTranscation={this.addtTranscation} />
  </div>
  )
}
}
export default App;
