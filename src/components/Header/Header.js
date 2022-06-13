import React from 'react';
import "./Header.css";
import PropTypes from 'prop-types';

const Header = ({
    title
}) => {
    return (
        <>
            <h1 title="Header" className="header">{title}</h1>
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
  }

export default Header;