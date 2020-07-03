import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = props => {
    return (
        <a>
            <button className={props.className}>{props.type}</button>
        </a>
    );
};

export default CoolButton;
