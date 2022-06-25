import React from 'react' 
import './SwitchButtons.css'

export default function SwitchButtons(props) {

    return (
        <>
            <div onClick={props.switchLeft} className='bttn left'/>
            <div onClick={props.switchRight} className='bttn right'/>
        </>

    )
}
