 const getPressureAction = (city)=>{

  return {
     type: "GET_PRESSURE",
     payload: city


  }
}

const getTempAction = (city)=>{

    return {
       type: "GET_TEMP",
       payload: city
  
  
    }
  }

