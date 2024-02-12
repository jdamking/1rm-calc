import React, {useState} from "react"
    
export default function WeightSlider(props) { 
    const {title, value, setWeight} = props
    
    return (
        <div className="flex flex-col gap-2 pl-4 pr-4 pb-4">
            <h3>{title} ({value} lbs)</h3>
            <input className='accent-indigo-600 ' type="range" min="1" max="1000" value={value}
            onChange={(e) => {
                setWeight(e.target.value)
            }}/>
        </div>
        )
}
