import React, { Component } from 'react'
import Page1 from './Page1'

export const data = {
    name: "john",
    Job : "software",
    category: {
      fresher: "roll mark",
      rating: 120
    }
   
   }
class Page0 extends Component{

    console_func = (a)=>{
        console.log(a)
    }

    render (){
        return (
            <div>
                <Page1 text="from page 0" number={3} console_function={this.console_func}/>
            </div>
        )
    }
}

export default Page0