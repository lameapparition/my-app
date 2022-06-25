import React, { useState } from 'react';
import './BoxDesign.css';
import SwitchButtons from '../Buttons/SwitchButtons';

const BoxDesign = (props) => {
    const [link, setLink] = useState(0)
    const onSwitchLeft = () => {
        if (link === 0) {
            setLink(props.links.length - 1)
        }
        else { setLink(link - 1) }
    }
    const onSwitchRight = () => {
        if (link === props.links.length - 1) {
            setLink(0)
        }
        else { setLink(link + 1) }
    }

    return (
        <div className={'box box' + props.boxNumber}>
            <img className={'images'} src={props.links[link]} />
            <SwitchButtons switchLeft={onSwitchLeft} switchRight={onSwitchRight} />
        </div>
    );
}

export default BoxDesign;
