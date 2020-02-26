import React from 'react';
import PropTypes from 'prop-types';

function Button (props) {

  return (
    <div className={props.className}>{props.children}</div>
  );
}

Button.propTypes = {
children: PropTypes.element.isRequired,
  className:PropTypes.string,
};

Button.propTypes.default = {
  className: ''
}

export default Button;