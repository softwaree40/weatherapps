// import { actionCreators } from "redux"

export const reducer = (state = {pressure: 0, temp: 0}, dispatch) => {
       switch(dispatch.type){

        case "GET_PRESSURE":
            return{
             ...state,
             pressure: dispatch.pressureValue
             

            }
            case "GET_TEMP":
                return{
                 ...state,
                 temp: dispatch.temperature
                 
    
                }
         default:
            return state
       }
       

    
}

 