import {getPressureAction} from '../actionCreator/getWeather'

export const getPressure = (city)=>{
  return (dispatch) =>{
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=00a051c7e96d6be9db5de5b122e25978`)
    .then(response =>response.json())
  
    .then(data =>
      {dispatch({type:"GET_PRESSURE", pressureValue: data.main.pressure})
      dispatch({type:"GET_TEMP", temperature: data.main.temp})}
      // dispatch(getPressureAction(data))
    )
    

  }
}
