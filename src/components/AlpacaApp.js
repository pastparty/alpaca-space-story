import React from 'react';
import ReactDOM from 'react-dom';

import UI from './UI';


class AlpacaApp extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <UI>
                <p>User interface</p>
            </UI>
        );
    }
}

export default AlpacaApp;
