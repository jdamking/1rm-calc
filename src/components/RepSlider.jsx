import React, { useState } from "react"

export default function RepSlider(props) {
    const { title, value, setRep } = props

    return (
        <div className="flex flex-col gap-2 pl-4 pr-4 pb-4">
            <h3>{title} ({value} reps)</h3>
            <input className="accent-indigo-600 " type="range" min="1" max="12" value={value}
                onChange={(e) => {
                    setRep(e.target.value)
                }} />
        </div>
    )
}
