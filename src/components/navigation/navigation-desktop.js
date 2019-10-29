import React from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-sticky-el';
import PropTypes from 'prop-types';

import navigationList from './constants';

const txt = text => <span>{text}</span>;

const renderNavItem = ({ to, text }) => (
    <div key={text} className='navbar-item'>
        <Link className='navbar-text' to={to()}>{txt(text)}</Link>
    </div>
);

export default () => (
    <Sticky style={{position: 'relative', zIndex: '102'}}>
        <div className="navigation">
            <Link to="/"><div className="logo" /></Link>
            <div className="links-container">
                {navigationList.map(item => renderNavItem(item))}
            </div>
        </div>
    </Sticky>
);

renderNavItem.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};