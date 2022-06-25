import React from 'react';

const BoxDesign = (props) => {
    return (
        <div className={'box box'+props.boxNumber}>
            {props.boxNumber}
            
        </div>
    );
}

export default BoxDesign;
