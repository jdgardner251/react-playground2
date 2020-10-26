import React from 'react';
import './Split.css'

function Split(props) {
    const combinedClass = `split ${props.className}`;
    const newStyles = { flex: props.flexBasis };
    return (
        <div 
            className={combinedClass}
            style={newStyles}
            >
            {props.children}
        </div>
    )
}

export default Split;