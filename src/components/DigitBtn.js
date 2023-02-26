import React from 'react'

export default function DigitBtn(props) {
    const onclick = (e) => {
        console.log(e.target.id)
    }

    return (
        <button id={props.num} onClick={onclick}>{props.num}</button>
    )
}
