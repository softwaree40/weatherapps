import React from 'react';
import Page0 from './Page0'
import './App.css';
import {getPressure} from "./actions/getWeatherAction"
import {connect} from "react-redux"
class App extends React.Component {
   state = {

    City:""

   }
   handleOnChange = (event)=>{
     this.setState({
      // [event.target.name]: event.target.value
      City: event.target.value,
      
     })
     //event.target.value=""
    
   }
   handleOnClick = (event)=>{

   event.preventDefault()
   console.log(this.state)
   this.refs.search.value=""
   this.setState({
     City: ""
   })
   this.props.getPressure(this.state.City)
   }

   /*handleOnBlur = (event) => {
     event.target.value=""
     console.log("i have blurred")
   }*/

  render(){
    
    return (
      <div className="App">
         <form >
            <input placeholder="Enter Search ...." type="text" onChange={this.handleOnChange} ref="search"/>
            <button onClick={this.handleOnClick}>Get info</button>
         </form>
         <hr/>
         {this.props.pressure ?
         <div>
       <h1>Pressure:{this.props.pressure}</h1>
       <h1>Temp: {this.props.temp}</h1> </div>: ""}
      </div>
    );



  }
}
const mapStateToProps = (state)=>{

  return ({
   pressure: state.pressure,
   temp: state.temp


  })


}

export default connect(mapStateToProps,{getPressure})(App);
