import React, {useState} from "react"
    
export default function WeightSlider(props) { 
    const {title, value, setWeight} = props
    
    return (
        <div>
            <h3>{title} ({value} lbs)</h3>
            <input type="range" min="1" max="1000" value={value}
            onChange={(e) => {
                setWeight(e.target.value)
            }}/>
        </div>
        )
}
