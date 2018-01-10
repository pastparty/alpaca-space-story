import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>Alpaca Space Story <span>vs 0.02 <em>&alpha;</em></span></h1>
            <small className="ressource-amount">{props.value} &times; alpaca wool</small>
        </div>
    );
}

export default Header;
