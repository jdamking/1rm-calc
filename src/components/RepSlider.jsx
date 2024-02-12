import React, {useState} from "react"
    
export default function RepSlider(props) { 
    const {title, value, setRep } = props
    
    return (
        <div>
            <h3>{title} ({value} reps)</h3>
            <input type="range" min="1" max="12" value={value}
            onChange={(e) => {
                setRep(e.target.value)
            }}/>
        </div>
        )
}
