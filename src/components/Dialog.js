import React from "react"
import './Dialog.css'

const Dialog = function( props ){
    return (
        <div className="Dialog">
            <button onClick={()=>props.deal()}>Deal</button>
        </div>
    )
}

export default Dialog