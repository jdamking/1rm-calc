import React from "react"

export default function CalculateButton(props) { 
    const {evaluate} = props
    return (
        <button onClick={evaluate}>CalculateButton</button>
        )
}