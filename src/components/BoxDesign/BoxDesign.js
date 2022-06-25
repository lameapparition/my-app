import React from 'react';
import './BoxDesign.css';
import SwitchButtons from '../Buttons/SwitchButtons';

const BoxDesign = (props) => {
    return (
        <div className={'box box'+props.boxNumber}>
            <img className={'images'} src={props.link}/>
        <SwitchButtons/>
        </div>
    );
}

export default BoxDesign;
