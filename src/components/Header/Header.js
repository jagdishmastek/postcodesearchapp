import React from 'react';
import "./Header.css";
import PropTypes from 'prop-types';

/**
 * This component use to display header with text on UI
 * 
 */

const Header = ({
    title
}) => {
    return (
        <>
            <h1 title="Header" className="header">{title}</h1>
        </>
    )
}

// validating the prop type

Header.propTypes = {
    title: PropTypes.string.isRequired
  }

export default Header;