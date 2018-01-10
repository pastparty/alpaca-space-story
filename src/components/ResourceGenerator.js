import React from 'react';
import ReactDOM from 'react-dom';

import AlpacaCareCenter from './AlpacaCareCenter';
import PlanetView from './PlanetView';
import Research from './Research';

class ResourceGenerator extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="ressourcegenerator__main">
                <AlpacaCareCenter />
                <PlanetView />
                <Research />
            </div>
        );
    }
}

export default ResourceGenerator;
