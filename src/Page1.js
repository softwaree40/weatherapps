import React from 'react'
import {data} from "./Page0"


const Page1 = ({text, number, console_function}) => {

    // function as(){
    //     console_function(data)
    // }

    return (
    <div>{text}{number}
    <button onClick={(event) => console_function(event.target)}>{number}</button></div>
    )
}

export default Page1