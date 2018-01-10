import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Upgrades from './Upgrades';
import PlanetView from './PlanetView';
import AlpacaCareCenter from './AlpacaCareCenter';
import Research from './Research';
import ControlCenter from './ControlCenter';
import Menu from './Menu';
import StatusBar from './StatusBar';


class UI extends React.Component {
    constructor() {
        super();
    };

    //
    // "Header           Upgrades  PlanetView  PlanetView"
    // "AlpacaCareCenter Upgrades  PlanetView  PlanetView"
    // "Research         ControlCenter ControlCenter Menu"
    // "Statusbar    Statusbar    Statusbar     Statusbar"
    //
    render() {
        return (
            <div className="grid">
                <div className="grid__header">
                    <Header />
                </div>

                <div className="grid__alpaca-care-center">
                    <AlpacaCareCenter />
                </div>

                <div className="grid__planetview">
                    <PlanetView />
                </div>

                <div className="grid__upgrades">
                    <Upgrades />
                </div>

                <div className="grid__research">
                    <Research />
                </div>

                <div className="grid__control-center">
                    <ControlCenter />
                </div>

                <div className="grid__menu">
                    <Menu />
                </div>

                <div className="grid__statusbar">
                    <StatusBar />
                </div>
            </div>
        );
    }
}

export default UI;
